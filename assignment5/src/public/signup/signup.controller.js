(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['DishService'];
function SignUpController(DishService) {
  var $ctrl = this;
  $ctrl.dishValid = function (){
    if(DishService.dishValid == true){
      return false;
    } else {
      return true;
    }
  }
  $ctrl.completed = function (){
    if(DishService.completed == true){
      return true;
    } else {
      return false;
    }
  }
  //$ctrl.firstname = "";
  //$ctrl.lastname = "";

  $ctrl.submit = function () {
    console.log("First Name is ...",$ctrl.firstname);
    console.log("Last Name is ...",$ctrl.lastname);
    console.log("Email is ...",$ctrl.email);
    console.log("Phone number is ...",$ctrl.phone);
    console.log("Fav dish is ...",$ctrl.dishname);
    $ctrl.user = {fn:$ctrl.firstname,ln:$ctrl.lastname,em:$ctrl.email,ph:$ctrl.phone,dn:$ctrl.dishname};
    var checkDish = DishService.checkDishNums($ctrl.user);
  }

  //MenuSearchService.getMatchedMenuItems(search.searchText);

}


})();
