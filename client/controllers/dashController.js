myApp.controller('dashController', function($scope, $routeParams, $location, $ocLazyLoad){
	
	$ocLazyLoad.load(
  		['./assets/javascripts/index.js'],
  		{cache: false}
		);

})