"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello typescript');
const a = 10;
const b = 30;
const myName = "Nguyễn Văn Trăm";
const nyAge = 20;
const status = true;
const myObj = { id: 1, name: "tram" };
const numberArr = [1, 2, 3, 4, 5];
const stringArr = ["a", "b", "c", "d"];
const objectArr = [{ id: 1, name: "tram1" }];
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
//# sourceMappingURL=app.js.map