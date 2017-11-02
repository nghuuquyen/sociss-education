# 1. Giới thiệu

Bài học này chúng ta sẽ bắt tay vào xây dựng một website tĩnh với Node.js. Kiến thức trong mỗi bài học sẽ bắt đầu phức tạp dần.

# 2. Mục tiêu đạt được trong bài học

1) Sử dụng được framework Express.js để khởi tạo và định tuyến đường dẫn cho website.
2) Khai báo và sử dụng được các tài nguyên tĩnh như là các tệp tin js, css và hình ảnh.
3) Hiểu được căn bản cấu trúc một website theo mô hình MVC.
4) Thực hành module hóa trong Node.js

# 3. Công cụ và kiến thức cần thiết

### Công cụ

1) Node JS và NPM
2) Máy tính nối mạng Internet
3) Text Editor như Atom, Sublime hoặc Visual Studio Code

### Kiến thức

Nếu đây là lần đầu tiên bạn đến với Node.js thì bạn nên xem lại các bài học trước đó tại đây. Vì để bắt đầu phần này bạn cần có kiến thức nền trước.

Bài học liên kết với bài học này là [Tạo HTTP web server với Node.js](https://sociss.edu.vn/courses/nodejs/lesson/tao-http-web-server-voi-nodejs)

Các bạn nên đọc qua bài trên trước để hiểu hơn các từ mình dùng cho bài này, và cũng để hiểu hơn về bản chất bên dưới các framework họ làm cái gì.


# 4. Nội dung bài học

## 4.1 Giới thiệu và cài đặt framework Express.js

### Tổng quát bài học

Các bạn biết rằng một yêu cầu đến website sẽ hoạt động theo các bước như sau.
1) người dùng mở trình duyệt lên, gọi một URL nào đó đến webserver của chúng ta
2) Server tiếp nhận URL và thực hiện các hành động tưng ứng và trả về một trang HTML
3) Trình duyệt người dùng tiếp nhận trang HTML đó và hiển thị lên màn hình.
4) Trong quá trình hiển thị lên trang HTML thì trình duyệt sẽ phải tải về các tài nguyên tĩnh chính là các hình ảnh, tệp tin javascript và css.


 Bài học của chúng ta cũng có các phần tưng ứng với các bước đó.

**Trong phần đầu tiên**

mình sẽ hướng dẫn cách sử dụng Express.js để khởi tạo một HTTP server, định tuyến và mapping (gắn) các controller (chứa các function handler) tứng ứng để đáp ứng các yêu cầu

**Phần thứ hai**

Mình sẽ hướng dẫn các bạn thiết lập **view engine** là công cụ để các bạn trả về cho client các trang HTML tương ứng.

**Phần thứ ba**

Mình hướng dẫn các bạn cách config cho web server biết thư mục chứa các tài nguyên tĩnh để server cho phép client tải về khi được yêu cầu.


### Express.js là gì ?

Express.js là một framework cung cấp cho chúng ta các tiện ích để định tuyến ( Routing ), xử lý các lớp trung gian (Middleware), Xử lý các yêu cầu và đáp ứng yêu cầu (HTTP Request và HTTP Resoponse) một cách dễ dàng hơn.

Qua bài học trước về cách xây dựng một HTTP server, thì các bạn đã hiểu được cách làm thế nào để có thể tạo một HTTP server, định tuyến và xử lý yêu cầu, đáp ứng yêu cầu. Thì giờ đây Express.js sẽ là một framework giúp bạn làm điều đó dễ dàng hơn. Tuy nhiên bản chất bên trong một framework làm gì thì nó vẫn bắt đầu từ những gì cơ bản nhất nhé.

### NPM là gì ?

NPM là một bộ công cụ quản lý thư viện của Node.js. Nó cho phép bạn có thể cài đặt và quản lý các thư viên , module một cách dễ dàng.

### Các cài đặt Express.js

Tại thư mục chứa ứng dụng sau khi đã chạy lệnh `npm init` để khởi tạo project thì các bạn gõ lệnh sau

`npm install express --save`

Đối số `--save` là để tự động lưu vào tệp tin package.json

Sau khi cài đặt xong thì các bạn có thể cùng mình bắt tay vào thực hành bài học được rồi.

## 4.2 Khởi tạo cấu trúc thư mục của ứng dụng

Đầu tiên từ thư mục gốc nơi các bạn khởi tạo ứng dụng, các bạn tao một cấu trúc thư mục như sau.

