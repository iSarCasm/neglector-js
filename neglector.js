'use strict'

var acorn = require("./node_modules/acorn/dist/acorn.js")

var neglect = function(sourceCode) {
  debugger;
  return acorn.parse(sourceCode);
}

module.exports = neglect
