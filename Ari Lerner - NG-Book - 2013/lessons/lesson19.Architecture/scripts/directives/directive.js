angular.module('myApp')
	.directive('loginForm',function(){
		return {
			scope: {
				onLogin: '&',
				onRegister: '&'
			},
			templateUrl: '/templates/loginRegForms.html',
			link: function(scope, ele, attrs){
				scope.showLoginForm = true;
				scope.submitLogin = function(){
					scope.onLogin({ user: scope.loginUser })
				}
				scope.submitRegister = function(){
					scope.onRegister({ user: scope.newUser })
				}
			}
		}
	});