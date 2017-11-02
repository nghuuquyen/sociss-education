# 1. Giới thiệu

Chào các bạn, lần này mình sẽ giới thiệu đến các bạn chi tiết hơn về kỹ thuật Routing ( Định tuyến ) trong Node.js. Định tuyến đơn giản mà nói là xác định Client sẽ được đáp ứng như thế nào khi truy cập vào một liên kết với một HTTP method cụ thể.
 
## 1.1 Cấu trúc bài học

### Lý thuyết 

Cấu trúc bài gồm 3 phần lý thuyết nói về 3 khái niệm chính là route path, route parameters và route response.

### Thực hành 

Phần thực hành mình sẽ hướng dẫn cách áp dụng kỹ thuật Routing để xây dựng một trang web nhỏ theo mô hình MVC như hình dưới đây.
 
# 2. Kiến thức và công cụ cần thiết

## 2.1 Kiến thức 

Trong bài học lần này là phân nâng cao của bài học trước, chính vì vậy mình mong muốn các bạn hiểu nội dùng trong bài học này trước, sau đó hãy tiếp tục đọc đến bài này.

Bài học trước [Tạo website đầu tiên với Node.js](https://sociss.edu.vn/courses/nodejs/lesson/tao-website-dau-tien-voi-nodejs)

## 2.2 Công cụ 

Vẫn như những bài học trước, chúng ta vẫn chỉ cần máy tính cài đặt Node.js và một text editor là được.


# 3. Nội dung bài học

## 3.1 Routing là gì ?

Routing trong Node.js là một khái niệm nói đến việc xác định ứng dụng sẽ đáp ứng như thế nào khi người dùng tạo một request đến một endpoint (Điểm cuối) cụ thể nào đó. Điểm cuối đó thường là một URI hoặc một đường dẫn (Path) với một Request method (POST, PUT, GET, ...) cụ thể.

## 3.2 Cấu trúc định tuyến cơ bản 

Trong express.js định tuyến có cấu trúc như sau 

`app.METHOD(Path, Handler...)` 

Trong đó:

+ **app** : là một instance của express
+ **METHOD**: là một HTTP Method
+ **Path**: là một đường dẫn trên máy chủ 
+ **Handler** : là một function sẽ thực thi khi một **route** được trùng khớp 


**Giải thích**

1) **handler** : có thể có một hoặc nhiều function 
2) một **route** được xác định bằng Path (đường dẫn) và request method. 
3) Khái niệm **route** trùng khớp là chỉ việc một người dùng thực hiện request với Path (đường dẫn) và Method trùng khớp với định nghĩa trong **route**.

Ví dụ ra có một route như sau 

```javascript
app.get('/hello', function doHello(req, res) {
  res.send('Hello World!')
})
```

Thì khi đó nếu client thực hiện một GET /hello đến máy chủ, thì khi ấy route sẽ trùng khớp và function doHello sẽ được gọi thực hiện.

## 3.2 Route methods 

Express hỗ trợ rất nhiều loại HTTP methods khác nhau, bao gồm : 

get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch and searc

Trong đó sử dụng nhiều nhất là:

Get, Post, Put, Head, Delete và Options ý nghĩa của từng method này mình đã nói đến trong bài học giao thức HTTP là gì.


## 3.3 Route paths (Đường dẫn)

Đây là phần trọng tâm của bài học hôm nay, route path có thể là một chuỗi thông thường (String) hoặc là một chuỗi có ký hiệu biểu thức chính quy (string patterns) hoặc là một biểu thức chính quy (regular expressions). Ví dụ 

