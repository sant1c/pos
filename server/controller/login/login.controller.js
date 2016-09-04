/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  image.controller.js

description :  handle the image section of dashboard
****************************************************************************
date        version       auther               Change Description  
***************************************************************************  
8/10/2016    1.0          Nikhil        Controller for getting images of sponsor and games. 
8/21/2016    1.0.1        Nikhil        Controller for getting id of games.
**************************************************************************/
const loginquery = require("../../query/login.query");
/*
   controller for getting images of sponsor and games 
   @nikhil version 1.0
  */

exports.getLogin = function(req, res) {
  loginquery.authenticate({
    username: req.body.username,
    password: req.body.password
  }). then(function(status){
    res.send(status);
  });

}

/*
   controller for getting id of games 
   @nikhil version 1.0.1
  */
