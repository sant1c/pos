/*************************************************************************
Created
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   : coremodule.js

description :  handles core functionalities of winwin app
***************************************************************************
date             auther                 Change Description  
***************************************************************************         

**************************************************************************/

define(['app/runners/logrunner.js'], function(logrunner) {
  /*
  core module defination and initializaiton
 @anish
*/
  var coremodule = angular.module('coremodule', ['ngRoute']);
  /*
   log maintained for coremoduke
   @anish
  */
  coremodule.run(logrunner);

  /*
  route configuration
  @anish
  */
  coremodule.config(function($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/views/dashboard.html',
        controller: 'dashController',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'loginController',
        controllerAs: 'main'
      })
      .when('/report', {
        templateUrl: 'app/views/report.html',
        controller: 'reportController',
        controllerAs: 'report'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  /*
 including refrece of all required controilers and bodotstrapping thr defoined and 
 initialized app
*/


  require(['app/refrences.js'], function(refrences) {
    require(refrences, function() {

      angular.bootstrap(document, ['coremodule']);

    })
  })

})


/********--------
                 |
                 |
                  -------------              o
                               |            -|- 
                               |            / \
                                // ---------------********/

/* steps you buld will lead u t0o sucess  @anish*/