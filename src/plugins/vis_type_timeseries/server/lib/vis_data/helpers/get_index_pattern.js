"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIndexPatternObject = getIndexPatternObject;

var _lodash = require("lodash");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
async function getIndexPatternObject(req, indexPatternString) {
  let defaultIndex;

  if (!indexPatternString) {
    defaultIndex = await req.getUiSettingsService().get('defaultIndex');
  } // getting the matching index pattern


  const savedObjectClient = req.getSavedObjectsClient();
  const indexPatternObjects = await savedObjectClient.find({
    type: 'index-pattern',
    fields: ['title', 'fields', 'timeFieldName'],
    search: indexPatternString ? `"${indexPatternString}"` : null,
    search_fields: ['title']
  }); // getting the index pattern fields

  const indexPatterns = indexPatternObjects.saved_objects.filter(obj => obj.attributes.title === indexPatternString || defaultIndex && obj.id === defaultIndex).map(indexPattern => {
    const {
      title,
      fields,
      timeFieldName
    } = indexPattern.attributes;
    return {
      title,
      timeFieldName,
      fields: JSON.parse(fields)
    };
  });
  const indexPatternObject = indexPatterns.length === 1 ? indexPatterns[0] : null;
  return {
    indexPatternObject,
    indexPatternString: indexPatternString || (0, _lodash.get)(indexPatternObject, 'title', '')
  };
}