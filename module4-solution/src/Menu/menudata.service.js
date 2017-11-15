(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  // List of shopping items

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    return $http({
      method : "GET",
      url : "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(response){
      return response.data;
    });

  }

  service.getAllCategories = function(categoryShortName) {
    $http({
            method:"GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json",
            params:{
              category  : categoryShortName
            }
        }).then(function(response){
            //load data into service holder
            return response.data.menu_items;
        });
  }
}

})();
