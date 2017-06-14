(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
  }
}());

angular.module('app', [
    'ui.bootstrap'
])

.controller('AppController',
    function ($scope) {

    }
)
;
