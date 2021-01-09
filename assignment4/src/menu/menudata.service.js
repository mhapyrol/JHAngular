(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  service.getAllCategories = function () {
    var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
    //console.log(response);
    return response;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params: {
          category: categoryShortName
        }
    });
    return response;
  };
  }

  })();
