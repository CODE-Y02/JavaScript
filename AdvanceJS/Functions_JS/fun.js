// NOTE :- PS VIEW PREVIOUS COMMIT FOR ALL TOPICS

// First class function
// we can pass function inside of functions
var b = function (par1) {
  console.log(par1);
};

b(function () {});

function xyz() {}
b(xyz);

//we can also return function from function
var z = function (par1) {
  return function () {};
};

console.log(z());

// this abality to use functon as values to pass as arguments and return from functions know as first class function 

// first class citizens -> ability to used like values