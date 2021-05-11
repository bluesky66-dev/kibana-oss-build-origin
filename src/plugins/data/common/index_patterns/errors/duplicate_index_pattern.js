"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DuplicateIndexPatternError = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class DuplicateIndexPatternError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateIndexPatternError';
  }

}

exports.DuplicateIndexPatternError = DuplicateIndexPatternError;