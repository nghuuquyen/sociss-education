# Lab 8 - Demo sử dụng Anuglar JS 1.x cho ứng dụng Sociss Weather Card

Về kết quả thì bài lab này hoàn toàn tương tự như trong bài Lab 3. Tuy nhiên
trong bài lab này thì mình sử dụng Angular JS để viết nên.


Trong bài lab này mình chỉ mang tính chất giới thiệu không đi sâu vào hướng dẫn sử dụng, nhưng mình sẽ nói lên cái hay khi mà các bạn sử dụng framework Angular JS.


Các bạn xem phiên bản chạy thực ở đây nhé.


Đầu tiên các bạn mở tệp tin `app.js` lên và sẽ thấy một cấu trúc như sau.


```javascript
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
    ...
  }

  function searchWeather() {
   ...
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
   ...
  }

  function filterYahooWeatherData(data) {
    ...
  }
}
```

**Cái đầu tiên chúng ta thấy ngay đó là sự module hóa**

 `angular.module('sociss-weather-card', [])`, Các mã lệnh sẽ được nhóm vào các module, trong bài thì mình đặt tên một module là `sociss-weather-card`, Giả dụ các bạn hoàn toàn có thể viết thêm một module của riêng mình ví dụ là `my-module`, viết
vào đó mã lệnh của các bạn và chia sẽ lên mạng cho mọi người dùng.

Thì khi đó để dùng được module `my-module` mà bạn viết, mình chỉ cần đơn giản như sau

`angular.module('sociss-weather-card', ['my-module'])`

Rất tiện lợi đúng không nào.

**Tiếp theo đó là dependency injection**

dependency injection nói một cách đơn giản là các bạn chia nhỏ các tính năng của
ứng dụng thành các `service` rồi sau đó `inject` hoặc nói cách khác là `import` vào
các `controller` hoặc các `service` khác để dùng lại mà không cần phải viết lại code nhiều lần. Giúp cho việc tổ chức code gọn gàng và trong sáng hơn.

**Tiếp theo là mô hình MVC rõ ràng**

Các mở tệp tin `index.html` ra và nhìn đoạn code nhỏ sau trong phần `card-header`

```html
<div class="header">
  <div class="city-column">
    <h1 id="city_name">{{weather.cityName}}</h1>
    <h3 id="city_weather">{{weather.weather}}</h3>
    <p><b>Độ Ẩm</b> <span id="humidity">{{weather.humidity}}</span> %</p>
    <p><b>Tốc độ gió</b> <span id="wind">{{weather.wind}}</span> Km/h</p>
  </div>
  <div class="temperature-column">
    <span id="temperature">{{weather.temp}}</span>
    <span><sup>°C</sup></span>
  </div>
</div>
```

Các bạn thấy các ký tự {{}} được gọi là các expression, mục đích của nó đơn giản đó là nhận dữ liệu từ `controller` và hiển thị ra `View`. Việc tương tác với HTML DOM được AngularJS đảm nhiệm các bạn không cần phải lo việc đó.

Dữ liệu giữa `View` và `Controller` được gắn kết với nhau thông qua một biến gọi là `$scope`.

Ví dụ để hiển thị dữ liệu thời tiết thành phố Đà Nẵng lên `View` thì trong `Controller` ta làm như sau.

```javascript
WeatherService.loadWeather('Đà Nẵng, Việt Nam', function(err, weather) {
  if(err) {
    alert(err.message);
  } else {
    $scope.weather = weather;
    // fire notification update view.
    $scope.$apply();
  }
});
```


Cái bạn để ý là đơn giản là mình gán thuộc tính `weather` cho `$scope` và sau đó gọi hàm `$scope.$apply()` để báo với angular là đã có dữ liệu mới hay cập nhật `View` lại.

Và kết quả là dữ liệu được hiển thị đúng lên `View` như ta đã thấy.

**Trình bày dữ liệu tiện lợi với các Directive**

Các bạn để ý là để hiển thị bảng dữ liệu về dự đoán thời tiết 10 ngày tiếp theo chỉ đơn giản với đoạn mã sau.


```html
<tr ng-repeat="item in weather.forecast">
  <td>{{item.date}}</td>
  <td>{{item.text}}</td>
  <td>{{item.low}} °C</td>
  <td>{{item.high}} °C</td>
</tr>
```

`ng-repeat` được gọi là một `directive` nói một cách đơn giản là nó chỉ cho angular biết nên thao tác HTML DOM ra sao với dữ liệu đó.

Cụ thể  `ng-repeat` sẽ lập lại nhiều lần tương ứng với số dữ liệu có trong `weather.forecast`, với mỗi `item` trong `weather.forecast` nó sẽ tương tác với HTML DOM để tạo ra thêm một dòng thẻ `tr`.


Kết luận là các bạn thấy khi sử dụng Angular JS thì mã lệnh ngắn gọn và các thao tác trở nên đơn giản hơn đúng không nào.
