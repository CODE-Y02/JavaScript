// QUESTION 1
/*
console.log('a');
console.log('b');
setTimeout(()=> console.log('c'), 1000);
console.log('d');

answer
'a' 
'b'
'd'
'c'
reason :- 
in settimeout ()=> console.log('c') has clouser of parent function with 1000 , so it stores innerfunction somewhere and call it after 1000 ms , but js doesnot wait till 1s and so 'd' is logged first then 'c'
*/

// QUESTION 2
/*
console.log('a');
console.log('b');
setTimeout(()=> console.log('c'), 1000);
setTimeout(()=> console.log('c'), 0);
console.log('d');

answer :-
'a' 
'b'
'd'
'c'
'c'
reasons :- console.log() of 'a' 'b' 'd' are in global scope so they are exicuted first , setTimeout has completetly different context than global and innerfunction clouser is different from global 

*/

/*
var a = [1, 2, 3];
// create own map
Array.prototype.myMap =  (fun)=> {
  let n = this.length; // length of Array
  console.log(this.a);
  let newArr = [];

  for (let i = 0; i < n; i++) {
    let element = this[i]; //element at index i

    let ans = fun(element); //  calling function with element

    if (ans) newArr[i] = ans;
    else newArr[i] = element;
  }

  return newArr;
};

// a.myMap((item) => console.log(item + 1));

let a2 = a.myMap((item) => item * 10);

console.log(a2);

*/


















