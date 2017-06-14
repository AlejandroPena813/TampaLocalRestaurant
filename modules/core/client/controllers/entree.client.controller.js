(function() {
  'use strict';

  angular
    .module('core')
    .controller('EntreeController', EntreeController);

  EntreeController.$inject = ['$scope'];

  function EntreeController($scope) {
    var vm = this;

    // Entree controller logic
    // ...

    init();

    function init() {
    }
  }
})();
