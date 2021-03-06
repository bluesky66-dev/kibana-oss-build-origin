"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterAnnotations = exports.annotationFilter = exports.makeFilter = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * @param {Function} by - it's a callback which determines how data will be mapped.
 * @return {Function} function - a predefined filter function
 */
const makeFilter = by =>
/**
 * @param {*} value
 * @return {Function} function - the predefined filter function with a filter value
 */
value =>
/**
 * @param {Array|Object} data
 * @return {*} result - it depends on "by" outcome.
 */
data => by(data, value);
/**
 * @param {Array} annotations
 * [
 *   {key: 1555189200000, ...},
 *   {key: 1555263300000, ...},
 * ]
 * @param {*} filterValue
 * @return {Array} filtered array
 */


exports.makeFilter = makeFilter;

const annotationFilter = (annotations, filterValue) => annotations.filter(({
  key
}) => key <= filterValue);
/**
 * @type {Function}
 */


exports.annotationFilter = annotationFilter;
const filterAnnotations = makeFilter(annotationFilter);
exports.filterAnnotations = filterAnnotations;