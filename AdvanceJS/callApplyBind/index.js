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

addToThis.call(obj1, 1, 2, 3);

