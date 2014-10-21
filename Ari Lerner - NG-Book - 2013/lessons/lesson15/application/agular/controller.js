angular.module('myApp')
	.controller('MainController',function($scope,UserService){
		$scope.signedIn = function(oauth){
			UserService.setCurrentUser(oauth)
				.then(function(user){
					$scope.user = user;
				});
		};
		$scope.onFile = function(files) {
			UserService.uploadItemForSale(files)
				.then(function(data){

				});
		};
		var getItemsForSale = function(){
			UserService.itemsForSale()
				.then(function(images){
					$scope.images = images;
				});
		};
		getItemsForSale();
		$scope.sellImage = function(image){
			$scope.showCC = true;
			$scope.currentItem = image;
		};
		$scope.submitPayment = function(){
			UserService
				.createPayment($scope.currentItem, $scope.charge)
			.then(function(data){
				$scope.showCC = false;
			});
		};
	});