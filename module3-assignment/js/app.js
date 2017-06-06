(function() {
	'use strict';

	angular.module('NarrowItDownApp', []).controller('NarrowItDownController',
			NarrowItDownController).service('MenuSearchService',
			MenuSearchService);

	NarrowItDownController.$inject = [ 'MenuSearchService' ];
	function NarrowItDownController(MenuSearchService) {
		var narrowIt = this;
		
		narrowIt.searchTerm = '';
		
		narrowIt.search = function() {
			
			var promise = MenuSearchService.getMatchedMenuItems(narrowIt.searchTerm.toLowerCase());
			
			promise.then(function (response) {
				console.log(response)
				narrowIt.found = response;				
		    })
		    .catch(function (error) {
		      console.log(error);
		    });
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

})();