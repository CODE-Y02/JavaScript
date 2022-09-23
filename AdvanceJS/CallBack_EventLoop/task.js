/*
1)
output :- 
inside x
inside y 
timer expired
*/

/*
2) output:-
inside x 
inside y 
timer2 expired
timer1 expired
*/

/*
 3) output:-
    inside x 
    timer2 expired
    inside y
    timer1 expired
*/

/*
4) How does the browser go about execution of the above program.Check the hint if you are not sure. The above questions are very important.

answer:- settimer of timer 1 and 2 are first stored in memory (their different context will be creted);
the execution pointer continues 
then we give function x , function y as argument  during x() call;
now "inside x" is printed then we call y(),
y started set timeout with t=0 in memory ;

now when all execution of main context end i.e call stack is empty now execution of async function i.e (settimeout) will start ,
it will check is timer expired then if two time expired at same time then it will execute in fifo order
*/

/*
Make a button and onclick of the button console.log('clicked me') like the way the youtuber does

*/

//Make a button and onclick of the button console.log('clicked me') like the way the youtuber does
function attachEventListber() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEventListber();

//Add an event listener called DOMCONTENTLOADED , inside this add a call back function which consoles "DOM has loaded"
function addCallBack(fun) {
  document.addEventListener("DOMContentLoaded", fun);
}
addCallBack(() => console.log("DOM IS LOADED"));


//7) What is garbage collection . Why do we need to free up memory , any idea
// garbage collection :-
// eventlistners holds memory space thats why they are heavy 
// therefore we need to remove un necessary event listners 
