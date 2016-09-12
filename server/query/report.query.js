'use strict';

let Report = require('../models/calculationModel');

exports.dailyreport = function(getDate) {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */

  var date= new Date(getDate.date);
  var month= date.getMonth() + 1;
  return new Promise(function(resolve, reject) {
    Report.find({date:{$eq: date}}, function(err, menu) {
      if (err) {
        reject(err);
        console.log(err);
      } else {
      	console.log("success");
        resolve(menu);
      }
    })

  })
}

exports.monthlyreport = function(getDate) {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */

  
  // console.log(typeof(month));

  return new Promise(function(resolve, reject) {
  	var date= new Date(getDate.date);
  let month= date.getMonth() + 1;
  let year= date.getFullYear();
  	Report.find({$match : function() { return (this.date.getMonth() + 1 == month && this.date.getFullYear()==year)} }, function(err, menu) {
      if (err) {
        reject(err);
        console.log(err);
      } else {
      	console.log("success");
        resolve(menu);
      }
    })

  })
}

exports.yearlyreport = function(getDate) {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */

  
  // console.log(typeof(month));

  return new Promise(function(resolve, reject) {
  	var date= new Date(getDate.date);
  let year= date.getFullYear();
  	Report.find({$match : function() { return (this.date.getFullYear()==year)} }, function(err, menu) {
      if (err) {
        reject(err);
        console.log(err);
      } else {
      	console.log("success");
        resolve(menu);
      }
    })

  })
}