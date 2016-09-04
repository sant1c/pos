
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
    'icheck' : {
        deps: [
        'jquery'
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
      deps: ['angular', 'angular-route', 'jquery', 'icheck', 'jquery-ui' ]
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