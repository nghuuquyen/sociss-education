loadWeather('Đà Nẵng, Việt Nam', function(err, weather) {
  if(err) {
    alert(err.message);
  } else {
    renderCityWeatherOnCardHeader(weather);
    renderPredictWeatherTable(weather);
  }
});


function searchWeather(e) {
  if (e.preventDefault) e.preventDefault();
  var cityName = document.forms["search"]["city_name"].value;

  loadWeather(cityName, function(err, weather) {
    if(err) {
      alert(err.message);
    } else {
      renderPredictWeatherTable(weather);
    }
  });
}

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


function cleanTableContent() {
  try {
    while(true) {
      document.getElementById('predict-table').deleteRow(0);
    }
  } catch(err) {}
}


function renderCityWeatherOnCardHeader(weather) {
  // Render header card.
  document.getElementById('city_name').innerHTML = weather.cityName;
  document.getElementById('humidity').innerHTML = weather.humidity;
  document.getElementById('temperature').innerHTML = weather.temp;
  document.getElementById('wind').innerHTML = weather.wind;
  document.getElementById('city_weather').innerHTML = weather.weather;
}

function renderPredictWeatherTable(weather) {
  // Render weather predict table.
  var table = document.getElementById('predict-table');
  cleanTableContent();
  renderTableHeader();

  for(let i in weather.forecast) {
    // Create new row at last index.
    var row = table.insertRow();
    var dayCell = row.insertCell(0);
    var weatherCell = row.insertCell(1);
    var lowCell = row.insertCell(2);
    var hightCell = row.insertCell(3);

    dayCell.innerHTML = weather.forecast[i].date;
    weatherCell.innerHTML = weather.forecast[i].text;
    lowCell.innerHTML = coverFtoC(weather.forecast[i].low) + "°C";
    hightCell.innerHTML = coverFtoC(weather.forecast[i].high) + "°C";
  }
}


function renderTableHeader() {
  var table = document.getElementById('predict-table');
  var row = table.insertRow();
  var dayCell = row.insertCell(0);
  var weatherCell = row.insertCell(1);
  var lowCell = row.insertCell(2);
  var hightCell = row.insertCell(3);

  dayCell.innerHTML = '<b>Ngày</b>';
  weatherCell.innerHTML = '<b>Thời tiết</b>';
  lowCell.innerHTML = '<b>Thấp nhất</b>';
  hightCell.innerHTML = '<b>Cao nhất</b>';
}


function coverFtoC(value) {
  return Math.ceil((5 / 9) * (value - 32));
}
