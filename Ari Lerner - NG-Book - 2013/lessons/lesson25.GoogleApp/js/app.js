angular.module('myApp', ['ngRoute'])
  .provider('Weather', function() {
    var apiKey = "";
    this.setApiKey = function(key) {
      if (key) this.apiKey = key;
    }


    this.$get = function($q, $http) {
      var self = this;
      return {
        getWeatherForecast: function(city) {
          var d = $q.defer();
          $http({
            method: 'GET',
            url: self.getUrl("forecast", city),
            cache: true
          }).success(function(data) {
          // The wunderground API returns the
          // object that nests the forecasts inside
          // the forecast.simpleforecast key
            d.resolve(data.forecast.simpleforecast);
          }).error(function(err) {
            d.reject(err);
          });
          return d.promise;
        }
      }
    }


    this.getUrl = function(type, ext) {
      return "http://api.wunderground.com/api/" +
        this.apiKey + "/" + type + "/q/" +
        ext + '.json';
    };
  })
  .config(function(WeatherProvider, $routeProvider) {
    WeatherProvider.setApiKey('496beb5dbce30197');
    $routeProvider
    	.when('/', {
    		templateUrl: 'templates/home.html',
    		controller: 'MainController'
    	})
    	.when('/settings', {
    		templateUrl: 'templates/settings.html',
    		controller: 'SettingsController'
    	})
    	.otherwise({
    		redirectTo: '/'
    	})
  })
  .factory('UserService', function() {
		var defaults = {
			location: 'autoip'
		};
		var service = {
			user: {},
			save: function() {
				sessionStorage.presently = angular.toJson(service.user);
			},
			restore: function() {
				angular.fromJson(sessionStorage.presently) || defaults;
				return service.user;
			}
		};
		service.restore();
		return service;
	})
  .controller('SettingsController', function($scope, UserService) {
		$scope.user = UserService.user;
		$scope.save = function() {
			UserService.save();
		}
	})
  .controller('MainController', function($scope, $timeout, Weather, UserService) {
    $scope.user = UserService.user;
		Weather.getWeatherForecast($scope.user.location)
			.then(function(data) {
				$scope.weather.forecast = data;
			});
    // Build the date object
    $scope.date = {};
    // Update function
    var updateTime = function() {
      $scope.date.raw = new Date();
      $timeout(updateTime, 1000);
    }
    // Kick off the update function
    updateTime();

    $scope.weather = {};
		// Hardcode San_Francisco for now
		// Weather.getWeatherForecast("CA/San_Francisco")
		// 	.then(function(data) {
		// 		$scope.weather.forecast = data;
		// 	});

  	$scope.weather.forecast = {
		  "response": {
		  "version":"0.1",
		  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
		  "features": {
		 		"forecast": 1
			}
			}
				,
			"forecast":{
				"txt_forecast": {
				"date":"8:00 AM PDT",
				"forecastday": [
				{
				"period":0,
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"title":"Friday",
				"fcttext":"Partly cloudy. Fog early. High of 70F. Winds from the WSW at 5 to 15 mph.",
				"fcttext_metric":"Partly cloudy. Fog early. High of 21C. Breezy. Winds from the WSW at 10 to 25 km/h.",
				"pop":"10"
				}
				,
				{
				"period":1,
				"icon":"mostlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
				"title":"Friday Night",
				"fcttext":"Mostly cloudy. Fog overnight. Low of 48F. Winds from the WSW at 5 to 15 mph.",
				"fcttext_metric":"Mostly cloudy. Fog overnight. Low of 9C. Breezy. Winds from the WSW at 10 to 20 km/h.",
				"pop":"10"
				}
				,
				{
				"period":2,
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"title":"Saturday",
				"fcttext":"Partly cloudy. Fog early. High of 70F. Winds from the WSW at 10 to 15 mph.",
				"fcttext_metric":"Partly cloudy. Fog early. High of 21C. Breezy. Winds from the WSW at 15 to 25 km/h.",
				"pop":"0"
				}
				,
				{
				"period":3,
				"icon":"mostlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
				"title":"Saturday Night",
				"fcttext":"Mostly cloudy. Low of 52F. Winds from the WSW at 5 to 15 mph.",
				"fcttext_metric":"Mostly cloudy. Low of 11C. Breezy. Winds from the WSW at 10 to 25 km/h.",
				"pop":"0"
				}
				,
				{
				"period":4,
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"title":"Sunday",
				"fcttext":"Partly cloudy. High of 73F. Winds from the WSW at 5 to 15 mph.",
				"fcttext_metric":"Partly cloudy. High of 23C. Breezy. Winds from the WSW at 10 to 20 km/h.",
				"pop":"0"
				}
				,
				{
				"period":5,
				"icon":"clear",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/clear.gif",
				"title":"Sunday Night",
				"fcttext":"Clear. Low of 54F. Winds less than 5 mph.",
				"fcttext_metric":"Clear. Low of 12C. Winds less than 5 km/h.",
				"pop":"0"
				}
				,
				{
				"period":6,
				"icon":"mostlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
				"title":"Monday",
				"fcttext":"Clear in the morning, then overcast. High of 79F. Winds from the ENE at 5 to 10 mph shifting to the WSW in the afternoon.",
				"fcttext_metric":"Clear in the morning, then overcast. High of 26C. Winds from the ENE at 5 to 20 km/h shifting to the WSW in the afternoon.",
				"pop":"0"
				}
				,
				{
				"period":7,
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"title":"Monday Night",
				"fcttext":"Mostly cloudy in the evening, then overcast. Low of 54F. Winds less than 5 mph.",
				"fcttext_metric":"Mostly cloudy in the evening, then overcast. Low of 12C. Winds less than 5 km/h.",
				"pop":"0"
				}
				]
				},
				"simpleforecast": {
				"forecastday": [
				{"date":{
			"epoch":"1397282400",
			"pretty":"11:00 PM PDT on April 11, 2014",
			"day":11,
			"month":4,
			"year":2014,
			"yday":100,
			"hour":23,
			"min":"00",
			"sec":0,
			"isdst":"1",
			"monthname":"April",
			"monthname_short":"Apr",
			"weekday_short":"Fri",
			"weekday":"Friday",
			"ampm":"PM",
			"tz_short":"PDT",
			"tz_long":"America/Los_Angeles"
		},
				"period":1,
				"high": {
				"fahrenheit":"70",
				"celsius":"21"
				},
				"low": {
				"fahrenheit":"48",
				"celsius":"9"
				},
				"conditions":"Partly Cloudy",
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"skyicon":"partlycloudy",
				"pop":10,
				"qpf_allday": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_day": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_night": {
				"in": 0.00,
				"mm": 0.0
				},
				"snow_allday": {
				"in": 0,
				"cm": 0
				},
				"snow_day": {
				"in": 0,
				"cm": 0
				},
				"snow_night": {
				"in": 0,
				"cm": 0
				},
				"maxwind": {
				"mph": 13,
				"kph": 21,
				"dir": "WSW",
				"degrees": 247
				},
				"avewind": {
				"mph": 10,
				"kph": 16,
				"dir": "WSW",
				"degrees": 246
				},
				"avehumidity": 79,
				"maxhumidity": 87,
				"minhumidity": 55
				}
				,
				{"date":{
			"epoch":"1397368800",
			"pretty":"11:00 PM PDT on April 12, 2014",
			"day":12,
			"month":4,
			"year":2014,
			"yday":101,
			"hour":23,
			"min":"00",
			"sec":0,
			"isdst":"1",
			"monthname":"April",
			"monthname_short":"Apr",
			"weekday_short":"Sat",
			"weekday":"Saturday",
			"ampm":"PM",
			"tz_short":"PDT",
			"tz_long":"America/Los_Angeles"
		},
				"period":2,
				"high": {
				"fahrenheit":"70",
				"celsius":"21"
				},
				"low": {
				"fahrenheit":"52",
				"celsius":"11"
				},
				"conditions":"Partly Cloudy",
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"skyicon":"partlycloudy",
				"pop":0,
				"qpf_allday": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_day": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_night": {
				"in": 0.00,
				"mm": 0.0
				},
				"snow_allday": {
				"in": 0,
				"cm": 0
				},
				"snow_day": {
				"in": 0,
				"cm": 0
				},
				"snow_night": {
				"in": 0,
				"cm": 0
				},
				"maxwind": {
				"mph": 14,
				"kph": 22,
				"dir": "WSW",
				"degrees": 249
				},
				"avewind": {
				"mph": 12,
				"kph": 19,
				"dir": "WSW",
				"degrees": 245
				},
				"avehumidity": 83,
				"maxhumidity": 97,
				"minhumidity": 66
				}
				,
				{"date":{
			"epoch":"1397455200",
			"pretty":"11:00 PM PDT on April 13, 2014",
			"day":13,
			"month":4,
			"year":2014,
			"yday":102,
			"hour":23,
			"min":"00",
			"sec":0,
			"isdst":"1",
			"monthname":"April",
			"monthname_short":"Apr",
			"weekday_short":"Sun",
			"weekday":"Sunday",
			"ampm":"PM",
			"tz_short":"PDT",
			"tz_long":"America/Los_Angeles"
		},
				"period":3,
				"high": {
				"fahrenheit":"73",
				"celsius":"23"
				},
				"low": {
				"fahrenheit":"54",
				"celsius":"12"
				},
				"conditions":"Partly Cloudy",
				"icon":"partlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
				"skyicon":"partlycloudy",
				"pop":0,
				"qpf_allday": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_day": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_night": {
				"in": 0.00,
				"mm": 0.0
				},
				"snow_allday": {
				"in": 0,
				"cm": 0
				},
				"snow_day": {
				"in": 0,
				"cm": 0
				},
				"snow_night": {
				"in": 0,
				"cm": 0
				},
				"maxwind": {
				"mph": 12,
				"kph": 19,
				"dir": "West",
				"degrees": 262
				},
				"avewind": {
				"mph": 8,
				"kph": 13,
				"dir": "WSW",
				"degrees": 256
				},
				"avehumidity": 82,
				"maxhumidity": 91,
				"minhumidity": 59
				}
				,
				{"date":{
			"epoch":"1397541600",
			"pretty":"11:00 PM PDT on April 14, 2014",
			"day":14,
			"month":4,
			"year":2014,
			"yday":103,
			"hour":23,
			"min":"00",
			"sec":0,
			"isdst":"1",
			"monthname":"April",
			"monthname_short":"Apr",
			"weekday_short":"Mon",
			"weekday":"Monday",
			"ampm":"PM",
			"tz_short":"PDT",
			"tz_long":"America/Los_Angeles"
		},
				"period":4,
				"high": {
				"fahrenheit":"79",
				"celsius":"26"
				},
				"low": {
				"fahrenheit":"54",
				"celsius":"12"
				},
				"conditions":"Mostly Cloudy",
				"icon":"mostlycloudy",
				"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
				"skyicon":"mostlycloudy",
				"pop":0,
				"qpf_allday": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_day": {
				"in": 0.00,
				"mm": 0.0
				},
				"qpf_night": {
				"in": 0.00,
				"mm": 0.0
				},
				"snow_allday": {
				"in": 0,
				"cm": 0
				},
				"snow_day": {
				"in": 0,
				"cm": 0
				},
				"snow_night": {
				"in": 0,
				"cm": 0
				},
				"maxwind": {
				"mph": 10,
				"kph": 16,
				"dir": "West",
				"degrees": 262
				},
				"avewind": {
				"mph": 6,
				"kph": 10,
				"dir": "SSW",
				"degrees": 206
				},
				"avehumidity": 72,
				"maxhumidity": 81,
				"minhumidity": 38
				}
				]
				}
			}
		};
  });