(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  service.signupDetails = {};
  
  service.saveSignup = function(signupDetails) {
  	service.signupDetails = signupDetails;
  };
  
  service.retrieveSignup = function() {
  	return service.signupDetails;
  };
    
}

})();