1) /users/nghuuquyen   : là một đường dẫn thông thường 
2) /users/user/*             : là một đường dẫn với ký hiệu * biểu diễn cho một chuỗi bất kỳ 
3) /^[a-zA-Z0-9]{5,15}$/ : là  một đường dẫn có dạng biểu thức chính.

```javascript
app.get('/users/nghuuquyen', function(req, res) {
  //Do something.
});
```

là một đường dẫn thông thường.

```javascript
app.get('/users/*', function(req, res) {
  // Do something.
});
```

là một đường dẫn theo khuôn mẫu (String pattern). Ký hiệu * ở đây nói lên là route trên khớp với mọi đường dẫn bắt đầu với /users/.

```javascript
app.get(/.*cool$/, function(req, res) {
  // Do something.
});
```

là một đường dẫn với dạng biểu thức chính quy (regular expression). Route này sẽ khớp với mọi đường dẫn kết thúc với đuôi là cool. Ví dụ YOUARESOcool sẽ khớp nhưng YOUTOOCool thì sẽ không vì khác ký tự 'C'.

 
**Ứng dụng**

Mình sẽ nêu một số ứng dụng với từng loại mà mình hay dùng trong quá trình lập trình. 

+ Kiểu string pattern mình hay áp dụng để việc đánh chặn tất cả các route, dùng trong việc bảo vệ một tập đường dẫn nào đó, ví dụ


```javascript
app.get('/secure/*', coreCtrl.requireLogin);
```
Ví dụ như với mọi đường dẫn bắt đầu bằng /secure/ thì phải yêu cầu login.

+ Biểu thức chính quy thì mình hay dùng để validate (hợp thức hóa) các đối số, ví dụ 

```javascript
router.route('/author/:author([a-zA-Z0-9.\-_]{8,30})').get(AuthorCtrl.renderAuthorPage);
```

Ở trên là một dạng đường dẫn với tham số :author được quy định có độ dài từ 8 đến 30 ký tự, bao gồm các chữ cái từ a-z, A-Z, 0-9 và 3 ký tự .,- và _. Nếu ở vi phạm thì route sẽ không khớp.


## 3.4 Route parameters

Route parameters là những vị trí trên URL được đánh dấu bằng cách đặt tên, mục đích là để lấy ra các giá trị tương ứng. Tất cả cá giá trị đối số sẽ được đặt vào đối tượng **req** trong thuộc tính **params**. Với tên thuộc tính trùng khớp với từ khóa được xác định trên URL.

Ví dụ, chúng ta định nghĩa một path là /users/:user . Thì ở đây :user chính là một route param. Khi đó nếu người dùng truy cập đường dẫn như là 

/users/nghuuquyen  --> ta lấy ra được :user = nghuuquyen 

và giá trị này sẽ nằm ở req.params.user 

```javscript
// Route path:     /users/:user/:view
// Request URL: http://127.0.0.1:3000/users/nghuuquyen/gallery
// req.params:    { "user": "nghuuquyen", "view": "gallery"}
app.route('/users/:user/:view', function(req, res) {
  console.log(req.params.user);
  console.log(req.params.view);
});
```


**Ứng dụng**

Route parameter dùng để biết được client muốn truy vấn cái gì thông qua đối số truyền vào. Dựa vào đó trong function handler tương ứng, chúng ta sẽ lấy các giá trị ra và thực hiện truy vấn phù hợp.

Ví dụ: 

Path: /user/:user 
Request: /user/nghuuquyen 

-> Trả về trang profile của người dùng có username là nghuuquyen.

 
**Kỹ thuật nâng cao**

1) Thường thì mình hay kết hợp rằng buộc biểu thức chính quy cho đối số để giảm bớt các lỗi truy vấn và tăng độ an toàn cho một route.

Ví dụ mình định nghĩa một route là /users/:user 

với đối số :user mong muốn là một username. Lúc này mình biết rõ là username của ứng dụng có độ dài từ 8 đến 30 kí tự chỉ bao gồm chữ cái tiếng anh hoa, thường , chữ số từ 0 đến 9 và ba ký tự đặc biệt là -, . và _.

Như vậy mình có thể áp dụng một biểu thức chính quy cho đối số này 

:user(^[A-Za-z0-9\.\-_]{8,30}+$) ==> Lúc này nếu bạn nhập vào một đường dẫn có đối số :user nhỏ hơn 8 hoặc lớn 30 ký tự thì route trên sẽ không nhận, hoặc chứa ký tự khác dấu ., _ và - , thì route cũng không nhận.
Từ đó hạn chế được việc query một username bị sau quy tắc và lại an toàn tránh tấn công SQL injection.

2) **router.param(name, callback)** là một kỹ thuật cho phép gán các hàm xử lý cho một đối số cụ thể trên route.

Ví dụ như trong bài thực hành mình có mọi một route param là :author , cái này thực chất là username hoặc author ID.

```javascript 
router.route('/:author([a-zA-Z0-9.\-_]{8,30})')
.get(AuthorCtrl.renderAuthorPage);

```

Thì mình sẽ áp dụng kỹ thuật trên để gán một hàm xử lý vào param này.

```javascript
// Resolve route params
router.param('author', AuthorCtrl.findOne);
```

Nghĩa là cữ mỗi khi gặp route có param :author thì sẽ gọi hàm AuthorCtrl.findOne 

Hàm đó được định nghĩa như sau

```javascript 
/**
* @name findAuthorByUsernameOrId
* @description
* Populate author data to HTTP request.
*
* @param  {object} req               HTTP request.
* @param  {object} res               HTTP response.
* @param  {object} next              Next middleware
* @param  {object} author            Author id or username.
*/
function findAuthorByUsernameOrId(req, res, next, author) {
  AuthorService.findByUsernameOrId(author)
  .then(_author => {
    req.author = _author;
    return next();
  })
  .catch(err => next(err));
}
```

Ta thấy răng nó sẽ truy vấn vào Model, với tham số là username hoặc Id nhận được, và chờ kết quả trả về. Nếu có kết quả trả về thì sẽ gắn author vào đối tượng HTTP request req rồi chuyển đến middleware tiếp theo.

Từ đó ở một midleware tiếp theo như là renderAuthorPage chẳng hạn, bạn không cần phải gọi truy vấn vào cơ sở dữ liệu để lấy author nữa, mà chỉ đơn giản như sau.

```javascript
/**
* @name renderAuthorPage
* @description
* Render HTTP page for view author information.
*
* @param  {object} req        HTTP request
* @param  {object} req.author Author selected.
* @param  {object} res        HTTP response
*/
function renderAuthorPage(req, res) {
  res.render('author/view', {
    author : req.author
  });
}
```

để ý là render lên trang author/view với dữ liệu truyền vào chính là req.author.

**Ứng dụng**

Cách tiếp cận như trên rất là tốt, thay vì ở mỗi controller có đối số :author bạn phải gọi lại service để lấy author thì như trên chỉ cần viết một lần là đủ, rất tiện và tránh trùng lặp code.


## 3.5 Route handlers

Đơn giản là một hoặc nhiều function sẽ được gọi khi một route trùng khớp để đáp ứng một yêu cầu nào đó. Lưu ý các handler sẽ được gọi đúng theo thứ tự truyền vào. Ví dụ 

app.get('/user', [a, b]); 

thì a sẽ gọi trước b. Chú ý là để b được gọi thì trong a phải gọi hàm next(). Ví dụ 


```javascript 
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/c', [cb0, cb1, cb2]);
``` 

**Ứng dụng**

Thường thì mình áp dụng kỹ thuật trên để tạo ra các polixy để bảo đảm thẩm quyền người dùng trên hành động nào đó, ví dụ mình nói là muốn xem thông tin thành viên thì phải đăng nhập trước. Khi đó mình có thể định nghĩa một route như sau. 


```javascript 
function isLogged(req, res, next) {
  if( Đã login ) {
    return next();
  } 
  
  return res.status(403).redirect('/login');
}

