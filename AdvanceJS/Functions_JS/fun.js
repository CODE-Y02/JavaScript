// statement vs expresion
a(); // output --> "a is called"
b(); // output --> type error because b is variable in context



// function statement aka function declaration
function a() {
  console.log("a is called");
}

//function expression :- when function is assigned to variable
var b = function () {
  console.log("b is called");
};

// Ananomys function :-
// function () {

// }
// ananymos function cannot be used standalone like above it gives syntax error ;
// Use :- anamomys function is used where function is used as values

