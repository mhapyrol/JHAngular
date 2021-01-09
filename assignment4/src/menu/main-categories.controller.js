(function () {
'use strict';

angular.module('Data')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['items'];
function MainCategoriesController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
