# Tìm hiểu về  Inline (nội tuyến) và Block (khối)


Block, inline và inline-block bản chất là khái niệm chỉ định cách phần tử HTML được hiển thị ra màn hình.

![Demo cách hiển thị block, inline,inline-block](./images/block-inline-inline-block.png)


## Block là gì?

Phần tử khối (Block Elements) là thuật ngữ chỉ chung các thẻ HTML có chức năng tạo một một khối.

một số thẻ block cơ bản như <div>, <p>, <ul>, <ol>, <h1>,…

**Đặc điểm**

1) Có thể xác định thông số lề  margins và vùng đệm padding
2) Có thể áp dụng được thuộc tính width and height.
3) Không thể sử dụng thuộc tính vertical-align

Hay nói đơn giản, block đáp ứng đầy đủ kỹ thuật box model.

## Inline là gì?

Phần tử nội dòng (Inline Elements) là thuật ngữ chỉ chung các thẻ HTML khi mà khai báo vào nội dung thì nó vẫn sẽ nằm chung một dòng với các văn bản khác. Thường được sử dụng cho phần tử dạng text.

Một số thẻ inline rất hay dùng đó là <b>, <strong>, <i>, <u>. Và đặc biệt là <span> nếu bạn cần gộp nhóm các phần tử nào đó mà không ảnh hưởng đến các văn bản chung một hàng, thẻ <span> này có ý nghĩa và cách sử dụng giống như <div> nhưng nó được dùng trong inline.

**Đặc điểm**

1) Luôn nằm trên một dòng chữ hay nội dung, không có thuộc tính mặc định clear
2) Sử dụng thuộc tính white-space như text trong CSS.
3) Không áp dụng được thuộc tính margin-top và margin-bottom, nhưng vẫn áp dụng được margin-left , margin-right và đầy đủ thuộc tính padding.
4) Không áp dụng được thuộc tính width and height.
5) Nếu sử dụng thuộc tính float, các phần tử inline sẽ tự động trở thành block-level.
6) Sử dụng thuộc vertical-align như text trong CSS.


Hiểu một cách đơn giản nhất, các phần tử thuộc inline được CSS xem như các ký tự hoặc cụm chữ, do đó nó luôn nối tiếp trên một dòng nếu đặt cạnh nhau.


## Inline-block là gì ?

Đây là dạng đặc biệt, nó thừa hưởng cả đặc điểm của block và inline. Tuy nhiên không có một phần tử HTML nào mặc định ở dạng này cả.

**inline-block chỉ hơn block ở duy nhất một đặc điểm** đó là có thể `Sử dụng thuộc vertical-align như text trong CSS`.


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

![Demo wireframe](./images/block-inline-inline-block.png)
