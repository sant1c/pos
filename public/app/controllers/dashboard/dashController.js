/*****************************************************************************************
Created                                       development   :   info-ative
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
*********************************************************************************************
file name   :  logincontroller.js

description :  injects slider , horizontal scroll and news feedto the 
               dashboard controller scope
*********************************************************************************************
date      version       auther               Change Description  
*********************************************************************************************         
31/8/016   1.0        anish                   created                                                                                            
*********************************************************************************************/

// Version 1.0

define(["app/settings/dashboard/dashSettings.js"], function() {
  var coremodule = angular.module('coremodule');
  coremodule.controller('dashController', ['$scope', 'dashFactory', function($scope, dashFactory) {
    console.log("dashboard Controller");
  }]);
});
/********--------
                 |
                 |
                  -------------              o
                               |            -|- 
                               |            / \
                                // ---------------********/

/* steps you buld will lead u t0o sucess  @anish*/