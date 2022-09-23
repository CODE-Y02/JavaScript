//  TASK 11 FUNCTIONS

/*
1) Guess output
a();

b();

function a() {
  console.log("inside a");
}

var b = function () {
  console.log("inside b");
};

output :- 
inside a
type error --> because b is variable in context

*/

// Give example of function declaration
function a() {
  console.log(" a is called ");
}

// Give example of function expression
let x = function(){
    console.log('x is called')
}

//Give example of anonynomous function
/*
function (){
console.log('iam  anonynomous 1 ')
}

()=>{console.log('iam  anonynomous 2')};

*/

//Write down the difference between params and arguments
function abc(param1,param2){
    //params --> param1 and parem2
    // params are variables whose value will be passed dynamically during function call
    console.log(param1+param2)
}
abc(1,2) // arguments --> 1,2
// arguments are values passed to params


// What are first class function?. Give an example with code
// ability of function to acts as value is callued first class functions
// in js we can pass function as value to other function and we can also return function from function

//ex- 
var firstClass = function(fun){
    console.log(fun) // log passed function
    return function done(){
        console.log('done')
    };
}

let returnedFun = firstClass(function(){
    console.log('this is fun')
})
console.log(returnedFun) // log returned done function
returnedFun()




// currying :-> we have function returning function and we want to call both
// ex- lets add 3 number in most difficult way 
function addThreeNum(num1){
    return (num2)=>{
        return function(num3){
            return num1 + num2 + num3;
        };
    }
}

console.log(addThreeNum(5)(2)(3))  //this is currying 

// same thing can be written as
const inner = addThreeNum(5)
const innermost = inner(2)
let sum = innermost(3)
console.log(sum)