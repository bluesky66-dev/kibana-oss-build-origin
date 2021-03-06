"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSplitColors = getSplitColors;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function getSplitColors(inputColor, size = 10, style = 'kibana') {
  const color = new _color.default(inputColor);
  const colors = [];

  let workingColor = _color.default.hsl(color.hsl().object());

  if (style === 'rainbow') {
    return ['#68BC00', '#009CE0', '#B0BC00', '#16A5A5', '#D33115', '#E27300', '#FCC400', '#7B64FF', '#FA28FF', '#333333', '#808080', '#194D33', '#0062B1', '#808900', '#0C797D', '#9F0500', '#C45100', '#FB9E00', '#653294', '#AB149E', '#0F1419', '#666666'];
  } else if (style === 'gradient') {
    colors.push(color.string());
    const rotateBy = color.luminosity() / (size - 1);

    for (let i = 0; i < size - 1; i++) {
      const hsl = workingColor.hsl().object();
      hsl.l -= rotateBy * 100;
      workingColor = _color.default.hsl(hsl);
      colors.push(workingColor.rgb().toString());
    }
  }

  return colors;
}