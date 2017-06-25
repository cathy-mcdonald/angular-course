(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  
  service.saveSignup = function(signupDetails) {
  	console.log(signupDetails);
  	service.signupDetails = signupDetails;
  };
  
  service.retrieveSignup = function() {
  	return service.signupDetails;
  };
    
}

})();
