'use strict';

let Calc = require('../models/menuModel');
let Total = require('../models/calculationModel');

exports.calculation = function() {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */
  return new Promise(function(resolve, reject) {
    Calc.find({}, function(err, menu) {
      if (err) {
        reject(err);
      } else {
        resolve(menu);
      }
    })
  })
}

exports.totalcalc = function(calcDet) {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */
  return new Promise(function(resolve, reject) {
    console.log(calcDet);
    let total= new Total({
      tableno: calcDet.tableno,
      description: calcDet.description,
      date: calcDet.date,
      total: calcDet.total
    });

    total.save(function(err){
      if(err){
        throw err;
      } 
      else{
        resolve("total saved successfully");
      }
    });
  })
}

