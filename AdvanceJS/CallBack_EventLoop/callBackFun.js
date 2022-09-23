//what is callback fun ?
// function passed inside another function is called callback function;
// it makes async js possible

setTimeout(function () {
  console.log('time');
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});
