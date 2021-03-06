"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

var _chalk = _interopRequireDefault(require("chalk"));

var _config = require("./config");

var _root = require("./root");

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 *
 * @internal
 * @param param0 - options
 */
async function bootstrap({
  configs,
  cliArgs,
  applyConfigOverrides,
  features
}) {
  if (cliArgs.optimize) {
    // --optimize is deprecated and does nothing now, avoid starting up and just shutdown
    return;
  } // `bootstrap` is exported from the `src/core/server/index` module,
  // meaning that any test importing, implicitly or explicitly, anything concrete
  // from `core/server` will load `dev-utils`. As some tests are mocking the `fs` package,
  // and as `REPO_ROOT` is initialized on the fly when importing `dev-utils` and requires
  // the `fs` package, it causes failures. This is why we use a dynamic `require` here.
  // eslint-disable-next-line @typescript-eslint/no-var-requires


  const {
    REPO_ROOT
  } = require('@kbn/utils');

  const env = _config.Env.createDefault(REPO_ROOT, {
    configs,
    cliArgs,
    isDevCliParent: cliArgs.dev && features.isCliDevModeSupported && !process.env.isDevCliChild
  });

  const rawConfigService = new _config.RawConfigService(env.configs, applyConfigOverrides);
  rawConfigService.loadConfig();
  const root = new _root.Root(rawConfigService, env, onRootShutdown);
  process.on('SIGHUP', () => reloadLoggingConfig()); // This is only used by the LogRotator service
  // in order to be able to reload the log configuration
  // under the cluster mode

  process.on('message', msg => {
    if (!msg || msg.reloadLoggingConfig !== true) {
      return;
    }

    reloadLoggingConfig();
  });

  function reloadLoggingConfig() {
    const cliLogger = root.logger.get('cli');
    cliLogger.info('Reloading logging configuration due to SIGHUP.', {
      tags: ['config']
    });

    try {
      rawConfigService.reloadConfig();
    } catch (err) {
      return shutdown(err);
    }

    cliLogger.info('Reloaded logging configuration due to SIGHUP.', {
      tags: ['config']
    });
  }

  process.on('SIGINT', () => shutdown());
  process.on('SIGTERM', () => shutdown());

  function shutdown(reason) {
    rawConfigService.stop();
    return root.shutdown(reason);
  }

  try {
    await root.setup();
    await root.start();
  } catch (err) {
    await shutdown(err);
  }
}

function onRootShutdown(reason) {
  if (reason !== undefined) {
    // There is a chance that logger wasn't configured properly and error that
    // that forced root to shut down could go unnoticed. To prevent this we always
    // mirror such fatal errors in standard output with `console.error`.
    // eslint-disable-next-line
    console.error(`\n${_chalk.default.white.bgRed(' FATAL ')} ${reason}\n`);
    process.exit(reason instanceof _errors.CriticalError ? reason.processExitCode : 1);
  }

  process.exit(0);
}