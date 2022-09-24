// task 15 Application of event loop

//Guess the output with reason stating why you chose the answer

/*
1) output :-
a
b
d
c

reason:- console.log() are syncronous tasks and settimeout is async task ;
async will be executed after the execution of all sync tasks and when call stack is empty;

 */

/*
2) output :-
a
b
d
c

reason:- console.log() are syncronous tasks and settimeout is async task ;
async will be executed after the execution of all sync tasks and when call stack is empty;

 */

/*
3) output :-
a
b
d
c
e

reason:- console.log() are syncronous tasks and settimeout is async task ;
async will be executed after the execution of all sync tasks and when call stack is empty;
    now we have two timers of 0 ms and 1000ms , timer of 0ms will expired first so its callback function will move into callback queue and then after 1000ms other will also move , it maintain FIFO order ;

    now when call stack is empty (when all sync code done executing and GCE is removed ), event loop will push task one by one in call stack and execute it ;
    NOTE :- only single async callback will be push into call stack every time and after its removed event loop will again check callback queue for remaining tasks ;

 */

/*
 spread operator is used to copy , update and add new element in object 
 its also used to union arrays
*/


//  OBJECTS
const obj1 = {
  key1: "val1",
  key2: "val2",
};
console.log(obj1); //original obj


// copy obj to new obj , update value of key , add new key using spread operator

const obj2 = { ...obj1, key1: "value001", key3: "VAL_003" };

console.log(obj2);


// array 
let a1 =[1,2,3];
let a2 = [2,7,9];

// union of two array 
const a3 = [...a1,...a2]
console.log(a3)


