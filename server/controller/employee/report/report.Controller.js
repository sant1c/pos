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
const reportquery = require("../../../query/report.query");
/*
   controller for getting images of sponsor and games 
   @nikhil version 1.0
  */

exports.daily = function(req, res) {
  console.log(req.body);
  reportquery.dailyreport({
    date: req.body.date
  }).then(function(status) {
    console.log(status);
    res.send(status);
  });

}

exports.monthly = function(req, res) {
  reportquery.monthlyreport({
    date: req.body.date
  }).then(function(status) {
    console.log(status);
    res.send(status);
  });

}

exports.yearly = function(req, res) {
  reportquery.yearlyreport({
    date: req.body.date
  }).then(function(status) {
    console.log(status);
    res.send(status);
  });

}


/*
   controller for getting id of games 
   @nikhil version 1.0.1
  */