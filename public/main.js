
require.config({
  paths: {
    'angular': './bower_components/angular/angular',
    'angular-animate': './bower_components/angular-animate/angular-animate',
    'angular-cookies': './bower_components/angular-cookies/angular-cookies',
    'angular-mocks': './bower_components/angular-mocks/angular-mocks',
    'angular-resource': './bower_components/angular-resource/angular-resource',
    'angular-route': './bower_components/angular-route/angular-route',
    'angular-sanitize': './bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': './bower_components/angular-touch/angular-touch',

    'bootstrap': './bower_components/bootstrap/dist/js/bootstrap',
    'app': "app/app",
    'coremodule': "app/coremodule/coremodule"

  },
  shim: {
    'angular-route': {
      deps: [
        'angular'
      ]
    },
    'app': {
      deps: ['angular', 'angular-route', 'coremodule']

    },
    'coremodule': {
      deps: ['angular', 'angular-route']
    }

  }

});

require(['coremodule'], function() {


})