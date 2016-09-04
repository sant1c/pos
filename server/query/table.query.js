'use strict';

let Table = require('../models/tableModel');

exports.tablecount = function() {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */
  return new Promise(function(resolve, reject) {
    Table.find(function(err, tables) {
      if (err){
        reject(err);
      } 
      else{
        resolve(tables);
      }
    })
  })


}