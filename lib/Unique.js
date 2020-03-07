"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = unique;

// Module that returns an array of unique elements from an array
function unique() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Array.from(new Set(arr));
}