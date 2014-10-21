angular.module('myApp',['pascalprecht.translate','gettext'])
	.config(['$translateProvider', function($translateProvider) {
		// $translateProvider
		// 	.translations('en', {
		// 		HEADLINE: 'Hello there, This is my awesome app!',
		// 		INTRO_TEXT: 'And it has i18n support!',
		// 		BUTTON_TEXT_EN: 'english',
		// 		BUTTON_TEXT_DE: 'german'
		// 	})
		// 	.translations('de', {
		// 		HEADLINE: 'Hey, das ist meine grobartige App!',
		// 		INTRO_TEXT: 'Und sie untersutzt mehrere Sprachen!',
		// 		BUTTON_TEXT_EN: 'englisch',
		// 		BUTTON_TEXT_DE: 'dautsch'
		// 	})
		// $translateProvider.preferredLanguage('en');

		// $translateProvider.useStaticFilesLoader({
		// 	prefix: '/languages/',
		// 	suffix: '.json'
		// });
		// $translateProvider.useLocalStorage();
	}])
	.controller('TranslateController', function($translate, $scope) {
		$scope.count = 1;
		// $scope.changeLanguage = function (langKey) {
		// 	$translate.use(langKey);
		// }
	});