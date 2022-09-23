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

//Task 10 Adv closure
/*
1)
function y() {
  setTimeout(() => console.log(a), 1000);

  console.log("Done Coding");
}

y();

output :-
Done Coding
reference error

reason :-
when we call y , context of set timeout along with closure of y is created saperately and once remaining function is executed then settimeout start executing,
there is no a in sxope of y or closure of settimeout




2)
function y() {
  setTimeout(() => console.log(a), 0);

  console.log("Done Coding");
}

y();

output:-
Done Coding
refrence error 

reason :- settimeout is under function y , once y done executing then its settimer will start executing no matter whats timer is , therefore we got 'Done coding' first . 
we got reference error because a is not present in settimemout or in closure of y 



3)
function y() {
  for (var i = 1; i < 6; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }

  console.log("Done Coding");
}

y();

output :- 
Done Coding
6 5 times 

reason:- when we call y , for loop is executed inside for loop we declared i using var this var actually is decalred in its parent scope i.e scope of function y so in for loop we have settimeout so once for loop completed exectution we have i =6 now when  we start executing settimeout at end we have i pointed to its value 6 

like -> function y() {
  var i ;
  for (i=1 ; i < 6; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
  // at end we get i =6 

  console.log("Done Coding");
}




4)
function y() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }

  console.log("Done Coding");
}

y();


output:-
Done Coding
1
2
3
4
5

reason:- 
settimeout will be exicuted once cunction y execution is done , therefore we get Done Coding first, 
as in for loop let is block scope value of i will be different for each settimeout therefore we get 1 2 3 4 5


5) Answer:-

const Name = (arr)=>{
  let i =0;
  return function x(){
    console.log("hello"+arr[i])
    i++;
  }
}

let fun = Name(["Ram","Shyam"]);

fun()// Print Hello Ram

fun()//print Hello Shyam

*/