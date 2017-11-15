(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/Menu/templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});

})();
