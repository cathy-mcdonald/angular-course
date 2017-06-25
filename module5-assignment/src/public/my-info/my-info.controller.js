(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService', 'MenuService'];
function MyInfoController(SignupService, MenuService) {
  var $ctrl = this;
  $ctrl.details = SignupService.retrieveSignup();
  MenuService.getMenuItem($ctrl.details.favouriteDish)
  .then(function(menuItem) {
  	$ctrl.details.menuItem = menuItem;
  });
}

})();
