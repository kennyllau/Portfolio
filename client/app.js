var myApp = angular.module('Myapp', ["ngRoute","oc.lazyLoad", "ui.bootstrap"]);

(function(){
	myApp.config(function($routeProvider, $locationProvider){

		$routeProvider
			.when('/', 
			{
				controller: 'homeController',
				templateUrl: "partials/home.html"
			})
			.when('/aboutme', 
			{
				controller: 'dashController',
				templateUrl: "partials/aboutme.html"
			})
			.when('/portfolio', 
			{
				templateUrl: "partials/portfolio.html"
			})
			.when('/contact', 
			{
				templateUrl: "partials/contact.html"
			})
			.otherwise({
				redirectTo: "/"
			});
		
			 //check browser support
	        if(window.history && window.history.pushState){
	            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

		        // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

		        // if you don't wish to set base URL then use this
		        $locationProvider.html5Mode({
		                 enabled: true,
		                 requireBase: false
		        });
	        }
	})
}());