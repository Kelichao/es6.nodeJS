// 在做这一步引入的时候会
var test = require("./test"); 

// 两者效果一样  var test = require("./test.js");
console.log(test);
/*
// 输出内容
大家好
{ a: 1, b: 2 }
{}
*/

console.log(module.exports);// 空对象{}





