"use strict";

// house

this.table = "window table";

const cleanTable = function (soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
};
// cleanTable()
// cleanTable.call(this,'some soap')


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