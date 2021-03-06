"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROLL_INDICES_START = exports.ROLL_DAILY_INDICES_INTERVAL = exports.ROLL_TOTAL_INDICES_INTERVAL = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Roll total indices every 24h
 */
const ROLL_TOTAL_INDICES_INTERVAL = 24 * 60 * 60 * 1000;
/**
 * Roll daily indices every 30 minutes.
 * This means that, assuming a user can visit all the 44 apps we can possibly report
 * in the 3 minutes interval the browser reports to the server, up to 22 users can have the same
 * behaviour and we wouldn't need to paginate in the transactional documents (less than 10k docs).
 *
 * Based on a more normal expected use case, the users could visit up to 5 apps in those 3 minutes,
 * allowing up to 200 users before reaching the limit.
 */

exports.ROLL_TOTAL_INDICES_INTERVAL = ROLL_TOTAL_INDICES_INTERVAL;
const ROLL_DAILY_INDICES_INTERVAL = 30 * 60 * 1000;
/**
 * Start rolling indices after 5 minutes up
 */

exports.ROLL_DAILY_INDICES_INTERVAL = ROLL_DAILY_INDICES_INTERVAL;
const ROLL_INDICES_START = 5 * 60 * 1000;
exports.ROLL_INDICES_START = ROLL_INDICES_START;