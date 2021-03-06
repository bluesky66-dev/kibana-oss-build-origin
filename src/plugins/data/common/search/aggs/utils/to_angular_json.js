"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toAngularJSON = toAngularJSON;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * An inlined version of angular.toJSON(). Source:
 * https://github.com/angular/angular.js/blob/master/src/Angular.js#L1312
 *
 * @internal
 */
function toAngularJSON(obj, pretty) {
  if (obj === undefined) return '';

  if (typeof pretty === 'number') {
    pretty = pretty ? 2 : null;
  }

  return JSON.stringify(obj, toJsonReplacer, pretty);
}

function isWindow(obj) {
  return obj && obj.window === obj;
}

function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}

function toJsonReplacer(key, value) {
  let val = value;

  if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
    val = undefined;
  } else if (isWindow(value)) {
    val = '$WINDOW';
  } else if (value && window.document === value) {
    val = '$DOCUMENT';
  } else if (isScope(value)) {
    val = '$SCOPE';
  }

  return val;
}