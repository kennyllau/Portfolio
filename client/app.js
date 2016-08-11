var myApp = angular.module('Myapp', ["ngRoute","oc.lazyLoad"]);

(function(){
	myApp.config(function($routeProvider){

		$routeProvider
			.when('/', 
			{
				templateUrl: "partials/home.html"
			})
			.when('/skills', 
			{
				controller: 'dashController',
				templateUrl: "partials/skills.html"
			})
			.when('/projects', 
			{
				templateUrl: "partials/projects.html"
			})
			.when('/contact', 
			{
				templateUrl: "partials/contact.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());