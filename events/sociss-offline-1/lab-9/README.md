# Lab 9 - Thử nghiệm sử dụng Sass

Khi viết thuần CSS, thì bản thân CSS cũng sẽ dần có những hạn chế của nó khi ứng dụng ngày càng lớn dần lên, thì những thay đổi trong CSS có thể là ác mộng. Thứ hai trong lập trình thì nhu cầu sử dụng lại mã nguồn là rất cao, hoặc module hóa code để dễ quản lý tổ chức.

CSS Preprocessing là nhưng công cụ cung cấp cho chúng ta một ngôn ngữ mở rộng của CSS mà trên phần mở rộng này, chúng ta có thể sử dụng biến, function, thực hiện tính toán số học, module hóa code, kế thừa, ...

Rồi sau đó CSS Preprocessing có trách nhiệm biên dịch phần mã lệnh mở rộng này thành mã lệnh CSS thuần túy.

Trong buổi offline này mình sẽ giới thiệu các bạn sử dụng công cụ Sass. Phần nàu chỉ tập trung vào Demo một số tính năng cơ bản. Trong cái bài viết khác nằm trong khóa học HTML & CSS mình sẽ đề cập sâu hơn vào Sass.


#### Công cụ hỗ trợ

Để nhanh gọn trong buổi offline mình sẽ sử dụng công cụ online sau

https://www.sassmeister.com/

Các bạn có thể mở lên bằng trình duyệt và chúng ta sẽ bắt đầu sử dụng thôi.

Các bạn lưu ý là Sass có hai cách viết code là SCSS (phần mở rộng .scss) và Sass (phần mở rộng .sass)

Thì cách viết SCSS sẽ rất giống với cách các bạn viết mã CSS bình thường, nên mình sẽ dùng và cũng rất thích dùng cách viết SCSS.

Trong khi đó cách viết dạng Sass với tệp tin được lưu với phần mở rộng là .sass sẽ như sau

```sass
p
  font-size: 1em
```

Cách viết Sass thì không dùng cặp dấu ngoặc nhọn { ... } và cũng không có dấu chấm phẩy cuối dòng `;`.


#### Thử nghiệm SCSS

Các bạn hãy copy đoạn mã dưới đây và dán vào ô bên trái của công cụ `sassmeister`.
Và sau đó các bạn sẽ thấy mã lệnh CSS được sinh ra ở cột bên phải.


Mã lệnh SCSS

```scss
$color-background-page: #E7E7E7;
$color-background-header: #E5E5E5;
$color-text: #000000;
$font-page: 'Arial';
$header-height: 200px;
$theme: 'light' !default;

.page {
  background-color : $color-background-page;
  color: $color-text;
  font-family: $font-page;

  a {
    @if ($theme == 'dark') {
      color: white;
    }

    @if ($theme == 'light') {
      color: black;
    }
  }

  .page-header {
    padding: 15px;
    height: $header-height;
    background-color: $color-background-header;
  }

  .page-footer {
    padding: 15px;
    height: $header-height + 100px;
    background-color: $color-background-header;
  }

  @for $i from 1 through 6 {
    .card:nth-child(#{$i}) .card-brand-color {
      background-color: hsl(random(360),100%,50%);
    }
  }
}
```

Đầu tiên các để ý các dòng đầu chính là **khai báo biến**.

```scss
$color-background-page: #E7E7E7;
$color-background-header: #E5E5E5;
$color-text: #000000;
$font-page: 'Arial';
$header-height: 200px;
$theme: 'light' !default;
```

Định nghĩa biến như thế này, rất tiện cho các bạn khi muốn thay đổi vể sau, chỉ cần chỉnh sửa một nơi, tất cả các vị trí sử dụng biến này cũng thay đổi theo.

Phần tiếp theo chính là viết các **class lồng vào nhau**. Với lối viết như thế này các bạn sẽ dễ dàng module hóa và dễ đọc hơn. Ví dụ khi xưa dùng CSS các bạn muốn viết class `page-header` nằng trong class `page` thì sẽ viết là

```css
.page { ... }
.page .page-header { ... }
```

Thì nay với Sass chỉ cần lồng vào nhau như sau

```scss
.page {
  ...

  .page-header {
    ...
  }
}
```


Phần tiếp theo chính là **điều kiện rẽ nhánh if**

```scss
a {
  @if ($theme == 'dark') {
    color: white;
  }

  @if ($theme == 'light') {
    color: black;
  }
}
```

Ý tưởng đoạn lệnh này là để khi trên tông màu tối thì sẽ để chữ màu trắng, còn khi bạn ở tông màu sáng rồi, thì chữ sẽ màu đen.

Như vậy bạn chỉ cần thay đổi giá trị biến `$theme` thì có thể build ra hai tệp tin CSS với hai themme là light và dark riêng biệt.


**Thực hiện các phép tính toán**

```scss
.page-header {
  padding: 15px;
  height: $header-height;
  background-color: $color-background-header;
}

.page-footer {
  padding: 15px;
  height: $header-height + 100px;
  background-color: $color-background-header;
}
```

Nhìn qua lệnh trên, chúng ta hiểu là yêu cầu footer sẽ luôn cao hơn header 100px.

**vòng lặp và hàm**

```scss
@for $i from 1 through 6 {
  .card:nth-child(#{$i}) .card-brand-color {
    background-color: hsl(random(360),100%,50%);
  }
}
```

Ý tưởng của lệnh trên là sẽ tạo ra các màu ngẫn nhiên ở phần `card-branch` cho 6 phần tử `card`.

Sass hỗ trợ rất nhiều hàm khác nhau, trong đó `random(360)` là một ví dụ sẽ trả về giá trị ngẫu nhiên trong đoạn từ 0 cho đến 360.


Phần demo Sass chỉ đơn giản đến đây, với mục tiêu là để các bạn hiểu được như thế nào là preprocessor CSS. Trong Sass có rất nhiều các kỹ thuật hay khác như Mixin, Extend, Import, Partials cho phép bạn module hóa, kế thừa và sử dụng lại code linh hoạt.

Trong thời gian tới chắc chắn mình sẽ giành thời gian viết bài thật hay về Sass.
