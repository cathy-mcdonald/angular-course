(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;
		
		toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
		toBuy.isEmpty = function() {
			return (toBuy.items.length == 0);
		}
		
		toBuy.buyItem = function(index) {
			ShoppingListCheckOffService.buyItem(index);
		}

	}

	AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBought = this;
		
		alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
		alreadyBought.isEmpty = function() {
			return (alreadyBought.items.length == 0);
		}


	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyItems = [{quantity:10, name:"cookies"},
		                  {quantity:5, name:"carrots"},
		                  {quantity:8, name:"sausages"}];
		var boughtItems = [];
		
		service.getItemsToBuy = function() {
			return toBuyItems;
		}
		
		service.getBoughtItems = function() {
			return boughtItems;
		}
		
		service.buyItem = function(index) {
			var item = toBuyItems.splice(index, 1)[0];
			boughtItems.push(item);
		}
	}

})();
