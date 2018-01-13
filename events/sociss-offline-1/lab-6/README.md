# Lab 6 - Dùng thử Bootstrap

#### 1. Cài đặt Bootstrap

Cái hai cách cài đặt, một là bạn tải trọn bộ mã nguồn của Bootstrap về hoặc cách
thứ hai là dùng CDN của Bootstrap để tải trực tiếp từ Internet về.

**Cách 1**

Các bạn vào trang web http://getbootstrap.com/docs/3.3/getting-started/#download

Sau đó nhấp vào nút `Download Bootstrap`


Sau đó bạn giải nén ra sẽ được cấu trúc như sau

```sh
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
├── glyphicons-halflings-regular.eot
├── glyphicons-halflings-regular.svg
├── glyphicons-halflings-regular.ttf
└── glyphicons-halflings-regular.woff
```

Để sử dụng thì bạn cần Link tệp CSS và JS của Bootstrap đến File HTML của bạn
ví dụ ở trên là `css/bootstrap.css` và `js/bootstrap.js`


**Cách 2** Dùng CDN của Bootstrap

Để dùng qua CDN tức là tải trực tiếp từ Internet về, các bạn cần có trình duyệt
kết nốí mạng và sau đó bỏ đoạn code dưới đây và trang HTML của bạn.


```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```


Như vậy là bạn đã có thể sử dụng bootstrap được rồi. Các bạn để ý là Bootstrap yêu
cầu phải có JQuery nhé,và để ý các bạn file nạp JQuery trước rồi sau đó mới đến
bootstrap.js

#### 2. Cách sử dụng

Các bạn thường thì sẽ vào địa chỉ này để xem mã lệnh của của components viết sẵn bởi bootstrap http://getbootstrap.com/docs/3.3/components/

Sau đó để hiệu chỉnh lại cho phù hợp với thiết kế của bạn, các bạn sẽ viết riêng
ra một file CSS của chính mình và chỉnh sửa đè lên CSS của bootstrap cho phù hợp.

Ví dụ trong bài Demo của mình, mình tạo ra một tệp là `style.css` có mã lệnh như sau

```css
.sociss-navbar {
  background-color: #337ab7;
  border-radius: 0px;
}

.sociss-navbar  a {
  color: white !important;
}

.sociss-navbar .active a, a:focus, a:hover {
  background-color: #5fa7e4 !important;
}

.sociss-footer {
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}
```

Mục đích là để thay đổi màu chữ mặc định của thanh Bootstrap Navigation.

#### 4. Ưu điểm

Các bạn thấy rằng, chỉ với vài câu lệnh HTML đơn giản các bạn đã tạo ra một layout
web với tính năng Responsive thích ứng với nhiều trình duyệt, một thanh navigation reponsive giúp dễ dàng sử dụng trên mobile.


#### 5. Chạy thử giao diện Bootstrap

Các bạn có thể xem online tại đây.

Các bạn tạo ra một tệp tin index.html , import bootstrap vào bằng một trong hai cách ở trên rồi dán đoạn mã dưới đây vào.

Mã HTML  (Các bạn lưu ý chỉnh lại đường dẫn đến file CSS của bootstrap và JQuery cho phù hợp)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Sociss Bootstrap Demo</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom styles -->
  <link href="css/style.css" rel="stylesheet">
</head>

<body>
  <!-- Navigation -->
  <nav class="navbar navbar-default sociss-navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Sociss Bootstrap Demo</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Page 1-1</a></li>
              <li><a href="#">Page 1-2</a></li>
              <li><a href="#">Page 1-3</a></li>
            </ul>
          </li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="container">

    <!-- Heading Row -->
    <div class="row">
      <div class="col-lg-8">
        <img class="img-responsive" src="http://placehold.it/900x400" alt="">
      </div>
      <!-- /.col-lg-8 -->
      <div class="col-lg-4">
        <h1>Sociss Class Demo Using Bootstrap</h1>
        <p>This is a template just for Demo</p>
        <a class="btn btn-primary btn-lg" href="https://sociss.edu.vn/">Go to Sociss Home Page</a>
      </div>
      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->

    <!-- Content Row -->
    <div class="row">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card One</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-info">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Two</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-info">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">Card Three</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-info">More Info</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->

    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
  <br/><br/><br/><br/>

  <!-- Footer -->
  <footer class="sociss-footer">
    <p class="text-center">Copyright &copy; Sociss Class 2018</p>
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>

```

Mã CSS (Tệp style.css)

```css
.sociss-navbar {
  background-color: #337ab7;
  border-radius: 0px;
}

.sociss-navbar  a {
  color: white !important;
}

.sociss-navbar .active a, a:focus, a:hover {
  background-color: #5fa7e4 !important;
}

.sociss-footer {
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}
```

Sau đó các bạn đơn giản là mở tệp index.html lên và xem thành quả.
