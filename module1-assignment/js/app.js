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
			if ($scope.list) {
				$scope.colour = "green";
				var lunchItems = $scope.list.split(",");
				if (lunchItems.length > 3) {
					$scope.message = "Too much!";
				}
				else { 
					$scope.message = "Enjoy!";
				}
			}
			else {
				$scope.colour = "red";
				$scope.message = "Please enter data first";
			}
		}
	}

})();