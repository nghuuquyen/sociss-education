angular.module('sociss-weather-card', []);

/**
* Registry a angular controller.
*/
angular.module('sociss-weather-card')
.controller('CardController', CardController);

CardController.$inject = ['$scope', 'WeatherService'];

function CardController($scope, WeatherService) {
  // public methods.
  $scope.searchWeather = searchWeather;

  // Active controller method.
  activate();

  function activate() {
    WeatherService.loadWeather('Đà Nẵng, Việt Nam', function(err, weather) {
      if(err) {
        alert(err.message);
      } else {
        $scope.weather = weather;
        // fire notification update view.
        $scope.$apply();
      }
    });
  }

  function searchWeather() {
    var cityName = $scope.searchCityName;

    WeatherService.loadWeather(cityName, function(err, weather) {
      if(err) {
        alert(err.message);
      } else {
        $scope.weather = weather;
        // fire notification update view.
        $scope.$apply();
      }
    });
  }
}

/**
* Registry a angular service.
*/
angular.module('sociss-weather-card')
.service('WeatherService', WeatherService);

WeatherService.$inject = ['$http'];

function WeatherService($http) {
  // Public methods.
  return {
    loadWeather : loadWeather
  };

  function loadWeather(cityName, callback) {
    var query = "https://query.yahooapis.com/v1/public/yql?" +
    "q=select * from weather.forecast where woeid in " +
    "(select woeid from geo.places(1) where text='" + cityName + "')&format=json";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhttp.responseText);

        if(!data.query.results) {
          callback(new Error('Không tìm thấy thành phố'), null);
        }

        callback(null, filterYahooWeatherData(data));
      }
    }

    xhttp.open("GET", query, true);
    xhttp.send();
  }

  function filterYahooWeatherData(data) {
    var results = {
      cityName : data.query.results.channel.location.city,
      wind : data.query.results.channel.wind.speed,
      humidity : data.query.results.channel.atmosphere.humidity,
      temp : data.query.results.channel.item.condition.temp,
      weather : data.query.results.channel.item.condition.text,
      forecast : data.query.results.channel.item.forecast
    };

    // Cover C to F, We have C = 5/9 (F – 32)
    results.temp = Math.ceil((5 / 9) * (results.temp - 32));
    // Cover Mph to Km/h
    results.wind = Math.ceil(results.wind * 1.6);

    return results;
  }
}
