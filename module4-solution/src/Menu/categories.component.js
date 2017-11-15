(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/Menu/templates/CatList.template.html',
  bindings: {
    items: '<'
  }
});

})();
