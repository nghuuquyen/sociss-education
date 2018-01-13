# Lab 7 - Demo Sử dụng thư viện JQuery

JQuery là một bộ thư viện giúp làm việc với HTML DOM cực kỳ hiệu quả. Danh sách
các tính năng mà JQuery hỗ trợ thì cũng gần giống với HTML DOM tuy nhiên việc thao
tác sẽ vô cùng tiện lợi. Bên cạch đó JQuery còn hỗ trợ thêm một thứ mà khi làm trực
tiếp với HTML DOM chúng ta sẽ tốn rất nhiều thời gian, đó là Animation (hiệu ứng).

Nào chúng ta cũng lướt qua xem JQuery hỗ trợ như thế nào nhé.

#### 1. Chọn phần tử có cấu trúc phức tạp

Khi làm việc thuần với HTML DOM thì khi muốn chọn phần tử con của phần tử nào
đó các bạn phải phối hợp `getElement` và `children` nhiều lần, việc này sẽ dẫn
đến vất vả khi bảo trì hay gặp thay đổi.

Với JQuery thì đơn giản hơn nhiều.

Giả sử bạn có cấu trúc HTML như sau

```html
<ul>
  <li>Section 1</li>
  <li>Section 2</li>
  <li>
    <ul>
      <li>Section 2.1</li>
      <li>Section 2.2</li>
      <li>Section 2.3</li>
    </ul>
  </li>
  <li>Section 4</li>
</ul>
```

Bạn muốn chọn và thay đổi CSS cho các phần tử

```html
<ul>
  <li>Section 2.1</li>
  <li>Section 2.2</li>
  <li>Section 2.3</li>
</ul>
```

Thì trong JQuery chỉ đơn giản bằng lệnh sau

```javascript
$("ul li").has("ul").addClass("highlight");
```

#### 2. Gắn trình sử lý sự kiện vào phần tử

Với cơ chế chọn đơn giản như ví dụ trên, thì việc gán trình xử lý sự kiện lên
các phần tử lại càng đơn giản.

Ví dụ bạn muốn thay đổi màu tất cả thẻ `p` khi đưa chuột hover lên trên thì làm
như sau.

```javascript
$("p").mouseenter(function(){
  $(this).addClass("highlight");
});

$("p").mouseleave(function(){
  $(this).removeClass("highlight");
});
```

Mã lệnh rất trong sáng và dễ hiểu đúng không nào.


#### 3. Hiệu ứng (Animation)

Với JQuery thì tạo hiệu ứng cho phần tử cực kỳ đơn giản, thậm chí là khi bạn muốn
tạo ra một chuỗi hiệu ứng.


Ví dụ bạn muốn tạo ra hiệu ứng fade-in, fade-out cho các thẻ p thì làm như sau

```javascript
// Fadeing out displayed paragraphs.
$(".out-btn").click(function(){
  $(".fade-animate p").fadeOut();
});

// Fading in hidden paragraphs.
$(".in-btn").click(function(){
  $(".fade-animate p").fadeIn();
});
```

Tương tục như vậy cho hiệu ứng slide-down, slide-up.

```javascript
// Slide up displayed paragraphs.
$(".up-btn").click(function(){
  $(".slide-animate > p").slideUp();
});

// Slide down hidden paragraphs.
$(".down-btn").click(function(){
  $(".slide-animate p").slideDown();
});
```


Thậm chí nếu các bạn muốn một chuỗi hiệu ứng liên hoàn, thì cũng đơn giản như sau


```javascript
// Multiple animations.
$("button#animate").click(function(){
  $(".box")
  .animate({ width: "600px" })
  .animate({ height: "300px" })
  .animate({ marginLeft: "150px" })
  .animate({ borderWidth: "10px" })
  .animate({ fontSize: "46px" })
  .animate({ opacity: 0.8 });
});
```

Với giả sử ban đầu CSS cho .box là như sau

```css
.box{
  width: 100px;
  height: 100px;
  background: #9d7ede;
  margin-top: 30px;
  border-style: solid; /* Required to animate border width */
  border-color: #6f40ce;
}
```

Câu lệnh trên làm cho phần tử có class là .box sẽ có chuỗi hiệu ứng như sau.

1) Tăng width lên đến 600px.
2) Tăng height lên đến 300px.
3) Tăng margin-left lên 150px.
4) Tăng kích thước font chữ lên 46px.
5) Giảm độ trong xuống còn 80%.

Để tìm hiểu được thêm nhiều cách dùng khác ứng với các tính năng của JQuery,
các bạn có thể đọc [thêm tại đây](https://www.tutorialrepublic.com/jquery-examples.php)
