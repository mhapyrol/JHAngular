(function () {
'use strict';

angular.module('Data')
.controller('MainItemsController', MainItemsController);


MainItemsController.$inject = ['MenuDataService'];
function MainItemsController(MenuDataService) {
  var mainList = this;
  mainList.items = [];

  mainList.$onInit = function () {
    console.log("Init Items");
    MenuDataService.getItemsForCategory(catname)
    .then(function (result) {
      mainList.items = result.data;
      console.log(mainList.items);
    });
  };
}

})();
