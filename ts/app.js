"use strict";
var num1Ele = document.getElementById("num1");
var num2Ele = document.getElementById("num2");
var btnEle = document.querySelector("button");
function add(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return a + " " + b;
    return +a + +b;
}
let numResults = []; // generics
let textResults = [];
function printResults(resultObj) {
    console.log(resultObj.val);
}
btnEle.addEventListener("click", () => {
    var num1 = num1Ele.value;
    var num2 = num2Ele.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    let stringRes = add(num1, num2);
    textResults.push(stringRes);
    // console.log(result);
    console.log(numResults, textResults);
    printResults({ val: result, timestamp: new Date() });
});
// generics with promise
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("hello TS 😀");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(" "));
});
