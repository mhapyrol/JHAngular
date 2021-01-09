(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  itemDetail.items = item;
  console.log("itemDetails...");
  console.log(itemDetail.items);
}

})();
