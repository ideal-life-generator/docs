angular.module('myApp',['ngAnimate','ngRoute'])
	.controller('nameController',function($scope){
		$scope.accept = 'accept';
	// // 	$scope.roomates = [
	// // 		'Ari', 'Q', 'Sean', 'Anand'
	// // 	];

	// // 	setTimeout(function() {
	// // 		$scope.roomates.push('Ginger');
	// // 		$scope.$apply();

	// // 		setTimeout(function() {
	// // 			$scope.roomates.shift();
	// // 			$scope.$apply();
	// // 		}, 2000);
	// // 	}, 1000);

	// // })
	// // .config(function($routeProvider){
	// // 	$routeProvider
	// // 		.when('/',{
	// // 			template: '<h2>One</h2>'
	// // 		})
	// // 		.when('/two',{
	// // 			template: '<h2>Two</h2>'
	// // 		})
	// // 		.when('/three',{
	// // 			template: '<h2>Three</h2>'
	// // 		})
	})
	.directive('accept',function($animate){
		return {
			restrict: 'E',
			template: '<button class="btn-accept">\
							{{ a }}\
						</button>',
			replace: true,
			scope: {
				a: '@accept'
			},
			link: function(scope, element) {
				// element.bind('click',function(){
				// 	if(!scope.a) {
				// 		$animate.addClass(element,'ng-class');
				// 		scope.a = true;
				// 	}
				// 	else {
				// 		$animate.removeClass(element,'ng-class');
				// 		scope.a = false;
				// 	}
				// });
				element.on('click', function() {
				  scope.$apply(function() {
				    $animate.enter(element, element.parent(), element.next());
				  });
				});
				console.log(scope);
			}
		}
	})
	.animation('.btn-accept',function($window) {
		return {
			enter: function(element, done) {
				element.html('accept');
				TweenMax.set(element, {
					position: 'relative'
				});
				TweenMax.to(element, 1, {
					width: 300,
					height: 45,
					marginTop: 45,
					marginBottom: 45
				});
				$window.setTimeout(done,2000);
			}
		}
	});