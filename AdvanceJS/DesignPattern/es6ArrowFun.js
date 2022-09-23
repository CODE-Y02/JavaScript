"use strict";

// var getA = function(a){
//     return a;
// }

//same fumction getA in arrow format
// let getA = a =>a;
// console.log(getA(1))

// let square = a => a*a;
// let square = (a) => {
//   return a * a;
// };
// console.log(square(3));

// var a = 5
// let square = () => {
//   return a * a;
// };
// console.log(square());

// let mul = (a,b) => {
//   return a * b;
// };
// console.log(mul(2,3));

/* // this gives NAN
 * var x = function(){
    this.val =1;
    setTimeout(function(){this.val++;
    console.log(this.val)},1)
}

var xx = new x()

 */
/*
// soln 1
var x = function () {
  var that = this;
  this.val = 1;
  setTimeout(function () {
    that.val++;
    console.log(that.val);
  }, 1);
};

var xx = new x();*/

//soln using fat arrow 
// var x = function () {
//   this.val = 1;
//   setTimeout( () =>{
//     this.val++;
//     console.log(this.val);
//   }, 1);
// };

// var xx = new x();


