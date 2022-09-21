//hoasting
// console.log(x)
// console.log(hello)
// console.log(bye)
// hello();
// bye()

// var x =10;

// function hello(){
//     console.log('hello')
// }
// var bye= function(){
// console.log('bye bye ')
// }

// study call stack
/*
console.log(x)
console.log(hello)
console.log(bye)
hello();
bye()
*/

printName("YAVTECH");

console.log(a);

var a = 3;

function printName(name) {
  console.log(name);
}

// TASK HOASTING
/*
question 1:
output :-YAVTECH
        3
reason:- in memory allocation phase:- a = undefined and printName= function itself  assigned 
        in code execution phase :- printName function is called , and new printName context is created inside global context 
                                    printName :- memory allocation :- name = undefined
                                                 execution phase :-  name = YAVTECH and console.log(YAVTECH)
                                
                                :-a = 3 
*/

/*

question 2:
output :-YAVTECH
        undefined
reason:- in memory allocation phase:- a = undefined and printName= function itself  assigned 
        in code execution phase :- printName function is called , and new printName context is created inside global context 
                                    printName :- memory allocation :- name = undefined
                                                 execution phase :-  name = YAVTECH and console.log(YAVTECH)
                                
                                :-a = undefined , therefore  console.log(undefined)
*/
/*

question 3:
output :-printName is not a function
        undefined
reason:- in memory allocation phase:- a = undefined and printName= undefined 
        in code execution phase :- printName function is called ,but printName is variable not a function                                    
                                :-a = undefined

*/
/*
question 4:
output :-undefined
        undefined
reason:- in memory allocation phase:- a = undefined and printName= undefined
        in code execution phase :- printName = undefined if printed                                
                                :-a = undefined printed


*/
/*
question 5:
output :-undefined
        a is not declared ERROR
reason:- in memory allocation phase:- printName= undefined
        in code execution phase :- printName = undefined if printed                                
                                a is not declared

*/
