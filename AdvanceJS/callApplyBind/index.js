// Call
let obj1 = {
  num: 2,
};
// let obj2= {
//   num: 15,
// };
/*

let addToThis = function(a){
    console.log(this.num + a)
}

addToThis.call(obj1,3)

*/

let addToThis = function (a, b, c) {
  //   console.log(this.num + a+ b+c);
  return this.num + a + b + c;
};

// Apply
/*
let arr = [1, 2, 3];
console.log(addToThis.apply(obj1, arr));
console.log(addToThis.apply(obj2, arr));
*/

// BIND
let arr = [1, 2, 3];
let bound = addToThis.bind(obj1);
console.dir(bound);
console.log(bound(1,2,3));
