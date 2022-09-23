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
const cleanTable = function (soap) {
  const innerfun = (_soap) => {
    console.log(`cleaning ${this.table} using ${_soap}`);
  };
  innerfun(soap);
};
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

// this inside constructor
let createRoom = function (name) {
  this.table = `${name}'s Table`;
};

createRoom.prototype.cleanTable = function (soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};
const JakesRoom = new createRoom("jake");
const JameRoom = new createRoom("jame");

JakesRoom.cleanTable()
