var num1Ele = document.getElementById("num1") as HTMLInputElement;
var num2Ele = document.getElementById("num2") as HTMLInputElement;
var btnEle = document.querySelector("button")!;
// vale can therotically be null but TS WONT ALLOW NULL therefore ! is used to fore it
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + " " + b;
  return +a + +b;
}

let numResults: number[] = [];
let textResults: string[] = [];

function printResults(resultObj: { val: number; timestamp: Date }) {
  console.log(resultObj.val);
}

btnEle.addEventListener("click", () => {
  var num1 = num1Ele.value;
  var num2 = num2Ele.value;
  var result = add(+num1, +num2);
  numResults.push(result as number);
  let stringRes = add(num1, num2);
  textResults.push(stringRes as string);

  // console.log(result);
  console.log(numResults, textResults);
  printResults({ val: result as number, timestamp: new Date() });
});
