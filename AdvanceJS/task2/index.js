// Scope and windows object lexical scoping works

/*

var a = 2;
var c = 2;

function b() {
  var x = 2;
  var c = 4;
  console.log(c);
}

console.log(a);
console.log(this.a);
console.log(this.c);
console.log(this.x);
console.log(window.a);
console.log(window.x);
console.log(b());



question 1 :-
CODE ---> OUTPUT ---> REASON
console.log(a);         -->     2         -->   value of a ==2 after execution 
console.log(this.a);    -->     2         -->   this means current obj , by default its window and in window obj value of a = 2 (Global scope)
console.log(this.c)     -->     2         -->   this === window by default , in global scope value of c = 2 
console.log(this.x)     -->  undefined    -->   this means we are looking in object , therefore this.x is just a refrence with undefined 
console.log(window.a)   -->    2          -->   window is obj , in window obj value of a = 2 (Global scope)
console.log(window.x)   -->  undefined    -->   window is obj , obj.key  is just a refrence to loc where value is store , by default value to any refrence is undefined 
console.log(b());       -->    4          -->  in context of function b , value of c =4 during execution phase 
                        --> undefined   --> b is not returning anything
*/

/*
function abc() {
  console.log(a);
}

var a = 7;
abc();

question 2 :-
CODE ---> OUTPUT ---> REASON
abc()                   -->            -->   function call abc 
console.log(a);         -->     7       -->  global variables are available accessible any function and a is declared and defined at global scope
*/

/*

function abc() {
  console.log(a);
}

abc();
var a = 7;

question 3 :-
CODE ---> OUTPUT ---> REASON
abc()                   -->            -->   function call abc ,create context for abc
console.log(a)          -->    undefined      -->  during memory allocation a = undefined but as abc is called before vale is asigned to a , therefore its undefined
*/

/*

function outerfunction() {
  console.log(a);
  var c = 10;
  innerfunction();

  function innerfunction() {
    console.log(b);
    console.log(c);
  }
}

var a = 7;
var b = 3;
outerfunction();



question 4 :-
CODE ---> OUTPUT ---> REASON
console.log(a);        -->    7    -->   as a is global with value a =7 , outerfunction(); called after defining value of a
console.log(b);        -->     3   -->   b is not present in innerfunction so will we check scope above it and so on , b is global b = 3 
console.log(c);        -->    10   -->   b is not present in innerfunction so will we check scope above it , c is in outerfunction  c =10 

*/

/*
function outerfunction() {
  console.log(a);
  var a = 10;
  innerfunction();

  function innerfunction() {
    console.log(a);
    console.log(window.a);
    console.log(this.a);
  }
}

var a = 7;
var b = 3;
outerfunction();

question 5 :-
CODE ---> OUTPUT ---> REASON
console.log(a);        -->  undefined   -->   as a is present in current scope and during memeory allocation a is declared as undefined 
console.log(a);        -->    10    -->   a is not present in innerfunction so will we check scope above it , a =10 in outerfunction before calling innerfunction
console.log(window.a); -->    7     -->   window is global scope , in global scope a =7
console.log(this.a);   -->    7     -->  this :- refer to object invoking function , innerfunction is not called using any object , now it will look at scope level above it 
                                        outerfunction is also not called by using any object , now next scope is global , i.e this == window 

*/

// let var const

/*

 //QUESTION 1

console.log(a)
console.log(b);
let a =5;
var b =6;
console.log(b);


output:

ReferenceError  -->   a is declared as let it is under dead zone till value is assigned
undefined       -->   b is declared as var its value is undefined until its defined;
6               -->   b is declared as var and value assigned 6
*/

/*
QUESTION 2

What is the difference between type error vs syntax error vs reference error.
Give Examples of when you can encounter each one of them.

Answer :- 
whenever we try to re define const variable we get type error;
ex :- const x =1000;
   x = 50 // will give type error 

syntex error is error we get when we write code incorrectly as per rules of langauge
ex:- let a = 50;
      let a = 10; // will give syntax error because let can ony be declared once in js 

reference error we get when compiler try to find value that dont exist 
ex :- console.log(z) // z dont exist , never declared 
same thing will happen with let variables if there value is not defined
*/

/*
QUESTION 3

console.log(a);
var a = 5;
console.log(b) //we havent initialized b, Guess the output

answer :- reference error : - b is never declared
*/

/*
QUESTION 4

let a = 5;
var b = 6;

console.log(this.b);
console.log(window.b)
console.log(window.a)
console.log(this.a);

output --> reason
6  -- > this == window , b is in window scope
6  -- > b is in scope or context of window
undefined --> a is declared as let , its scope is different than global (window ) , and window.a is same as obj.x i.e reference therefore default value of any reference in any object is undefined;
undefined --> this == window obj , as same reason as above
*/

/*
QUESTION 5

let a =5;
let a = 6;

What will be the error

Answer :- Syntax error  because we cannot re declare same variable with let in JS 

*/

/*
QUESSTION 6

let a =6;
const b

What will be the error

Answer:- 
const b will give syntax error , because
if we declarelike  const b; , it means const b = undefined , now later we cannot reassign value of const as its constant ,

therefore we have to define and declare const same time otherwise its give syntax error ,
Meaning of syntax error is you are going against rules of programming language :).

*/

// itrate through object
let obj = {
  key01: "val01",
  key02: "val02",
  key03: "val03",
};

// let arrayOfKeys = Object.keys(obj)

// console.log(arrayOfKeys)

Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});
