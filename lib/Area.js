"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateArea = calculateArea;
exports.PI = void 0;
var PI = 3.14;
exports.PI = PI;

function calculateArea() {
  var shape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (shape === 'circle') {
    return areaCircle(radius);
  } else if (shape === 'rectangle') {
    return areaRectangle(radius, height);
  } else {
    return areaCylinder(radius, height);
  }
}

function areaCircle(radius) {
  return PI * radius * radius;
}

function areaRectangle(radius, height) {
  return radius * height;
}

function areaCylinder(radius, height) {
  return 2 * (PI * radius * height + PI * radius * radius);
}