Trong bài này mình sẽ giới thiệu cho các bạn cách để khởi tạo một website đơn giản với Node JS.

# 1. Kiến thức cần biết

Để học bài này các bạn nên đọc trước hai bài viết của mình đó là thể nào là một web server và giao thức HTTP là gì.

1) [Giao thức HTTP là gì ? ](https://sociss.edu.vn/courses/nodejs/lesson/giao-thuc-http-la-gi)
2) [Webserver là gì ?](https://sociss.edu.vn/courses/nodejs/lesson/web-server-la-gi)

Nắm hai khái niệm này các bạn sẽ dễ hiểu bài học đầu tiên này hơn.


# 2. Công cụ cần thiết

Các bạn cần cài đặt thành công **Node.js phiên bản v6.11** trở lên  trên máy tính của mình. Thử đoạn lệnh dưới đây để kiểm tra xem mình đã cài thành công chưa nhé.

```sh
node -v
```

Nếu kết quả trả về là version của Node bạn cài đặt thì bạn đã cài thành công nếu không thì bạn hãy xem lại
bài viết hướng dẫn cài đặt môi trường làm việc của mình.

1) [Hướng dẫn cài đặt Node JS](https://sociss.edu.vn/courses/nodejs/lesson/huong-dan-cai-dat-nodejs)
2) [Cài đặt công cụ và thiết lập môi trường thực hành với Node JS](https://sociss.edu.vn/courses/nodejs/lesson/cai-dat-cong-cu-va-thiet-lap-moi-truong-thuc-hanh-voi-node-js)

Sau khi có đủ kiến thức nền cần thiết và công cụ rồi thì chúng ta cùng vào bài học chính nào.

# 3. Nội dung

## 3.1 Khởi tạo một HTTP Server

Đầu tiên sau khi khởi tạo xong một project Node thì bạn tạo một thư mục là **src/simple-website** trong thư mục này bạn tạo file `index.js` trong đó nhập đoạn mã dưới đây vào.

```javascript
"use strict";

let http = require('http');
const port = 3000;

// Step 1: Do create HTTP server.
let server = http.createServer(requestHandler);

// Step 2: Define handle function called each time we request server.
function requestHandler(request, response) {
  const userAgent = request.headers['user-agent'];

  // Print to console your browser information.
  console.log(userAgent);

  if(request.url === '/') {
    return response.end('Hello Node.js Server!');
  }

  if(request.url === '/about') {
    return response.end('This is about page!');
  }

  if(request.url === '/contact') {
    return response.end('This is contact!');
  }
}

// Step 3: Turn on server on port.
server.listen(port, function(err){
  if (err) {
    return console.error('Something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
```

Đoạn mã trên đã khởi tạo một webserver HTTP lắng nghe ở cổng 3000 để tiếp nhận các request.Để ý trong đoạn mã trên mình lấy được thông tin của trình duyệt người dùng qua câu lệnh.

Mở trình duyệt của bạn lên, truy cập vào `127.0.0.1:3000` và xem kết quả. Sau đó lần lượt truy cập vào đường dẫn `127.0.0.1:3000/about` và `127.0.0.1:3000/contact` bạn sẽ thấy nội dung tương ứng.

Có thể thay 127.0.0.1 bằng localhost vẫn chạy được, tuy nhiên bạn có thể reseach thêm một chút để biết sự khác nhau giữa hai cái này nếu cần.


**Giải thích ý nghĩa câu lệnh quan trọng**

Như bạn đã biết trong bài học về giao thức HTTP, với một request tương ứng với một URL cụ thể thì server có nhiệm vụ đáp ứng request đó.

Ở đây `requestHandler` chính là phương thức đáp ứng đó, với mỗi request vào web server thì nó sẽ được gọi để đáp ứng các request.

```javascript
// Step 1: Do create HTTP server.
let server = http.createServer(requestHandler);
```

câu lệnh trên chính là câu lệnh tạo một HTTP webserver với requestHandler tương ứng.

Sau khi tạo xong thì web server vẫn chưa chạy, để chạy được web server chúng ta cần chỉ cho nó một cổng cụ thể để chạy. Vì qua bài học về [web server](https://sociss.edu.vn/courses/nodejs/lesson/web-server-la-gi) các bạn đã biết rằng một web server thật ra là một chương trình chạy ở một cổng cụ thể trên một máy tính.

 ```javascript
// Step 3: Turn on server on port.
server.listen(port, function(err){
  if (err) {
    return console.error('Something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
```

Câu lệnh trên chính là để khởi chạy web server trên cổng 3000 để lắng nghe các request từ client.

Lúc này web server đã chạy ở cổng 3000 rồi, các bạn có thể truy cập đến nó bằng cách mở trình duyệt
và truy cập `127.0.0.1:3000` hoặc `localhost:3000`.

Để ý rằng 127.0.0.1 hoặc localhost lần lượt chính là địa chỉ IP và tên miền của chính máy tính các bạn đang sử dụng, và 3000 chính là sổ cổng chạy dịch vụ web server.

Lúc này đúng theo lý thuyết, web server sẽ tiếp nhận yêu cầu và trả về kết quả.

**Đi sâu hơn vào mã lệnh**

Đây chính là cách lấy phần header trong một gói tin. Ở dưới là mình lấy về thông tin về trình duyệt của người dùng.

```javascript
const userAgent = request.headers['user-agent'];
```

tiếp theo đó là phần xử lý tương ứng với các request vào trên mỗi URL cụ thể.

 ```javascript
if(request.url === '/about') {
    return response.end('This is about page!');
}
```

Ở trên mình sẽ kiểm tra nếu Request URL là `/about` thì sẽ trả về chữ `This is about page!`. Trong trường hợp này vì không định nghĩa sẽ đáp ứng với Method nào nên nó sẽ đáp ứng với mọi method request. Ví dụ mình dùng `curl tool` để tạo một POST request đến URL `/about`

```sh
curl -XPOST "127.0.0.1:3000/about"
This is about page!
```

và kết quả mình nhận được như trên, để có thể xử lý request tương ứng với mỗi URL và Method cụ thể bạn có thể làm như sau, với một chút cải tiến là sẽ so sánh thêm method nữa,

```javascript
"use strict";

let http = require('http');
const port = 3000;

// Step 1: Do create HTTP server.
let server = http.createServer(requestHandler);

/**
* @name when
* @description
* Call handler method correct on path and method request.
*
* @param  {object}   req      HTTP Request
* @param  {object}   res      HTTP Response
* @param  {string}   path     Path
* @param  {string}   method   HTTP method
* @param  {Function} callback handler function
*/
function when(req, res, path, method, callback) {
  if(req.url === path && req.method === method) {
    callback(req, res);
  }
}

// Step 2: Define handle function called each time we request server.
function requestHandler(request, response) {
  const userAgent = request.headers['user-agent'];
  const requestMethod = request.method;

  // Print to console your browser information.
  console.log('User Agent : ' + userAgent);
  console.log('Method :' + requestMethod);

  when(req, res, '/', 'GET', function (req, res) {
    return res.end('Hello Node.js Server!');
  });

  when(req, res, '/about', 'GET', function (req, res) {
    return res.end('This is about page!');
  });

  when(req, res, '/contact', 'GET', function (req, res) {
    return res.end('This is contact page!');
  });
}


// Step 3: Turn on server on port.
server.listen(port, function(err){
  if (err) {
    return console.error('Something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
```

Với cải tiến lại như trên bạn đã có thể xử lý tốt hơn rồi. Và ở trên chính là ví dụ tạo một HTTP server đơn giản để xử lý các request của người dùng.

## 3.2 Về Module HTTP

Như ví dụ ở trên về Module HTTP của Node. Module này có các Class giúp ta thực hiện một số công việc dưới đây.

**1) Tạo ra một HTTP server**

Như là ví dụ ở trên mình dùng `Class: http.Server`

**2) Thực hiện các Request**

