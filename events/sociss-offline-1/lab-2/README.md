# Lab 2 - Làm quen với HTML DOM

HTML DOM là một thư viện trong Javascript sử dụng để tương tác với HTML, để nắm được cách dùng HTML DOM các bạn chỉ cần nắm được 3 tình huống sử dụng dưới đây.

### 1) Tạo và chỉnh sửa nội dung phần tử HTML

Để tạo ra một phần tử HTML trong Javascript các bạn có thể làm đơn giản như sau


```javascript
function createPTags() {
  var p = document.createElement("p");
  p.style.padding = '20px';
  p.style.background = '#f2f2f2';

  p.innerHTML = 'P tag content';

  document.body.appendChild(p);
}
```

Đoạn mã trên sẽ tạo mới một thẻ `p`, thiết lập CSS cho thẻ `p` đó, ngoài ra chúng ta còn thể thiết lập nội dung bên trong thẻ `p` bằng cách thiết lập nội dung cho thuộc tính `innerHTML`.

Các bạn để ý là không chỉ giới hạn là nội dung chuỗi bình thường, các bạn còn có thể bỏ vào đó mã lệnh HTML. Ví dụ

```js
p.innerHTML = '<h1>P tag content</h1>';
```

Kết quả sẽ là một thẻ `h1` bên trong thẻ `p`.

Các bạn có thể chạy thử đoạn mã trên bằng ví dụ dưới đây, hay tạo ra tệp `index.html` copy nội dung dưới đây vào đó và chạy thử bằng trình duyệt.


```html
<!DOCTYPE html>
<html>
<body>
  <p>Nhấp để tạo mới thẻ P</p>

  <button onclick="createPTags()">Tạo thẻ P</button>

  <script>
  function createPTags() {
    var p = document.createElement("p");
    p.style.padding = '20px';
    p.style.background = '#f2f2f2';

    p.innerHTML = 'P tag content';

    document.body.appendChild(p);
  }
  </script>

</body>
</html>
```

### 2) Gán các trình xử lý sự kiện lên phần tử HTML

Trong HTML DOM hỗ trợ rất nhiều loại sự kiện và phần thành từng loại tác nhân khác nhau như chuột, bàn phím, khung trang, máy in, ...

Mình sẽ ví dụ thử với sự kiện dùng nhiều nhất đó là `nhấp chuột` lên phần tử.

Thì có hai cách để các bạn làm điều này

**1. Gán trực tiếp lên phần tử ở mã HTML**

```html
<button id="my-button" onclick="createPTags()">Tạo thẻ P</button>
```

**2. Gán trong Javascript**

Các bạn có thể làm như thế này

Cách 1.
```javascript
var btn = document.getElementById("my-button");

btn.onclick = function createPTags(event) {
  // ...
};
```

hoặc như thế này

Cách 2.
```javascript
var btn = document.getElementById("my-button");

btn.addEventListener("click", function createPTags(event) {
  // ...
});
```

Các bạn để ý là không phải là `onclick` mà cách số 2 chỉ là `click`. Vì khi dùng với `addEventListener` thì tên sự kiện không có từ khóa `on`.


Cách số 2 có lợi thế đó là bạn có thể thêm nhiều trình xử lý khác nhau cho cùng một sự kiện trên phần tử còn cách 1 thì không.

Ví dụ

```javascript
var btn = document.getElementById("my-button");

btn.addEventListener("click", function createPTags(event) {
  // ... Create P tag ...
});

btn.addEventListener("click", function updateSomething(event) {
  // ... Do something ...
});
```

Để biết nhiều tên và trường hợp sử dụng cho từng sự kiện các bạn có thể tra ở đây

[Danh sách các sự kiện trong HTML DOM](https://www.w3schools.com/jsref/dom_obj_event.asp)
