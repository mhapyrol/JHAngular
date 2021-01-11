(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['menuitem','DishService'];
function MyInfoController(menuitem,DishService) {
  var $ctrl = this;

  console.log(menuitem);
  if (menuitem == "Empty"){
    $ctrl.showInfo = false;
    $ctrl.showLink = true;
  } else {
  $ctrl.showInfo = true;
  $ctrl.showLink = false;
  $ctrl.userinfo = DishService.users[0];
  $ctrl.menuItems = menuitem;
}
}

})();
