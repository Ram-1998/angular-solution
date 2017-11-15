(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var CategoriesCtrl = this;
  CategoriesCtrl.items = items;
}

})();