```markup
.
├── controllers
│   ├── core.server.controller.js
│   └── index.js
├── public
│   ├── css
│   ├── img
│   └── js
│       └── app.client.js
├── README.md
├── routes
│   ├── core.server.routes.js
│   └── index.js
├── server.js
└── views
    ├── contact.server.view.html
    └── homepage.server.view.html

```

**Giải thích**

Thư mục **controllers** ở đây là để chứa các hàm xử lý tương ứng với mỗi route (path).
Thư mục **routes** là để chứa các file định tuyến cho cả ứng dụng.

Phong cách đặt tên file của mình là như trên, ví dụ `core.server.controller.js` thì nghĩa là mình hiểu đó là controller cho core module nằm ở phía server side. Đây là một best practice dành cho những ứng dụng có mã nguồn chứa cả khối client và server. Nó còn giúp bạn dễ dàng tìm kiếm file hơn.

mỗi thư mục đều có một file **index.js** đây là file chỉ mục của module, nó giúp exports tất cả các module con ra ngoài để dễ dàng require vào sử dụng.

## 4.1 Phần Controller

Trong bài học này controller đóng vai trò như là các handler tiếp nhận các yêu cầu thông qua router và giải quyết nó.

Mở file **core.server.controller.js** lên và gõ vào đó đoạn mã sau.

```javascript
"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderContactPage  : renderContact
};

/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.send('This is homepage');
}

/**
* @name renderContact
* @description
* Render contact page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContact(req, res) {
  res.send('This is contact');
}
```

Trong file **src/controllers/index.js** thì bạn gõ vào đoạn mã sau

```javascript
const coreCtrl = require('./core.server.controller');

module.exports = {
  Core : coreCtrl
};
```

Đơn giản là để export module core controller ra ngoài.


**Giải thích mã lệnh**

1) Thứ nhất bạn lưu ý req và res ở đây là Express HTTP request và Express HTTP response. Hai đối tượng này đã được Framework Express.js ghi đè lên đó một số phương thức nên cách sử dụng cũng khác với HTTP.IncommingMessage gốc của Node.js ở bài học trước.

2) Sau khi viết xong các function thì mình public nó ra bằng cách exports. Đây là một phong cách viết nên áp dụng vì nó rất rõ ràng để đọc. Chú ý khối exports được để ở đầu file, sẽ giúp người khác dễ đọc hơn, nắm bắt nhanh bên trong module có những function gì.


## 4.2 Phần Routing (Định tuyến)

Định tuyết là việc bạn chỉ định gắn một URL (Bao gồm path và method) đến một controller method cụ thể (Handle function)

mở file **core.server.routes.js** lên và gõ vào đoạn mã sau

```javascript
/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";

const coreCtrl = require('../controllers').Core;

module.exports = function(app) {
  app.route('/').get(coreCtrl.renderHomePage);
  app.route('/contact').get(coreCtrl.renderContactPage);
};
```

Trong file **src/routes/index.js** thì bạn gõ vào đoạn mã sau.

```javascript
"user strict";

const coreRoutes = require('./core.server.routes');

module.exports = function(app) {
  coreRoutes(app);
};
```

Trong phần mã này, để ý **app** ở đây chính là **express HTTP server**.


### 4.3 Phần Server

Mở file **server.js** lên và gõ vào đoạn mã sau

```javascript
"use strict";

const express = require('express');
const app = express();
const port = 3000;

// Do Registration routes.
require('./routes')(app);

app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});
```


**Giải thích mã lệnh**

Ta thấy rằng thay vì như bài học trước ta tạo một HTTP server bằng lệnh

```javascript
const http = require('http');
const server = http.createServer(requestHandler);
```

thì nay sẽ dùng Express để làm việc đó

```javascript
const express = require('express');
const app = express();
```

thứ hai, với express.js để định tuyến một đường dẫn thì ta sẽ làm như sau

```javascript
const express = require('express');
const app = express();

app.route('/').get(function handler(req, res) {
  // Do somthing on request '/home' on 'GET' method
});
```

Như ví dụ trên, thì để code đẹp và gọn gàng hơn, ta tổ chức lại bằng cách truyền express http server **app** vào route module

```javascript
// Do Registration routes.
require('./routes')(app);

.............In /routes/index.js

module.exports = function(app) {
  coreRoutes(app);
};


.............In /routes/core.server.routes.js

module.exports = function(app) {
  app.route('/').get(coreCtrl.renderHomePage);
  app.route('/contact').get(coreCtrl.renderContactPage);
};

```

Cách viết trên là một best practice để chia nhỏ module, giúp quản lý code dễ dàng hơn.


### 4.4 Khởi chạy ứng dụng

