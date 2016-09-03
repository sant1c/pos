'use strict';

let User = require('../models/userModel');

exports.authenticate = function(userDet) {
  /*
   query for images of sponsors to be displayed 
   in dashboard section
   @nikhil version 1.0.1
  */
  return new Promise(function(resolve, reject) {
    console.log(userDet);
    User.findOne({username:userDet.username, password:userDet.password},function(err,user){
      if(err){
        reject(err);
      }
      if(!user){
        resolve("invalid user");
      }
      else{
        resolve("valid user");
      }
    })
  })


}