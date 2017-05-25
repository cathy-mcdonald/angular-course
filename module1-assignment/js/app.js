(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope) {
		$scope.list = "";
		$scope.message = "";
		$scope.colour = "white";
		
		$scope.checkLunch = function() {
			var lunchItems = $scope.list.split(",");
			// Filter out empty strings
			lunchItems = lunchItems.filter(function(item) { return item.trim() != ''; });
			
			if (lunchItems.length == 0) {
				$scope.colour = "red";
				$scope.message = "Please enter data first";
			}
			else if (lunchItems.length > 3) {
				$scope.colour = "green";
				$scope.message = "Too much!";
			}
			else { 
				$scope.colour = "green";
				$scope.message = "Enjoy!";
			}
		}		
	}
	

})();