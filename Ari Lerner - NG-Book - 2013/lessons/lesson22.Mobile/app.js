angular.module('myApp',['ngTouch'])
	.controller('GestureController',function($scope){
		$scope.tapped = function($event) {
			console.log(1);
			var ele = $event.target,
				x = Math.floor(Math.random() * 200) + 1,
				y = Math.floor(Math.random() * 100) + 1,
				z = Math.floor(Math.random() * 6) + 1,
				rot = Math.floor(Math.random() * 360) + 1;
			$(ele).css({
				'transform':
					'translate3d('+x+'px,'+y+'px,'+z+'px) rotate('+rot+'deg)'
			});
		}
	})
	// .directive('mySlideController',['$swipe',function($swipe) {
	// 	return {
	// 		restrict: 'EA',
	// 		link: function(scope, ele, attrs, ctrl) {
	// 			var startX, pointX;

	// 			$swipe.bind(ele, {
	// 				'start': function(coords) {
	// 					startX = coords.X;
	// 					pointX = coords.Y;
	// 				},
	// 				'move': function(coords) {
	// 					var delta = coords.x - pointX;
	// 				},
	// 				'end': function(coords) {

	// 				},
	// 				cancel: function(coords) {

	// 				}
	// 			})
	// 		}
	// 	}
	// }])
	// .value('data',[
	// 	{
	// 		from: 'vudd2007@i.ua',
	// 		body: 'Hello my fiend, you some boy.'
	// 	},{
	// 		from: 'vudd2013@rambler.ru',
	// 		body: 'You need me money'
	// 	}
	// ])
	// .controller('MailController',function($scope,data) {
	// 	$scope.emails = data;
	// });