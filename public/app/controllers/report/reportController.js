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

define(["app/settings/report/reportSettings.js"], function(reportSettings) {
  var coremodule = angular.module('coremodule');
  coremodule.controller('reportController', ['$scope', 'reportFactory', function($scope, reportFactory) {
    console.log("report Controller");

    $scope.generateReport = function($event) {
      console.log($event);
      console.log($event.currentTarget.id);
      var reportFlag = $event.currentTarget.id;
      if (reportFlag === "daily") {
        var Settings = reportSettings.routes.dailyCred.url;
        reportSettings.routes.dailyCred.data.date = "2016-02-09";
        var datast = reportSettings.routes.dailyCred.data;
      } 
      else if (reportFlag === "monthly") {
        var Settings = reportSettings.routes.monthlyCred.url;
        reportSettings.routes.monthlyCred.data.date = "2016-02-10";
        var datast = reportSettings.routes.monthlyCred.data;
      } 
      else {
        var Settings = reportSettings.routes.yearlyCred.url;
        reportSettings.routes.weeklyCred.data = "2016-09-11";
        var datast = reportSettings.routes.yearlyCred.data;
      }

      reportFactory.postTabledata(Settings, datast)
        .success(function(calcdata) {
          var data = calcdata;
          // var endData = {};

          // for (var i = 0; i < data.length; ++i) {

          //   var dates = data[i].tableno;
          //   if (endData[dates] === undefined)
          //     endData[dates] = [];

          //   endData[dates].push(data[i].description);
          //   endData[dates].push(data[i].date);
          //   endData[dates].push(data[i].total);
          // }
          // var finalData = [];

          // for (var ed in endData) {
          //   var a = [ed];

          //   for (var i = 0; i < endData[ed].length; ++i) {
          //     a.push(endData[ed][i]);
          //   }

          //   finalData.push(a);
          // }

            var finalData = data.map(function(obj) {
              return Object.keys(obj).sort().map(function(key) {
                return obj[key];
              });
            });

            for (var i = 0; i < finalData.length; ++i) {
              
              var date = new Date(finalData[i][2]).toISOString().slice(0, 10);
              finalData[i][2]=date;
            }


          // var today = new Date().toISOString().slice(0, 10);

          console.log(finalData);
          $('#example').DataTable({
            data: finalData,
            dom: 'Bfrtip',
            buttons: [
              'copy', 'csv', 'excel', 'pdf', {
                extend: 'print',
                exportOptions:{
                  columns: ':visible'
                }
              }
            ],
            columns: [{
              title: "0",
              "visible": false,
              "searchable": false
            }, {
              title: "1",
              "visible": false,
              "searchable": false
            }, {
              title: "Date"
            }, {
              title: "Description"
            }, {
              title: "Table No"
            }, {
              title: "Total"
            }]
          });
        }).error(function(calcError) {
          console.log("somthing thing went wrong " + " " + calcError);
        });
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