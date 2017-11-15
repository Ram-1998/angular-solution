(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Menu/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/Menu/templates/CatList.template.html',
    controller: 'categoriesController as categoriesCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categories.items', {
     url: '/{categoryShortName}/items',
    templateUrl: 'src/Menu/templates/itemList.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  })
}

})();
