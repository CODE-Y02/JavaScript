// Call
let obj1 = {
  num: 2,
};
/*

let addToThis = function(a){
    console.log(this.num + a)
}

addToThis.call(obj1,3)

*/

let addToThis = function(a, b, c){
  console.log(this.num + a+ b+c);
};


// Apply
let arr = [1,2,3]
addToThis.apply(obj1, arr);


