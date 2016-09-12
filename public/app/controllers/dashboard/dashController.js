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

define(["app/settings/dashboard/dashSettings.js"], function(dashSettings) {
  var coremodule = angular.module('coremodule');
  coremodule.controller('dashController', ['$scope', 'dashFactory', function($scope, dashFactory) {
    console.log("dashboard Controller");


    dashFactory.getTabledata(dashSettings.routes.userCred.url)
      .success(function(calcdata) {
        var data = calcdata;
        var endData = {};

        for (var i = 0; i < data.length; ++i) {

          var date = data[i].name;
          if (endData[date] === undefined)
            endData[date] = [];

          endData[date].push(data[i].price);
          endData[date].push(data[i].type);
        }
        var finalData = [];

        for (var ed in endData) {
          var a = [ed];

          for (var i = 0; i < endData[ed].length; ++i) {
            a.push(endData[ed][i]);
          }

          finalData.push(a);
        }

        // console.log(finalData);
        $('#example').DataTable({
          data: finalData,
          dom: 'Bfrtip',
          buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
          ],
          columns: [{
            title: "Name"
          }, {
            title: "Type"
          }, {
            title: "Price"
          }]
        });



      }).error(function(calcError) {
        console.log("somthing thing went wrong " + " " + calcError);
      });


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