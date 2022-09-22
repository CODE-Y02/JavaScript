// // promises
// const myPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         //on resolve
//         resolve('hi your request is accepted');
//         //on reject
//         // reject('request DEnied');
//     })
// }

// console.log(myPromise())

//spread operator
let sumOne = (a, b) => a + b;

let myArr = [5, 1];
console.log(sumOne(...myArr)); // spread

// rest operator
// it do exactly opposite of spread 
let sumAll = (...args) => {
  // when we have ... kind of statement in function assume we are getting array
  console.log(args)
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};
console.log(sumAll(1, 2, 3, 9, 55, 5, 5));
