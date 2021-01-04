(function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.menuMsg = "";
  $scope.checkLunch = function () {
    var numMenuItems = calcNumMenuItems($scope.menu);
    if (numMenuItems == 0) {
      $scope.menuMsg="Please enter data first";
    } else if (numMenuItems <= 3) {
      $scope.menuMsg="Enjoy!";
    } else if (numMenuItems > 3) {
      $scope.menuMsg="Too Much!";
    } else {
      $scope.menuMsg="Please enter data first";
    }
  };

  function calcNumMenuItems(strOfItems) {
    if (strOfItems == "") {
      return 0;
    } else {
      console.log(strOfItems);
      console.log(strOfItems.split(','));
      return strOfItems.split(',').length;
    }
  }

}

})();
