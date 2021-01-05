(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;

  buyer.items = ShoppingListCheckOffService.getList();
  buyer.empty = function () {
    if (buyer.items.length == 0){
        console.log(buyer.items.length);
        return true;
    } else {
        console.log(buyer.items.length);
        return false;
    }
  };
  buyer.buy = function (itemId) {
    ShoppingListCheckOffService.Buy(itemId);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var seller = this;

  seller.items = ShoppingListCheckOffService.getBought();
  seller.empty = function () {
    if (seller.items.length == 0){
        console.log(seller.items.length);
        return true;
    } else {
        console.log(seller.items.length);
        return false;
    }
  };
}

function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [{name:"cookies",quantity:"12"},{name:"chips",quantity:"3"},{name:"veggies",quantity:"1"},{name:"candy",quantity:"5"},{name:"twinkies",quantity:"1000"}];
    var itemsBought = [];

    service.addToList = function (itemName, quantity) {
      var item = {
          name: itemName,
          quantity: quantity
      };
      itemsToBuy.push(time);
    };

    service.Buy = function (itemId) {
      itemsBought.push(itemsToBuy[itemId]);
      itemsToBuy.splice(itemId,1);
    };

    service.getList = function () {
      return itemsToBuy;
    };
    service.getBought = function () {
      return itemsBought;
    };
}

})();
