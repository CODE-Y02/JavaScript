var num1Ele = document.getElementById("num1") as HTMLInputElement;
var num2Ele = document.getElementById("num2") as HTMLInputElement;
var btnEle = document.querySelector("button")!;
// vale can therotically be null but TS WONT ALLOW NULL therefore ! is used to fore it

//type is used to create own type
type numOrStr = number | string;
type Result = { val: number; timestamp: Date };

//interface
interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(a: numOrStr, b: numOrStr) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + " " + b;
  return +a + +b;
}

let numResults: Array<number> = []; // generics
let textResults: string[] = [];

function printResults(resultObj: ResultObj | Result) {
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

// generics with promise

const myPromise = new Promise<string>((res, rej) => {
  setTimeout(() => {
    res("hello TS 😀");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result.split(" "));
});