function renderProfilePage(req, res, next) {
  // Do render profile page...
}


app.get('/users/:user', [isLogged, renderProfilePage]);
``` 


Hoặc thực hiện việc logging thông tin các request để lưu trữ xem ai làm gì, ví dụ:


```javascript 
function isLogged(req, res, next) {
  if( Đã login ) {
    return next();
  } 
  
  return res.status(403).redirect('/login');
}

function renderProfilePage(req, res, next) {
  // Do render profile page...
}

function logRequest(req, res, next) {
   // Do logging IP, Header request
   next();
}

app.get('/users/:user', [isLogged, logRequest, renderProfilePage]);
``` 

Có một kỹ thuật khác nữa hay được áp dụng đó là kiểm tra tần suất gọi request của một địa chỉ IP nào đó để tránh các cuộc tấn công DDOS.

Và rất nhiều thứ khác có thể áp dụng thêm, các bạn có thể linh động nghĩ ra.


## 3.6 Response methods

Sau việc tiếp nhận và xử lý, thì việc tiếp theo đó là đáp ứng (Response). Trong express định nghĩa sẵn một số phương thức hỗ trợ cho bạn như là:

Tên phương thức | Ý nghĩa
-------------------|------------------------------------------
res.json()  |  Trả về một dữ liệu dạng JSON
res.redirect() | Chuyển hướng đến đường dẫn nào đó 
res.render()   | Trả về một view template
res.send()     | gửi dữ liệu dạng text

Ở trên là những phương thức hay dùng nhất.

### 3.7 app.route()

Đây là một cách định nghĩa route rõ ràng hơn, mới được hỗ trợ trong các phiên bản mới. Ví dụ thay vì bạn định nghĩa như sau.

```javascript 
function doGet(req, res, next) {
  // something ...
}

