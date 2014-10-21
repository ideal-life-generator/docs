angular.module('myApp',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('start',{
				url: '/start',
				templateUrl: '/start'
			})
	})
	.controller('DemoController',function($scope){

	})
	.controller('DigestController',['$scope',function($scope) {
		$scope.$watch('name',function(oldVal, newVal, scope) {
			if (oldVal === newVal) {
			} else {
				$scope.b = newVal;
			};
		});

		$scope.$evalAsync(function(scope){
			setInterval(function() {
				$scope.b = new Date;
				$scope.$apply();
			}, 1000);
		});


	}]);