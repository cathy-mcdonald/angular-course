(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController(categories) {
		var ctrl = this;
		ctrl.categories = categories;
	}
	
/*	CategoriesController.$inject = [];
	function CategoriesController() {
		var ctrl = this;
		ctrl.categories = [{'short_name': 'Fred'}, {'short_name': 'James'}];
	}
*/	
})();
