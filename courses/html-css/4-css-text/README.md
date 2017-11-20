
Trong bài học lần này mình sẽ giới thiệu về các kỹ thuật định dạng CSS cho text (Chữ) thường dùng. Nội dung bao gồm:

1) Màu chữ
2) Canh chỉnh
3) Gạch chân chữ
4) Thụt đầu dòng
5) Căn đều dòng
6) Xử lý tràn chữ
7) Chữ hoa, chữ thường
8) Xuống dòng

# 1. Màu chữ

Trong CSS 3 thì màu sắc có thể sử dụng nhiều bảng màu khác nhau như RGB, RGBA, HSL và HSLA. Tuy nhiên đối với website thì màu RGB là thông dụng nhất.

Trong CSS để định dạng màu chữ rất đơn giản bạn chỉ cần dùng thuộc tính `color` với value (giá trị) là giá trị là mã màu bạn muốn dùng.

Ví dụ thiêt lập màu sắc cho các thẻ h1, h2, h3

```css
h1 {
  color : #FFFFFF;
}

h2 {
  color : rgb(255, 255, 255);
}

h3 {
  color : rgba(255, 255, 255, 1);
}
```

Tong đó #FFFFFF là màu trắng ở dạng HEX, đây là kiểu định dạng màu thông dụng nhất, kế theo đó là `rgb` và cuối cùng là `rgba` với tham số cuối cùng là độ trong (opacity) với giá trị từ 0.0 (trong suốt hoàn toàn) đến 1.0 (đục hoàn toàn).

HSL và HSLA mình thấy ít gặp trong phát triển website. Các bạn có thể tự tìm hiểu thêm nếu cần thiết.


# 2. Canh chỉnh

Như trong soạn thảo văn bản, chữ luôn có trạng thái là căn trái, phải hay là căn giữa. Để làm được vậy trong CSS chúng ta sẽ sử dụng thuộc tính `text-align`


```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```

# 3. Gạch chân chữ

Để điều chỉnh việc gạch chân chữ, ví dụ thẻ a cho một liên kết chẳng hạn có thể dùng thuộc tính `text-decoration`.

Để điều chỉnh màu và kiểu đường thẳng bạn có thể dùng thêm hai thuộc tính `text-decoration-color` và `text-decoration-style`.

```css
h1 {
  text-decoration: overline;
}

h2 {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
}

h4 {
  text-decoration: overline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

# 4. Thụt đầu dòng

để điều chỉnh khoảng cách thụt đầu dòng của dòng đầu tiên trong một đoạn văn bản bạn sẽ sử dụng thuộc tính `text-indent`.


Ví dụ mình muốn thụt đầu dòng 20px cho tất cả các thẻ p

```css
p {
  text-indent: 20px;
}
```

# 5. Căn đều dòng

Ai mà làm việc nhiều với word thì sẽ luôn dùng cái này. Căn ngang sẽ giúp chiều ngang các dòng của văn bản đều nhau. Để căn đều bạn dùng thiết lập như sau

```css
p {
  text-align: justify;
}
```

# 6. Xử lý tràn chữ

Đây là kỹ thuật gặp thường xuyên khi mà không gian dành cho việc hiện chữ có hạn mà chữ lại quá nhiều, lúc này bạn sẽ thiết lập việc xử lý khi việc tràn chữ xảy ra.


Ví dụ mình thiết lập khi tràn chữ cho class post-title là `text-overflow: ellipsis` có nghĩa là sẽ hiện dấu 3 chấm.


```css
.post-title {
  width: 200px;
  text-overflow: ellipsis;
}
```

# 7. Chữ hoa, chữ thường

Để điều chỉnh chữ viết hoa hay thường chúng ta có thể sử dụng thuộc tính `text-transform` nhận một trong ba giá trị dưới đây:

1) **uppercase** Viết hoa
2) **lowercase** Viết thường
3) **capitalize** Để nguyên chữ gốc

```css
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```


# 8. Xuống dòng

Trong CSS việc xuống dòng đoạn văn bản phải được chú trọng, vì trong cái dòng tiêu đề thường thì sẽ rất dài, nếu không thiết lập xuống dòng có thể dẫn đến tràn chữ và bể layout.


để thiết lập trạng thái xuống dòng khi chữ bị tràn vùng chứa có thể dùng thuộc tính `word-wrap` kèm với thuộc tính `word-break` để chỉ định kiểu xuống dòng mình mong muốn.

với `word-wrap` xác định có xuống dòng hay không. còn `work-break` xác định kiểu xuống dòng.

**word-wrap** nhận hai giá trị là `break-word` ngắt từ và `unset` có nghĩa là không thiết lập, tùy cho trình duyệt.

**work-break** nhận hai giá trị là `break-word` có nghĩa là xuống dòng theo từng, còn `break-all` là xuống dòng ngay tại vị trí tràn. Thường thì chúng ra dùng `break-word` nhiều hơn nếu là văn bản bình thường, còn `break-all` thường chỉ dùng cho số nếu có.


Ví dụ:

```css
p.post-content-1 {
  word-break: keep-all;
}

p.post-content-2 {
  word-break: break-all;
}
```



# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
