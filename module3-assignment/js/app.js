(function() {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);

	NarrowItDownController.$inject = [ 'MenuSearchService' ];
	function NarrowItDownController(MenuSearchService) {
		var narrowIt = this;
		
		narrowIt.searchTerm = '';
		narrowIt.found = [];
		narrowIt.nothingFound = false;
		
		narrowIt.search = function() {
			
			if (narrowIt.searchTerm.trim() == '') {
				narrowIt.found = [];
				narrowIt.nothingFound = true;
			}
			else {
				var promise = MenuSearchService.getMatchedMenuItems(narrowIt.searchTerm.toLowerCase());
				
				promise.then(function (response) {
					narrowIt.found = response;	
					narrowIt.nothingFound = (narrowIt.found.length == 0);
			    })
			    .catch(function (error) {
			      console.log(error);
			    });
			}
			
					
		}
		
		narrowIt.remove = function (index) {
			narrowIt.found.splice(index, 1);
		} 

	}

	MenuSearchService.$inject = ['$http']
	function MenuSearchService($http) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method : 'GET',
				url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
			}).then(function(result) {				
				var menuItems = result.data.menu_items;
				var foundItems = [];
				
				// process result and only keep items that match
				for (var i = 0; i < menuItems.length; i++) {
					if (menuItems[i].description.indexOf(searchTerm) !== -1) {
						foundItems.push(menuItems[i]);
					}
				}

				return foundItems;
			});
		}
	}
	
	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
		    scope: {
		      found: '<',
		      onRemove: '&'
		    }
		};
		
		return ddo;
	}

})();