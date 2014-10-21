angular.module('eventApplication',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/auth',{
				templateUrl: 'template/auth.html'
			})
	});