Việc này ta dùng `Class: http.ClientRequest`, để thực hiện các request HTTP đến các máy chủ, ví dụ như đoạn mã dưới đây sẽ request đến máy chủ của Sociss Class ở cổng 80. Các bạn tạo ra file mới tên là `HttpRequestDemo.js` rồi điền vào đó đoạn mã dưới đây.

```javascript
const http = require('http');
const options = {
  port: 80,
  method : 'GET',
  hostname: 'sociss.edu.vn'
};

const req = http.request(options);

req.setHeader('Content-Type', 'text/html');

// res is http.IncomingMessage
req.on('response', (res) => {
  // 200 Ok
  console.log(res.statusCode + ' '+ res.statusMessage);
  console.log(res.rawHeaders);
});

// Start request.
req.end();
```

Khi chạy thực hiện đoạn file `HttpRequestDemo.js`, khi đó callback sẽ nhận lại một `http.IncomingMessage`. Là một gói tin HTTP, trong này mình sẽ lấy ra Status Code và phần headers sau đó in giá trị ra console.


**3) Đáp ứng ( Response )**

Đối tượng `response` trong các ví dụ trước đó là `http.ServerResponse`, đối tượng này bạn không tự tạo ra được mà nó sẽ được tạo bởi Node.js. Tuy nhiên khi có đối tượng này rồi thì bạn sẽ có một số hành động thường làm như là thiết lập response headers, body message, ...

```javascript
response.writeHead(200, { 'Content-Type': 'text/plain'});
response.write('DATA NEED TO TRANSFER');
response.end();
```

# 4. Nhận xét và kết luận

Qua bài học trên mình đã giới thiệu cho các bạn cách để tạo một HTTP webserver đơn giản với Module HTTP. Các bạn có thể áp dụng ví dụ trên để xây dựng một webserver đơn giản và nhẹ nhàng (Rất có ích cho các ứng dụng IOT đơn giản), đồng thời cũng giúp bạn hiểu bản chất một HTTP server trực quan hơn.


Tuy nhiên nếu bạn cần xây dựng một website lớn hơn phức tạp hơn thì cách làm với Module HTTP như trên sẽ không hiệu quả.

Thì để khắc phục nhược điểm ấy mình sẽ sử dụng một framework đó là [Express JS](http://expressjs.com/). Đây là một Framework giúp cho việc xây dựng một trang web trở nên đơn giản hơn và nhanh hơn.


Bài tiếp theo mình sẽ hướng dẫn cách xây dựng một trang web tĩnh với Express JS.

# 5. Bài tập

Trước khi có bài học tiếp theo, các bạn hãy làm lại những ví dụ trên và đọc thêm tài liệu về Module HTTP nếu cần theo URL sau [HTTP Module Node.js](https://nodejs.org/api/http.html).


Mã nguồn của bài học này mình để ở Github với URL là [Create Simple HTTP Webserver](https://github.com/nghuuquyen/sociss-class-nodejs/tree/master/src/simple-website)



# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
