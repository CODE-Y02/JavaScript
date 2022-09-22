function x() {
  for(var i=1;i<6;i++){
    function close(n) {
      setTimeout(()=>{
        console.log(n);
      },n*1000)
    }
    close(i)
  }
}
x()