(function () {
"use strict";

angular.module('common')
.service('DishService', DishService);


DishService.$inject = ['$http', 'ApiPath'];
function DishService($http, ApiPath) {
  var service = this;

  var item;
  var dishFound = false;
  service.dishValid = true;
  service.completed = false;
  service.users = [];
  service.checkDishNums = function (user) {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      console.log(response.data);
      dishFound = false;
      service.completed = false;
      for (item of response.data.menu_items){
        if (item.short_name == user.dn) {
          console.log("Found dish");
          service.users.push(user);
          console.log("added user:",user);
          service.completed = true;
          dishFound = true;
          break;
        }
      }
      if (dishFound){
        service.dishValid = true;
      } else {
        service.dishValid = false;
      }
    });
  };

  service.getDish = function () {

    var promise = $http.get(ApiPath + '/menu_items.json').then(function (response) {
      //console.log(response.data);
      console.log(service.users[0].dn);
      for (item of response.data.menu_items){
        if (item.short_name == service.users[0].dn) {
          console.log("Found user's dish");
          service.dish = item;
          console.log(service.dish);
          return service.dish;
        }
      }
    });
   return promise;

  };
  // service.checkDishNums = function (dishNum) {
  //   var config = {};
  //   if (category) {
  //     config.params = {'category': category};
  //   }
  //
  //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
  //     return response.data;
  //   });
  // };

}



})();
