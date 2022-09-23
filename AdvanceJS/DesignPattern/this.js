"use strict";

// house

this.table = "window table";

//this inside inner function 
/*
//this gives error 
const cleanTable = function(soap){
    const innerfun = function(_soap){
    console.log(`cleaning ${this.table} using ${_soap}`);
        
    }
    innerfun(soap)
}
*/
//we have 3 solution to above problem 

//sol 1:-
/*
const cleanTable = function(soap){
    let that = this;
    const innerfun = function(_soap){
    console.log(`cleaning ${that.table} using ${_soap}`);
        
    }
    innerfun(soap)
}
*/
//sol 2 :-
/*
const cleanTable = function(soap){
    const innerfun = function(_soap){
    console.log(`cleaning ${this.table} using ${_soap}`);
        
    }
    innerfun.call(this,soap)
}
*/
// sol 3 :-
const cleanTable = function(soap){
    const innerfun = (_soap)=>{
    console.log(`cleaning ${this.table} using ${_soap}`);
        
    }
    innerfun(soap)
}
// arrow fun takes this of parent










this.garage = {
  table: "gargae table ",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  },
};

let privateRoom = {
  table: "private table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  },
};

// privateRoom.cleanTable();

// this.garage.cleanTable();



cleanTable.call(this,'some soap')
cleanTable.call(this.garage,'some soap')
cleanTable.call(privateRoom,'some soap')