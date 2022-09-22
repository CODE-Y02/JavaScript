// syntax of call apply bind
/*
let obj = {
  key: "val",
};

let functionName = function (arg1, arg2, arg3) {};

//call
functionName.call(obj, arg1, arg2, arg3);

//apply
functionName.apply(obj, [arg1, arg2, arg3]);

//bind
let bound = functionName.bind(obj);
bound(arg1, arg2, arg3);
*/

//  NOTE :- THIS MAY CREATE PLOBLEM WITH ARROW FUNCTION

// TASKS
// Write a function and use 'call' to call the function

let sum = function (a, b) {
  console.log(a + b);
};
sum.call(this, 1, 2);

//Write a program using apply
sum.apply(this, [11, 2]);

//Write a program using bind
let newFun = sum.bind(this);
newFun(5000, 2);

/*
Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
Dont pass in args. Read from 'this' and use BIND
*/

let student = {
  age: 20,
};

function print() {
  console.log(`age = ${this.age}`);
}

let printAge = print.bind(student);
printAge();

//Understand currying
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
/*
in multiplyByTwo we are setting x value permanently as x =2;
*/
multiplyByTwo(5); // 50== y in function

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//creating more than 1 fun from one fun of similar type

//  doing same thing using closure
let mul = function (x) {
  return function (y) {
    console.log(x * y);
  }
};

let mulBy2 = mul(2)
mulBy2(500)