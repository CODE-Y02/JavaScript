//what is callback fun ?
// function passed inside another function is called callback function;
// it makes async js possible
/*
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
*/


//counting how many time btn is clicked 

// eventlistnere along with closure 
function attachEventListber(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("button clicked",++count);
        
      });
}
attachEventListber();