tại thư mục gốc của ứng dụng bạn chạy lệnh `node server` và nếu mọi thứ đều tốt bạn sẽ nhận được câu thông báo là

App listen on port 3000


sau đó mở trình duyệt lên và chạy thử đường dẫn 127.0.0.1:3000 và 127.0.0.1:3000/contact để xem kết quả nhé.


### 4.4 Thiết lập View Engine ( Hay còn gọi là template engine)

Đây là một công cụ hỗ trợ cho bạn hiển thị ra các trang HTML với nội dung động. Ví dụ bạn có một trang HTML với nội dung như sau

```markup
<p>{{content}}</p>
```

Thì bạn thấy rằng tương ứng với việc bạn truyền gì gì biến {{content}} mà trang HTML trả về cho người dùng sẽ có nội dung khác nhau. Để làm việc đó dễ dàng với Node.js mình sẽ sử dụng view engine.


>Nếu không sử dụng view engine thì theo bài học trước trong việc tạo một HTTP web server, các bạn phải sửdụng các phép nối chuỗi để làm điều này, với ứng dụng nhỏ thì không sao nhưng nếu ứng dụng lớn hơn thì sẽ rất là mệt và khó quản lý, đặc biệt là khi nội dung trang HTML cực kỳ phức tạp.


Ví dụ nếu không dùng view engine thì bạn sẽ phải làm một cái gì đó như sau. Chú ý mình viết trên ES6 để đỡ khổ , chứ ES5 thì ôi thôi rồi, toàn cộng chuỗi.

```javascript
/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  let content = "This is dynamic page content for homepage !!!!!!";
  return res.send(
    `
    <html>
      <body>
        <div class="header">
          This is header
        </div>

        <div class="content">
          ${content}
        </div>
      </body>
    </html>
    `
  );
}
```

### Giới thiệu template engine Handlebars.js

Sau một thời gian đổi nhiều template engine cho Sociss Class, đến nay mình đã chốt lại dùng Handlebars vì nó thật sự tuyệt vời, đơn giản, hiệu quả và mạnh mẽ.

Mình sẽ có riêng một bài học nâng cao cho phần này, tuy nhiên ở bài học này mình chỉ giới thiệu sơ qua các dùng cơ bản nhé.


### Thiết lập template engine

Đầu tiên các bạn cài đặt express-hbs, một bộ chuyển đổi hanlebard.js thành middleware để sử dụng kèm với express.js

từ thư mục gốc của project chạy lệnh

`npm install express-hbs --save`


Sau đó ban mở file **server.js** lên và chỉnh lại như sau

```javascript
"use strict";

const express = require('express');
const app = express();
const port = 3000;
let hbs = require('express-hbs');

// Do Registration routes.
require('./routes')(app);

// Set view template engine for file extension server.view.html
app.engine('server.view.html', hbs.express4({
  extname: '.server.view.html'
}));

// Set view engine
app.set('view engine', 'server.view.html');

// Set views folder
app.set('views', './views');


app.listen(port, function(err) {
  if(err) {
    console.error('Something error !!');
    console.error(err);
  }

  console.log('App listen on port ' + port);
});
```

Trong đó có thêm đoạn lệnh sau để đăng ký một template engine

```javascript

// Set view template engine for file extension server.view.html
app.engine('server.view.html', hbs.express4({
  extname: '.server.view.html'
}));

// Set view engine
app.set('view engine', 'server.view.html');

// Set views folder
app.set('views', './views');
```

Trong đó lần lượt mình làm những điều sau.

1) Mình đăng ký với Express là mình có một template engine tên là 'server.view.html' . Làm vậy vì thực ra trong một website các bạn vẫn có thể sử dụng nhiều template engine cùng lúc chứ không chỉ riêng một cái.

2) Mình thiết lập cho express biết view engine mặc định là 'server.view.html'

3) Mình thiết lập thư mục chứa các file view cụ thể là thư mục chứa các file html.

Sau đó mở file **./controllers/core.server.controller.js** lên và chỉnh lại như sau.

```javascript
"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderContactPage  : renderContact
};

/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.render('homepage', {
    content : 'This is homepage content'
  });
}

/**
* @name renderContact
* @description
* Render contact page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContact(req, res) {
  res.render('contact', {
    content : 'This is contact page content'
  });
}
```

**Giải thích**

res.render là một method trong HTTP response của Express, nó sẽ thực hiện việc render với view engine đã thiết lập.


Thứ hai mình chỉ ghi **homepage** nó sẽ tự hiểu vì là mình đã thiết lập thư mục chứa view file là './views' và định dạng tên mở rộng là '.server.view.html' nên nó sẽ tự hiểu


