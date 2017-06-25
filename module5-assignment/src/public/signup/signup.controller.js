(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.submit = function () {
    SignupService.saveSignup($ctrl.details);
    $ctrl.submitted = true;
  };
}

})();
