(function() {
  'use strict';

  angular
    .module('core')
    .controller('SpecialtiesController', SpecialtiesController);

  SpecialtiesController.$inject = ['$scope'];

  function SpecialtiesController($scope) {
    var vm = this;

    // Specialties controller logic
    // ...

    init();

    function init() {
    }
  }
})();