homepage --> ./views/homepage.server.view.html

Còn **content** là một biến chứa dữ liệu, trên trang view cụ thể mình sẽ gọi ra như sau. Mở file
**/views/homepage.server.view.html** lên và ghi vào đó nội dung đơn giản như sau

```markup
<b>{{content}}</b>
```


Cuối cùng ta lại chạy thử ứng dụng và mở trình duyệt lên kiểm tra nào.



### 4.5 Thiết lập tài nguyên tĩnh

Khi viết website thì hình ảnh, các file js, css thậm chí là các file văn bản khác có thể được xem là tài nguyên tĩnh. Tại sao lại cần phải khai báo tài nguyên tĩnh ?

Vì lý do bảo mật và an toàn cho server. Ví dụ trên server bạn có file .env, file này là file chứa toàn bộ các thiết lập database và mật khẩu truy xuất. Điều tồi tệ sẽ diễn ra nếu mọi người có thể truy cập nội dung này dễ dàng từ trình duyệt đúng không nào.

Chính vì vậy là mặc định mọi tài nguyên trên máy chủ đều bị ẩn, để cho truy xuất được bạn phải cấp quyền và chỉ rõ ra. Bước làm này chính là khai báo và thiết lập tài nguyên tĩnh.


Để làm điều này chỉ cần một dòng như sau là đủ

```javascript
app.use('/', express.static('./public'));
```
 chèn dòng trên vào file **server.js** , khi ấy file này sẽ như sau


```javascript

"use strict";

const express = require('express');
const app = express();
const port = 3000;
let hbs = require('express-hbs');

// Do Registration routes.
require('./routes')(app);

// Set static content.
app.use('/', express.static('./public'));

......
```

**Giải thích ý nghĩa**

app.use('/', express.static('./public'));

Nghĩa là gắn đường dẫn '/' với thư mục ./public để cấp phát tài nguyên tĩnh. Sau đó ta thử tạo một file js ở đường dẫn './public/js/app.client.js'

khi ấy từ trình duyệt ta có thể gọi đến file trên qua đường dẫn

`http://127.0.0.1:3000/js/app.client.js`

Thử chỉnh lại là

app.use('/static', express.static('./public'));

khi ấy từ trình duyệt ta có thể gọi đến file trên qua đường dẫn

`http://127.0.0.1:3000/static/js/app.client.js`


Nào bước cuối cùng ta viết thử vào file **app.client.js** đoạn mã sau

```javascript
alert('Yeah !!!, you got me');

var x = document.getElementById("pTag");
x.innerHTML = "Content change by app.client.js !!!";
```

và sửa lại trong file **homepage.server.view.html** thành

```markup
<b>{{content}}</b>
<p id="pTag"></p>
<script src="/js/app.client.js"></script>
```

Và chạy lại ứng dụng, sau đó vào URL http://127.0.0.1:3000/ để xem kết quả. Nếu không có gì sai bạn sẽ nhận được một thông báo ( Có thể sẽ không hiển thị nếu bạn chặn mất thông báo từ thiết lập trình duyệt) và nội dung sẽ như thế này

This is homepage content
Content change by app.client.js !!!

## 5. Kết luận và nhận xét

Qua bài học này mình đã giới thiệu cho các bạn cách để tạo ra một website với Node.js. Về kiến trúc code thì nó đã tương đối tốt. Về nội dung bài học thì mình mong muốn các bạn hiểu về cách sử dụng cơ bản Express.js để làm việc, ý nghĩa của template engine và tài nguyên tĩnh (static content).

Ở bài học tiếp theo mình sẽ đi sâu hơn vào kiến trúc tổ chức một ứng dụng tốt hơn nữa, module hóa nhỏ hơn nữa. Và giải quyết các vấn đề về thiết lập môi trường chạy ứng dụng và chạy một Demo single page MVC đơn giản.


## 6. Bài tập

Mình có bài tập như sau, áp dụng các hướng dẫn trên, viết một website có hai trang là trang chủ và trang liên hệ có hình ảnh và css tương đối đẹp. Yêu cầu trong trang chủ bạn phải hiển thị được thông tin trình duyệt người dùng sử dụng.

**Gợi ý**

1) Bỏ hình ảnh vào thư mục img và gọi ra dùng tương tự cho css.
2) Lấy thuộc tính header 'user-agent' ra và hiển thị ra view thông qua template view engine.


Mã nguồn của bài học mình để ở Github theo link sau [Socis-blog-v1 Github](https://github.com/nghuuquyen/sociss-class-nodejs/tree/master/src/sociss-blog-v1)


# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