function doPost(req, res, next) {
  // something ...
}

function doPut(req, res, next) {
  // something ...
}

app.get('/users/:user', doGet);
app.post('/users/:user', doPost);
app.put('/users/:user', doPut);
``` 

thì áp dụng app.route chúng ta có thể làm ngắn gọn như sau 

```javascript 
function doGet(req, res, next) {
  // something ...
}

function doPost(req, res, next) {
  // something ...
}

function doPut(req, res, next) {
  // something ...
}

app.route('/users/:user')
.get(doGet)
.post(doPost)
.put(doPut);
``` 

mình rất thích dùng cách app.route vì nó gọn và dễ nhìn hơn rất nhiều.


### 3.8 express.Router

Đây là một điều thú vị được cập nhận trong phiên bản mới của Express, giúp chúng ta có thể module hóa công việc định tuyến thành cái module nhỏ có thể sử dụng lại.

Ví dụ mình định nghĩa một module route có khả năng trả về thời gian hiện tại khi truy cập /time như dưới đây . Mình để trong file là **time.server.routes.js** 

```javascript 

var express = require('express')
var router = express.Router()

router.get('/time', function (req, res) {
  res.send(Date.now());
})

module.exports = router

```

Thì sau đó tại phần server.js mình sẽ gọi route đó ra và gắn vào một đường dẫn là /helper như sau .

```javascript
var timeRoutes = require('./routes/time.server.routes');

// ...

app.use('/helpers', timeRoutes);
``` 

Như trên ta có thể truy cập để lấy thời gian ở route là  `GET /helper/time` . Rất tiện đúng không nào.

Không chỉ như thế, các bạn có thể tận dụng lại nó trên một đường dẫn khác như sau.
 


```javascript
var timeRoutes = require('./routes/time.server.routes');

// ...

