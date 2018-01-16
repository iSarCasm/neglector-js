'use strict'

// var acorn = require("./node_modules/acorn/dist/acorn.js")

var neglect = function(sourceCode) {
  console.log("Neglecting...");
  console.log(acorn.parse(sourceCode));
}

// exports.neglect = neglect

neglect(`
  var x = 13;
  var z = 14;
  var sf4fxc = 34904;
  var d = x + z;
  console.log(d);
`)

neglect(`
  var x = "13;14:15"
  var z = false
  var s = x.split(";")[2]
`)

neglect(`
  var a = 13;
  var b = function(x) {
    var a = 4;
    return x + a;
  }
`)
