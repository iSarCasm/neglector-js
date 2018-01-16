'use strict'

var acorn = require("./node_modules/acorn/dist/acorn.js");
const repl = require('repl');

var parse = function(sourceCode) {
  return acorn.parse(sourceCode);
}

var neglect = function(sourceCode) {
  try {
    parsedData = parse(sourceCode);
  } finally {
    return sourceCode;
  }
}

debugger;

module.exports = neglect