app.use('/helpers', timeRoutes);
app.use('/app', timeRoutes);
``` 

Vậy là ngoài cách truy cập vào `/helpers` các bạn có có thể try cập vào bằng đường dẫn `/app/time`. Rất là tiện đúng không nào, với tính năng này các bạn có thể linh hoạt sử dụng lại các module routes của mình dễ dàng và tiện dụng, tránh phải định nghĩa lại gây trùng lặp mã không đáng có.

Và đến đây là chúng ta đã hoàn thành phần lý thuyết, kế đến là phần thực hành của bài học. 

## 4. Thực hành 

Bài thực hành,rất sát với thực tế nên thật sự là rất khó, các bạn để làm được bài thực hành này cần phải có kiến thức của bài học trước.

Tuy nhiên dưới đây mình sẽ điểm sơ qua các phần nội dung chính của bài thực hành, còn phân tích chi tiết về bài thực hành này mình sẽ viết ở một bài viết thực hành khác.

Toàn bộ source code được để ở github theo link sau.  [Socis-blog-v2 Github](https://github.com/nghuuquyen/sociss-class-nodejs/tree/master/src/sociss-blog-v2)


### 4.2 Cơ bản về mô hình MVC 

Mình sẽ có bài học khác phân tích sâu hơn vào MVC, tuy nhiên ở bài học này mình sẽ giới thiệu sơ qua và áp dụng nó vào bài thực hành để các bạn dần dần nắm bắt được một kiến trúc ứng dụng tốt cho các website Node.js nói riêng và trên cả những công nghệ khác nữa.


Thì trong MVC, nguyên tắc chung là chia ứng dụng thành ba phần riêng biệt là Model, View và Controller.

Trong đó:

**Model**  bao gồm việc tương tác nhập xuất dữ liệu và các logic nghiệp vụ trên dữ liệu.
**View**   là thành phần giao diện tương tác với một cái gì đó, ở trong website thì có thể hiểu là người dùng còn view chính là trang HTML + CSS.

**Controller** Là thành phần điều khiển, có trách nhiệm là thành phần **trung gian** để **điều hướng** , **truyền nhận dữ liệu** từ Model qua lại với View và thực hiện các **logic nghiệm vụ trên View** để tương tác với người dùng.

Mình nhấn mạnh lần nữa trong mô hình **MVC chuẩn**, Controller chỉ có trách nhiệm **điều hướng** và **truyền nhận dữ liệu**  và thực hiện **logic nghiệp vụ trên View**.

trong đó cụ thể hơn 

**Điều hướng** : Các bạn sử dụng controller để điều hướng qua lại giữa các trang khác nhau

**Truyền nhận dữ liệu**: Các controller sẽ tiếp nhận tác nhân **thông qua view gửi lên** , tại đây controller có thể thực hiện một số thao tác kiểm tra dữ liệu và sau đó gửi dữ liệu liệu cho các module Service để xử lý và nhận dữ liệu trả về rồi gửi ngược lại cho View.
 
Thường thì trong một ứng dụng MVC, controller không trực tiếp tương tác với model mà là thông qua Service, trong đó bên trong Service lại gọi đến Model và thực hiện mỗi chuỗi nghiệp vụ cần thiết nào đó rồi mới gửi dữ liệu về. Mình ví dụ 

Bạn gọi một Service tạm gọi là PostService để tạo một bài viết cho một ngươi dùng dùng A có nội dung bài viết là Post B.

Thì khi ấy PostService sẽ thực hiện một chuỗi nghiệp vụ sau 

1) Kiểm tra người dùng A có tồn tại không
2) Kiểm tra người dùng A có được phép đăng bài không
3) Kiểm tra bài viết B có hợp lệ không 
4) Tiến hành liên kết bài viết B với người dùng A và nhập vào cơ sở dữ liệu
5) Tiến hành lưu trữ Logging hệ thống 
6) Tiến hành tạo thông báo hồi đáp 
......


Như ví dụ trên thì các bạn thấy rằng một Service có thể tương tác với một hoặc mỗi chuỗi các nghiệp vụ các Model khác nhau, chứ không chỉ một Service là đi theo một Model cụ thể nào. 

>Trong bài thực hành mình có áp dụng cả Service trong đó, tuy nhiên vì nó đơn giản và không chứa nghiệp vụ nên có thể các bạn không nhìn ra lợi ích của nó, tuy nhiên đó là một mô hình đáng để làm theo, và sẽ có ích trong các bài học sau. Khi mà mình bắt đầu đi sâu vào các rằng buộc trên nghiệp vụ.

### 4.3 Cấu trúc thư mục bài thực hành 

Bài thực hành có cấu trúc thư mục như sau 

```markup
.
├── app
│   ├── controllers
│   │   ├── author.server.controller.js
│   │   ├── core.server.controller.js
│   │   └── index.js
│   ├── errors
│   │   ├── BaseError.js
│   │   ├── InvalidParamError.js
│   │   └── NotFoundError.js
│   ├── models
│   │   ├── author.server.model.js
│   │   ├── index.js
│   │   └── post.server.model.js
│   ├── routes
│   │   ├── author.server.routes.js
│   │   ├── core.server.routes.js
│   │   └── index.js
│   ├── services
│   │   ├── author.server.service.js
│   │   ├── index.js
│   │   └── post.server.service.js
│   └── views
│       ├── about.server.view.html
│       ├── author
│       │   ├── posts.server.view.html
│       │   └── view.server.view.html
│       ├── error.server.view.html
│       └── home.server.view.html
├── config
│   ├── env
│   └── lib
├── public
│   ├── css
│   ├── images
│   └── js
├── README.md
└── server.js
```

Trong đó, gần giống bài học trước, chỉ có thêm thư mục **errors** mình dùng để lưu các đối tượng Error để giúp cho việc xử lý lỗi trong ứng dụng trong sáng và rõ ràng hơn.


### 4.4 Định nghĩa phần Route cho Author 


Trong file **/app/routes/author.server.routes.js** . Mình dùng kỹ thuật express.Router để tạo một module routes như sau.

```javascript 
/**
* @author Quyen Nguyen Huu
* @module routes
* @name   author.server.routes
*/
"user strict";

let router = require('express').Router();
let AuthorCtrl = require('../controllers').Author;

// Resolve route params
router.param('author', AuthorCtrl.findOne);

// Public routes
router.route('/:author([a-zA-Z0-9.\-_]{8,30})')
.get(AuthorCtrl.renderAuthorPage);

router.route('/:author([a-zA-Z0-9.\-_]{8,30})/posts')
.get(AuthorCtrl.renderAuthorPostsPage);

