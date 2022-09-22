// // promises
/*const myPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         //on resolve
//         resolve('hi your request is accepted');
//         //on reject
//         // reject('request DEnied');
//     })
// }

 console.log(myPromise())
*/

// rest operator and spread combo
/*
let sumAll = (a, b, ...args) => {
  let mul = a * b;
  console.log(args);
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, mul];
};
console.log(sumAll(1, 2, 3, 9, 55, 5, 5));

let a = [1, 5, 7];
let b = [7, "a"];
let newarr = [...a, ...b];
console.log(newarr);
*/

// destructuring 
/*//arrays
const user = ["yatharth",1024,"dev"]
let [Name,Num,role] = user;
console.log(`user =>${Name} role => ${role}`)
*/

//objects
const user ={
    name:'yatharth',
    num:1024,
    role:'DEV'
}

// TRY THIS FIRST 
// const {Name,num , role} = user
// console.log(`user =>${Name} role => ${role}`)
// Name and name in object doesnt match 
// for objects variable name needs to samme as keys in obj

const {num , role,name} = user

console.log(`user =>${name} role => ${role}`)


