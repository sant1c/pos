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
24/8/016   1.0.1        anish            created                                                                                            
*********************************************************************************************/

define(["app/settings/login/loginSettings.js"], function(loginSettings) {
  var coremodule = angular.module('coremodule');
  coremodule.controller('loginController', ['$scope', '$http', '$window', 'loginFactory', function($scope, $http, $window, loginFactory) {
    // Form data for the login modalssss

    console.log('login $scope');
    console.log($scope);
    $scope.loginData = {};
    $scope.authenticate = function() {
      var userDetails = $scope.loginData;
      if (userDetails.username == "" || userDetails.username == null || userDetails.password == "" || userDetails.password == null) {
        var strError = '<div class="fuck-u-anishe" title = "Error">Every Field is Mandatory!!!</div>';
        $(strError).dialog({
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          },
          buttons: {
            "Ok": function() {
              $(this).dialog('destroy').remove();
            }
          }
        });
      } else {
        console.log("when the route is ready commented code can used");
        
        loginSettings.routes.userCred.data = userDetails;
        loginFactory.authenticate(loginSettings.routes.userCred.url, loginSettings.routes.userCred.data)
          .success(function(userdata) {
            if (userdata === "invalid-user") {
              var userError = '<div class="fuck-u-anishe" title = "Error">Invalid Username or Password</div>';
              $(userError).dialog({
                show: {
                  effect: "blind",
                  duration: 1000
                },
                hide: {
                  effect: "explode",
                  duration: 1000
                },
                buttons: {
                  "Ok": function() {
                    $(this).dialog('destroy').remove();
                  }
                }
              });
            }
            else{
              $window.location.href = '/#/dashboard';

            }
          }).error(function(userError) {
            console.log("somthing thing went wrong " + " " + userError);
          });
      }
    }
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