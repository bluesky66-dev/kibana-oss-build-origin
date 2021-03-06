"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStats = getStats;

var _lodash = require("lodash");

var _get_past_days = require("./get_past_days");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/*
 * Parse the response data into telemetry payload
 */
async function getStats(esClient, index) {
  const searchParams = {
    size: 10000,
    // elasticsearch index.max_result_window default value
    index,
    ignoreUnavailable: true,
    filterPath: ['hits.hits._id', 'hits.hits._source.visualization', 'hits.hits._source.updated_at'],
    body: {
      query: {
        bool: {
          filter: {
            term: {
              type: 'visualization'
            }
          }
        }
      }
    }
  };
  const {
    body: esResponse
  } = await esClient.search(searchParams);
  const size = (0, _lodash.get)(esResponse, 'hits.hits.length', 0);

  if (size < 1) {
    return;
  } // `map` to get the raw types


  const visSummaries = esResponse.hits.hits.map(hit => {
    const spacePhrases = hit._id.split(':');

    const lastUpdated = (0, _lodash.get)(hit, '_source.updated_at');
    const space = spacePhrases.length === 3 ? spacePhrases[0] : 'default'; // if in a custom space, the format of a saved object ID is space:type:id

    const visualization = (0, _lodash.get)(hit, '_source.visualization', {
      visState: '{}'
    });
    const visState = JSON.parse(visualization.visState);
    return {
      type: visState.type || '_na_',
      space,
      past_days: (0, _get_past_days.getPastDays)(lastUpdated)
    };
  }); // organize stats per type

  const visTypes = (0, _lodash.groupBy)(visSummaries, 'type'); // get the final result

  return (0, _lodash.mapValues)(visTypes, curr => {
    const total = curr.length;
    const spacesBreakdown = (0, _lodash.countBy)(curr, 'space');
    const spaceCounts = (0, _lodash.values)(spacesBreakdown);
    return {
      total,
      spaces_min: (0, _lodash.min)(spaceCounts),
      spaces_max: (0, _lodash.max)(spaceCounts),
      spaces_avg: total / spaceCounts.length,
      saved_7_days_total: curr.filter(c => c.past_days <= 7).length,
      saved_30_days_total: curr.filter(c => c.past_days <= 30).length,
      saved_90_days_total: curr.filter(c => c.past_days <= 90).length
    };
  });
}