module.exports = router;
``` 

Sau đó tại **/app/routes/index.js**. Mình gọi nó ra và gắn vào đường dẫn /author như sau 


```javascript
/**
* @author Quyen Nguyen Huu
* @module routes
* @description
* Active all routes of application and simple handle error.
*/
"user strict";

let router = require('express').Router();

// Application routes
router.use('/', require('./core.server.routes'));
router.use('/author', require('./author.server.routes'));

module.exports = router;

```

Và cuối cùng tại file **server.js** mình gắn toàn bộ application routes vào HTTP server như sau.


```javascript 
"use strict";

const express = require('express');
const app = express();
const port = 3000;
let hbs = require('express-hbs');

// Do Registration routes.
app.use(require('./app/routes'));

.....

```


Như vậy là xong phần đăng ký routes cho ứng dụng.


Tiếp đến mình sẽ xét đến phần Controller.

### 4.5 Định nghĩa phần Contrller cho Author 

Tại file **/app/controllers/author.server.controller.js** các bạn gõ vào đoạn code như sau.

```javascript
/**
* @author Nguyen Huu Quyen
* @module controller
* @name author.server.controller
*/
"use strict";

let Services = require('../services');
let AuthorService = Services.Author;
let PostService = Services.Post;

module.exports = {
  findOne : findAuthorByUsernameOrId,
  renderAuthorPage : renderAuthorPage,
  renderAuthorPostsPage : renderAuthorPostsPage
};

/**
* @name renderAuthorPage
* @description
* Render HTTP page for view author information.
*
* @param  {object} req        HTTP request
* @param  {object} req.author Author selected.
* @param  {object} res        HTTP response
*/
function renderAuthorPage(req, res) {
  res.render('author/view', {
    author : req.author
  });
}

/**
* @name renderAuthorPostsPage
* @description
* Render HTTP page list all posts of selected author.
*
* @param  {object} req        HTTP request
* @param  {object} req.author Author selected.
* @param  {object} res        HTTP response
* @param  {object} next              Next middleware
*/
function renderAuthorPostsPage(req, res, next) {
  PostService.findPostsByAuthor(req.author.id).then(_posts => {
    res.render('author/posts', {
      author : req.author,
      posts : _posts
    });
  })
  .catch(err => next(err));
}

/**
* @name findAuthorByUsernameOrId
* @description
* Populate author data to HTTP request.
*
* @param  {object} req               HTTP request.
* @param  {object} res               HTTP response.
* @param  {object} next              Next middleware
* @param  {object} author           Author id or username.
*/
function findAuthorByUsernameOrId(req, res, next, author) {
  AuthorService.findByUsernameOrId(author)
  .then(_author => {
    req.author = _author;
    return next();
  })
  .catch(err => next(err));
}
```

Để ý một phần code nhỏ trong đó 

```javascript 
/**
* @name renderAuthorPostsPage
* @description
* Render HTTP page list all posts of selected author.
*
* @param  {object} req        HTTP request
* @param  {object} req.author Author selected.
* @param  {object} res        HTTP response
* @param  {object} next              Next middleware
*/
function renderAuthorPostsPage(req, res, next) {
  PostService.findPostsByAuthor(req.author.id).then(_posts => {
    res.render('author/posts', {
      author : req.author,
      posts : _posts
    });
  })
  .catch(err => next(err));
}
```

Ở đây mình sẽ gọi PostService, với dữ liệu vào là author ID để lấy ra toàn bộ posts của tác giả đấy. Sau khi lấy được xong thì mình sẽ gửi trả ngược dữ liệu về. Và Controller nhận dữ llệu ấy và Render lên trang View author.posts phù hợp.


### 4.6 Định nghĩa phần Service cho Author 

Trong file **/app/services/author.server.service.js** bạn sẽ thấy đoạn mã sau.


```javascript 
/**
* @module services
* @author Quyen Nguyen Huu
* @name author.server.service
*/
"use strict";

let Author = require('../models').Author;

module.exports = {
  findByUsernameOrId : findByUsernameOrId,
  getAllAuthors : getAllAuthors
};

/**
* @name findByUsernameOrId
* @description
* Find one author by username or id.
*
* @param  {string} _param     Username or Id of author.
* @return {promise.<object>}  Author object.
*/
function findByUsernameOrId(_param) {
  // TODO: More business logic code here.
  return Author.findOne(_param);
}

