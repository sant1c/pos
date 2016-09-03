'use strict';

let Employee = require('../models/employeeModel');

exports.createEmp = function(empDet) {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */
  return new Promise(function(resolve, reject) {
    console.log(empDet);
    let employee= new Employee({
      name: empDet.name,
      empname: empDet.empname,
      designation: empDet.designation,
      joinedDate: empDet.joinedDate,
      address: empDet.address
    });

    employee.save(function(err){
      if(err){
        throw err;
      } 
      else{
        resolve("employee saved successfully");
      }
    });
  })


}