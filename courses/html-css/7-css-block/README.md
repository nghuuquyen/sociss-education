# Tìm hiểu về  Inline (nội tuyến) và Block (khối)


Block, inline và inline-block bản chất là khái niệm chỉ định cách phần tử HTML được hiển thị ra màn hình.

![Demo cách hiển thị block, inline,inline-block](./images/block-inline-inline-block.png)


## 1. Block (phần tử khối) là gì?

Phần tử khối (Block Elements) là thuật ngữ chỉ chung các thẻ HTML có chức năng tạo một một khối. Các khối này sẽ hiển thị theo từng dòng riêng biệt.

một số thẻ block cơ bản như div, p, ul, ol, h1 , ...

**Ví dụ** bạn biết rằng ký tự là dạng inline, nên nó sẽ hiển thị trên một dòng, tuy nhiên nếu bạn muốn tách biệt ra thành từng đoạn văn bản khác nhau. Thì hay bọc các ký tự ấy trong thẻ `p`. Vì thẻ p dạng block nên khi hiển thị nó sẽ tách ra thành từng dòng riêng biệt.


**Đặc điểm**

1) Có thể xác định thông số lề  margins và vùng đệm padding
2) Có thể áp dụng được thuộc tính width and height.
3) Không thể sử dụng thuộc tính vertical-align
4) Chiều ngang (width) mặc định của block là 100% chiều ngang của phần tử cha chưa block.
5) Chiều cao (height) mặc định của block là chiều cao của phần tử chứa trong block đó.

Hay nói đơn giản, block đáp ứng đầy đủ kỹ thuật box model.

## 2. Inline (phần tử nội tuyến) là gì?

Phần tử nội dòng (Inline Elements) là thuật ngữ chỉ chung các thẻ HTML khi mà khai báo vào nội dung thì nó vẫn sẽ nằm chung một dòng với các văn bản khác mà không bị tách dòng. Thường được sử dụng cho phần tử dạng text.

Bạn có thể hình dung, Ký tự là dạng inline. Nên các ký tự liền kề nhau vẫn ở chung một dòng, và chỉ ngắt dòng khi nó chạm vào phần lề mà thôi, hay gọi đó là hết không gian.

Một số thẻ inline rất hay dùng đó là `b, strong, i, u`. Và đặc biệt là `span` nếu bạn cần gộp nhóm các phần tử nào đó mà không ảnh hưởng đến các văn bản chung một hàng.

**Đặc điểm**

1) Luôn nằm trên một dòng chữ hay nội dung, không có thuộc tính mặc định clear
2) Sử dụng thuộc tính white-space như text trong CSS.
3) Không áp dụng được thuộc tính margin-top và margin-bottom, nhưng vẫn áp dụng được margin-left , margin-right và đầy đủ thuộc tính padding.
4) Không áp dụng được thuộc tính width and height.
5) Nếu sử dụng thuộc tính float, các phần tử inline sẽ tự động trở thành block-level.
6) Sử dụng thuộc vertical-align như text trong CSS.


Hiểu một cách đơn giản nhất, các phần tử thuộc inline được CSS xem như các ký tự hoặc cụm chữ, do đó nó luôn nối tiếp trên một dòng nếu đặt cạnh nhau.


## 3. Inline-block là gì ?

Đây là dạng đặc biệt, nó thừa hưởng cả đặc điểm của block và inline. Tuy nhiên không có một phần tử HTML nào mặc định ở dạng này cả.

**inline-block chỉ hơn block một đặc điểm** đó là có thể  Sử dụng thuộc vertical-align như text trong CSS.

Nếu áp dụng `inline-block` cho phần tử `block` thì sẽ đưa phần tử đó về dạng có chứa đặc điểm của inline, tức là các phần tử kề sát nhau sẽ hiển thị trên một dòng nếu đủ không gian. Giống như chữ viết văn bản sẽ tự xuống dòng nếu chạm vào lề vậy.



**Ví dụ**: Demo cả ba dạng, block, inline và inline-block.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Block, inline, inline-block Demo</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="container">
    <b>container</b>
    <div class="block">
      <b>block</b>
    </div>
    <div class="block">
      <b>block</b>
    </div>

    <div class="inline-block">inline-block</div>
    <div class="inline-block">inline-block</div>
    <div class="inline-block">inline-block</div>
    <div class="inline-block">inline-block</div>

    <p>
      Lorem ipsum dolor sit amet<div class="inline-block">inline-block</div>consectetur adipisicing elit,
      sed do eiusmod <span class="inline">inline</span>tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, <span class="inline">inline</span>quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.<div class="inline-block">inline-block</div>Duis aute irure dolor
    </p>


  </div>

  <div class="container">
    <div class="block" style="height: 200px;">
      I AM BLOCK
    </div>
  </div>
</body>
</html>
```

Và code CSS

```css
body {
  background-color: #000;
}

.container {
  width: 100%;
  background-color: aqua;
}

.block {
  display: block;
  background-color: chocolate;
  height: 50px;
  margin: 5px;
}

.inline-block {
  display: inline-block;
  background-color: darkcyan;
  height: 30px;
  margin: 5px;
}

.inline {
  background-color: darkorange;

  /* This no effect for inline element */
  height: 30px;
  margin: 5px;
  /*************************************/
}
```

Trong thiết kế website thì hầu hết các trình bày các phần tử ra màn hình đều rơi vào hai dạng này.

![Demo wireframe](./images/wireframes.gif)


## 4. Khi nào dùng inline-block ?

Mình nêu một số ví dụ mà mình hay gặp trong thực tế ra nhé.

**1) Bạn muốn áp dụng kỹ thuật box model trực tiếp cho một đoạn text.**

Đây là trường hợp bạn muốn trực tiếp margin hoặc padding trên thẻ p hoặc span.

**Lưu ý** : Để margin hoặc padding cho một đoạn text thì một cách an toàn khác là dùng một thẻ div bọc ngoài rồi thiết lập padding hoặc margin.

```html
<div class="post-content">
  <p>Content ......</p>
</div>
```

**2) Bạn muốn thu gọn chiều ngang của môt khối block.**

Ví dụ bạn muốn chèn một icon theo sau thẻ h1 chẳng hạn. Lúc này bạn phải chuyển h1 về dạng inline-block và không định nghĩa width, kiểu inline-block sẽ tự đặt width khớp với nội dung bên trong.

**Lưu ý** Các bạn có thể thiết lập width cho thẻ h1 khi và chỉ khi các bạn biết chính xác độ dài của nội dung, nếu không thì khi đặt cứng width có thể gây mất chữ.

**3) Bạn muốn các phần tử block chuyển thành hiển thị trên một dòng.**

Cái này ứng dụng khi các bạn muốn làm một danh sách dạng lưới (grid) để hiển thị ảnh chẳng hạn.

![Demo inline block in one row]('./images/inline-block-demo.png')


```html
<div class="item">
  <p>
    Item 1
  </p>
</div>

<div class="item">
  <p>
    Item 2
  </p>
</div>

<div class="item">
  <p>
    Item 3
  </p>
</div>
```

Và CSS

```css
.item {
  background-color: lightgray;
  width: 100px;
  height: 100px;
  border: 5px solid #000;
  display : inline-block;
  margin: 10px;
}
```



# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
