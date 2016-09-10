'use strict';
require.config({
  paths: {
     //angular components
    'angular': './bower_components/angular/angular',
    'angular-animate': './bower_components/angular-animate/angular-animate',
    'angular-cookies': './bower_components/angular-cookies/angular-cookies',
    'angular-mocks': './bower_components/angular-mocks/angular-mocks',
    'angular-resource': './bower_components/angular-resource/angular-resource',
    'angular-route': './bower_components/angular-route/angular-route',
    'angular-sanitize': './bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': './bower_components/angular-touch/angular-touch',

    //bootstrap components
    'bootstrap': './bower_components/bootstrap/dist/js/bootstrap',
   
    //jquery components
    'jquery': './app/plugins/jQuery/jquery-2.2.3.min',
    'jquery-ui':'https://code.jquery.com/ui/1.12.0/jquery-ui',
    'jquery-wid':'./bower_components/jqxcore/jqxcore',
    'datatables.net': 'https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min',
    'datatables.net-buttons': 'https://cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min',
    'dataTablesFlash': '//cdn.datatables.net/buttons/1.2.2/js/buttons.flash.min',
    'dataTablesZip': '//cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min',
    'dataTablesPdf': '//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min',
    'dataTablesFont': '//cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts',
    'dataTablesHTML': '//cdn.datatables.net/buttons/1.2.2/js/buttons.html5.min',
    'dataTablesPrint': '//cdn.datatables.net/buttons/1.2.2/js/buttons.print.min',

    

    //icheck components
   'icheck': './app/plugins/iCheck/icheck.min',

    // pos components
    'app': "app/app",
    'coremodule': "app/coremodule/coremodule"

  },
  shim: {
    'angular-route': {
      deps: [
        'angular'
      ]
    },
    'jquery-wid' : {
        deps: [
        'jquery'
      ]
    },
    
    'icheck' : {
        deps: [
        'jquery'
      ]
    },
    'datatables.net' : {
        deps: [
        'jquery'
      ]
    },
    'datatables.net-buttons' : {
        deps: [
        'jquery',
        'datatables.net'
      ]
    },
    'dataTablesFlash' : {
        deps: [
        'jquery',
        'datatables.net-buttons'
      ]
    },
    'dataTablesZip' : {
        deps: [
        'jquery'
      ]
    },
    'dataTablesPdf' : {
        deps: [
        'jquery'
      ]
    },
    'dataTablesFont' : {
        deps: [
        'jquery'
      ]
    },
    'dataTablesHTML' : {
        deps: [
        'jquery',
        'datatables.net-buttons'
      ]
    },
    'dataTablesPrint' : {
        deps: [
        'jquery',
        'datatables.net-buttons'
      ]
    },

    'jquery-ui' : {
        deps: [
        'jquery'
      ]
    },
    'app': {
      deps: ['angular', 'angular-route', 'coremodule']

    },
    'coremodule': {
      deps: ['angular', 'angular-route', 'jquery', 'icheck', 'jquery-ui', 'datatables.net', 'datatables.net-buttons', 'dataTablesFlash', 'dataTablesZip', 'dataTablesPdf', 'dataTablesFont', 'dataTablesHTML', 'dataTablesPrint']
    }

  }

});

require(['coremodule'], function() {


})

define(['jquery','icheck'], function() {
$(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  });

    var dfd = $.Deferred();
            var checkSelector = setInterval(function () {
                if ($("#login-check").length) {
                    dfd.resolve();
                    clearInterval(checkSelector);
                }
            }, 1000);


dfd.done(function(){

     $('body').attr('id', 'login-page');


})
})