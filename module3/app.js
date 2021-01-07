(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'menulist.html',
    scope: {
      founditems: '<',
      onremove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var search = this;

  //search.searchText = "";
  search.foundItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(search.searchText);
    promise.then(function (response) {
      search.found = response;
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  search.removeItem = function(itemId) {
    search.found.splice(itemId,1);
    //console.log("Remove this:", this);
  }
  search.menu = search.found;
  console.log(search.menu);
  // //buyer.empty = function () {
  //   if (buyer.items.length == 0){
  //       console.log(buyer.items.length);
  //       return true;
  //   } else {
  //       console.log(buyer.items.length);
  //       return false;
  //   }
  // };
  // buyer.buy = function (itemId) {
  //   ShoppingListCheckOffService.Buy(itemId);
  // };

}
NarrowItDownDirectiveController.$inject = ['MenuSearchService'];
function NarrowItDownDirectiveController(MenuSearchService) {
  var searchit = this;

  //search.searchText = "";


}
MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
    var service = this;
    var foundItems =[];
    //var itemsToBuy = [{name:"cookies",quantity:"12"},{name:"chips",quantity:"3"},{name:"veggies",quantity:"1"},{name:"candy",quantity:"5"},{name:"twinkies",quantity:"1000"}];
    //var itemsBought = [];
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (result) {
        var item;
        foundItems=[];
        // process result and only keep items that match
        for (item of result.data.menu_items) {
          //console.log(result.data.menu_items[2].description);
          if (item.description.search(searchTerm)!=-1) {
            foundItems.push({name:item.name,short_name:item.short_name,description:item.description});
            console.log(item.description);
          }
        }
        // return processed items
        //console.log(foundItems);
        return foundItems;
      });
    };
}

})();