/**
* @name getAllAuthors
* @description
* Get all authors in database
*
* @return {promise.<array>}  Authors.
*/
function getAllAuthors() {
  // TODO: More business logic code here.
  return Author.getAll();
}
```

Nó chủ yếu là gọi đến Author Model để lấy và truy xuất dữ liệu.


### 4.6 Định nghĩa phần Model cho Author

Cuối cùng là phần 


```javascript
/**
* @author Quyen Nguyen Huu
* @module models
* @name   author.server.model
*/
"user strict";

let NotFoundError = require('../errors/NotFoundError');
let authors = [
  {
    id : '1111',
    fullName : 'Author A',
    username : 'author_a'
  },
  {
    id : '1112',
    fullName : 'Author B',
    username : 'author_b'
  }
];

module.exports = {
  findOne : findOne,
  getAll : getAll
};

/**
* @name getAll
* @description
* Get all authors.
*
* @return {promise.<array>} List of authors.
*/
function getAll() {
  return new Promise((resolve, reject) => {
    resolve(authors);
  });
}

/**
* @name findOne
* @description
* Find one author by username or id.
*
* @param  {string} _id        username or id
* @return {promose.<object>} Author object.
*/
function findOne(_id) {
  return new Promise(( resolve, reject ) => {
    for(i in authors) {
      if(authors[i].id === _id || authors[i].username === _id) {
        return resolve(authors[i]);
      }
    }

    reject(new NotFoundError(`Not found author with id or user name equal ${_id}`));
  });
}
```

trong này mình không sử dụng cơ sở dữ liệu , nên lưu trong một biến global. Kế đó mình đơn giản là định nghĩa ra một vài method tương tác với biến dữ liệu Global đó để trả dữ liệu về.

**Lưu ý**

Tất cả các hàm mình đều dùng Promise vì trong thực tế khi sử dụng cơ sở dữ liệu, mọi thứ đều có độ trễ. Nên dù chỉ là một ví dụ nhỏ trong bài thực hành, mình đều muốn nó gắn liền với hiện thực.


### 4.7 Xử lý lỗi trên route

Các bạn dễ ý trong file **/app/routes/index.js** . Mình có thêm một đoạn code sau. Đoạn code này là áp dụng tính chất của **middleware** trong Express.js để thực hiện. Trong đó middleware xử lý lỗi sẽ nằm ở cuối cùng trong một chuỗi các middleware. 

Vì ý tưởng chủ đạo là dựa vào nguyên tắc nếu tại một middleware xử lý nào đó mà không có lỗi gì xảy ra thì sẽ ngắt luôn tại vị trí đó, còn nếu có lỗi thì sẽ ném lên middleware tiếp theo. Và như vậy sẽ định nghĩa một middleware cuối cùng bắt tất cả lỗi đó.


```javascript
// catch 404 and forward to error handler
router.use((req, res, next) => {
  const err = new NotFoundError('Page not found');
  return next(err);
});


// Error handle
router.use(function(err, req, res, next) {
  const _status = err.status || 500;
  res.status(_status);
  res.render('error', {
    message: err.message,
    status : _status
  });
});
```


## 5. Kết luận bài học

Qua bài học này, mình đã giới thiệu cho tất cả các bạn các kỹ thuật cơ bản và cả nâng cao của Routing. Kèm theo đó là một bài thực hành rất khó và bám sát với thực tế lập trình.

Mình chắc chắn sẽ có một bài viết hướng dẫn thực hành cho bài viết này. Tuy nhiên mình cũng muốn các bạn nắm rõ các kiến thức sau.

1) Hiểu rõ về Routing và các định nghĩa của nó. 
2) Biết được Express cung cấp cho ta những tính năng gì để hỗ trợ cho việc Routing.
3) Nắm được ý tưởng về mô hình MVC.
4) Thấy được kiến trúc thực tế của một trang website xây dựng theo mô hình MVC.



## 6 Bài tập về nhà 

1) Các bạn cố gắng tải mã nguồn bài học trên về tìm hiểu và chạy thử. Cách chạy vẫn giống như mọi khi `node server`. 

2) Thử làm một số route đơn giản như những bài học trước để trả về nội dung cho trang view, áp dụng kỹ thuật express.Router để module hóa routes.


Mã nguồn của bài học mình để ở Github theo link sau [Socis-blog-v2 Github](https://github.com/nghuuquyen/sociss-class-nodejs/tree/master/src/sociss-blog-v2)


# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)





