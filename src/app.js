"use strict";
exports.__esModule = true;
console.log('Hello typescript');
var a = 10;
var b = 30;
var myName = "Nguyễn Văn Trăm";
var nyAge = 20;
var status = true;
var myObj = { id: 1, name: "tram" };
var numberArr = [1, 2, 3, 4, 5];
var stringArr = ["a", "b", "c", "d"];
var objectArr = [{ id: 1, name: "tram1" }];
function sum(numA, numB) {
    return numA + numB;
}
// console.log(sum(a,b));
sum(a, b);
/**
 * tsc --init
 * target: "es2018"
 * "outDir": "./dist",
 * baseUrl: "./url"
 * sourceMap: true
 */
