"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datatableToCSV = datatableToCSV;
exports.CSV_MIME_TYPE = exports.LINE_FEED_CHARACTER = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// Inspired by the inspector CSV exporter
const LINE_FEED_CHARACTER = '\r\n';
exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
const nonAlphaNumRE = /[^a-zA-Z0-9]/;
const allDoubleQuoteRE = /"/g;
const CSV_MIME_TYPE = 'text/plain;charset=utf-8'; // TODO: enhance this later on

exports.CSV_MIME_TYPE = CSV_MIME_TYPE;

function escape(val, quoteValues) {
  if (val != null && typeof val === 'object') {
    val = val.valueOf();
  }

  val = String(val);

  if (quoteValues && nonAlphaNumRE.test(val)) {
    val = `"${val.replace(allDoubleQuoteRE, '""')}"`;
  }

  return val;
}

function datatableToCSV({
  columns,
  rows
}, {
  csvSeparator,
  quoteValues,
  formatFactory,
  raw
}) {
  // Build the header row by its names
  const header = columns.map(col => escape(col.name, quoteValues));
  const formatters = columns.reduce((memo, {
    id,
    meta
  }) => {
    memo[id] = formatFactory(meta === null || meta === void 0 ? void 0 : meta.params);
    return memo;
  }, {}); // Convert the array of row objects to an array of row arrays

  const csvRows = rows.map(row => {
    return columns.map(column => escape(raw ? row[column.id] : formatters[column.id].convert(row[column.id]), quoteValues));
  });

  if (header.length === 0) {
    return '';
  }

  return [header, ...csvRows].map(row => row.join(csvSeparator)).join(LINE_FEED_CHARACTER) + LINE_FEED_CHARACTER; // Add \r\n after last line
}