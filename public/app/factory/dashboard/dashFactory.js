/*************************************************************************
Created
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   : loginfactory.js

description :  handles dashboard services
***************************************************************************
date             auther     version     Change Description  
***************************************************************************
8/24/2016        anish       1.0        created
*************************************************************************** */        
define([],function() {
  var coremodule = angular.module('coremodule');
  coremodule.factory('dashFactory', function($http) {
			var dash = {};
		 dash.getTabledata = function(url) {
        return $http.get(url);
      }
      
			return dash;
	});
});

/********--------
                 |
                 |
                  -------------              o
                               |            -|- 
                               |            / \
                                // ---------------********/

/* steps you buld will lead u t0o sucess  @anish*/