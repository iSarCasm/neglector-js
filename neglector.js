'use strict'

var acorn = require("./node_modules/acorn/dist/acorn.js");
const repl = require('repl');

var neglect = function(sourceCode) {
  repl.start('> ');
  return acorn.parse(sourceCode);
}

debugger;

module.exports = neglect
