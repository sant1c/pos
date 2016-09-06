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
const calcquery = require("../../../query/calculation.query");
/*
   controller for getting images of sponsor and games 
   @nikhil version 1.0
  */

exports.calc = function(req, res) {
  calcquery.calculation({}).then(function(status) {
    console.log(status);
    res.send(status);
  });

}

exports.total = function(req, res) {
  calcquery.totalcalc({
    tableno: req.body.tableno,
    description: req.body.description,
    date: req.body.date,
    total: req.body.total
  }).then(function(status) {
    console.log(status);
    res.send(status);
  });

}
/*
   controller for getting id of games 
   @nikhil version 1.0.1
  */