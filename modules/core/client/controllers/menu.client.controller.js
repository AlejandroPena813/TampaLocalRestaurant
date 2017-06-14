(function() {
  'use strict';

  angular
    .module('core')
    .controller('MenuController', MenuController);

  MenuController.$inject = ['$scope'];

  function MenuController($scope) {
    var vm = this;

    // Menu controller logic
    // ...

    init();

    function init() {
    }
  }
})();
