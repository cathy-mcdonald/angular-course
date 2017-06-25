(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService', 'MenuService'];
function SignupController(SignupService, MenuService) {
  var $ctrl = this;
  
  $ctrl.submit = function () {
  	$ctrl.menuItemNotFound = false;
  	$ctrl.submitted = false;
  	
  	MenuService.getMenuItem($ctrl.details.favouriteDish)
  	.then(function(menuItem) {
	  SignupService.saveSignup($ctrl.details);
	  $ctrl.submitted = true;
    })
    // error handler
    .catch(function(response) {
      $ctrl.menuItemNotFound = true;
    });
  };
}

})();
