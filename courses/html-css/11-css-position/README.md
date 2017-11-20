Trong các bài học lần trước các bạn đã biết về **float** giúp một phần tử trôi dạt theo hướng xác định, **Box model** giúp xác định khoảng các giữa các phần tử với nhau.

Trong bài học lần này mình sẽ trình bày về **position** là kỹ thuật xác định vị trí hiển thị của phần tử.


Trong CSS thuộc tính **position** cho phép xác định vị trí hiển thị phần tử, giá trị nhập vào bao gồm một trong các giá trị dưới đây.

**1) Static**

**2) Fixed**

**3) Relative và absolute**


## 1. Static

Trong CSS thì kiểu static là mặc định, có thể hiểu là không được định vị trí.

Vậy nói đơn giản nếu bạn thiết lập `position : static` cho phần tử thì sẽ chẵng có hiệu ứng gì xảy ra hết, phần tử sẽ hiển thị đúng theo cách nó nên được hiển thị.


## 2. Fixed

Đây là kiểu hiển thị cố định vị trí so với **viewport** có nghĩa là nó luôn luôn ở cùng một vị trí khi cuộn trang. **Viewport** ở đây chính là khung nhìn màn hình của các bạn.


Ví dụ ngay ở trang Sociss Class của mình, hộp chia sẽ được thiết lập `position : fixed` nên nó sẽ vẫn giữ nguyên vị trí khi bạn cuộn trang. Gây cảm giác cho bạn là nó đang trôi theo tuy nhiên thực chất là nó chỉ giữ nguyên vị trí của mình.

Các tham số  `top, right, bottom, left` sẽ xác định khoảng các của phần tử đó đến các cạnh của viewport. Đơn vị có thể là px, em, pt, ...

**Ứng dụng**

+ Thường sử dụng cho header hoặc footer để giữ cho các nút tiện ích cố định mang lại sự tiện dụng cho người dùng.

+ Các quảng cáo ở gốc hoặc các nút tiện ích cầ n sử dụng liên tục.


**Ví dụ 2.1** : Áp dụng position fixed cho header trôi theo khi cuộn trang.


Live Demo: [Ex 2.1 Header position fixed demo](https://jsfiddle.net/nghuuquyen/ab5h73fm/)

```html
<div class="page-wapper">
  <header id="header">
    <nav>
      <a href="/#">Home</a>
      <a href="/#">Contact</a>
    </nav>
  </header>

  <div id="page-content">
    Page content.
  </div>
</div>
```

Mã CSS

```css
/* CSS Reset */

* {
  margin: 0;
}

#header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background: lightgray;
}

#page-content {
  margin-top: 60px;
  height: 500px;
  width: 90%;
  border: 1px solid blue;
  margin-left: auto;
  margin-right: auto;
}
```

Trong ví dụ trên các bạn để ý trong `#page-content` mình có `margin-top: 60px` vì khi một phần tử ở dạng fixed nó sẽ trở nên lơ lửng, và các phần tử khác có thể chui vào bên dưới nó (bị header che mất). Nên giá trị `margin-top: 60px` là để tạo ra một khoảng cách so với header, tránh việc nội dung trang bị che bởi header.



**Lưu ý khi sử dụng position fixed**

Position Fixed không hiển thị tốt cho tất cả các dòng máy khác hoặc trên các trình duyệt đời cũ. Nên bạn phải cân nhắc khi sử dụng tính năng này nếu bạn muốn website của bạn chạy tốt ở những loại máy tầm 5 hay 6 năm về trước nhé.


Bạn có thể đọc qua bài viết này [Mobile fixed position problem and solution](http://bradfrost.com/blog/mobile/fixed-position/)


**Mình sẽ tóm tắt nội dung như sau**

+ Trên các trình duyệt cũ hoặc trên các dòng máy đời cũ thì postion: fixed hoặc động không ổn định, khá chậm có dòng máy thì không chạy được hoặc yêu cầu phải tắt chế độ phóng (Zoom).

+ Nếu bạn thiết lập cho phép Zoom (dùng hai ngón tay thu nhỏ hoặc phóng to màn hình) thì postion: fixed sẽ không hoạt động nữa.

+ Giải pháp cho vấn đề trên thì người ta đề xuất dùng thêm Javascript để kiểm tra và hỗ trợ.


## 3. Relative và Absolute

Đây là hai giá trị position riêng biệt nhưng chỉ phát huy hiệu quả nếu đi cặp với nhau.

 **Relative và Absolute** giải quyết bài toán yêu cầu bạn xác định vị trí của phần tử B nhưng lại phải căn cứ theo vị trí của phần tử A.

 Lúc này phần tử B sẽ có kiểu vị trí là `Absolute` còn phần tử A sẽ là `Relative`. **Và yêu cầu ở đây là phần tử B phải là con của A (Ở bên trong)**.

**Kết luận :** Phần tử có kiểu position là `Absolute` sẽ có vị trí xác định dựa vào trị trí của phần tử có position `Relative` chứa nó.

Nếu bạn không đảm bảo quy tắc trên, bỏ qua thiết lập `Relative` cho phần tử chứa thì giao diện sẽ không dự đoán được,vì nó sẽ tự đi tìm phần tử chứa mình có thiết lập `Relative` hoặc nếu tìm không ra thì sẽ tự chọn phần tử `body`.

Vị trí của một phần tử kiểu `Absolute` được xác định dựa vào bốn tham số `top, right, bottom và left` lần lượt đó chính là khoảng cách đến viền trong của phần tử chứa được thiết lập `Relative`. Để hiểu rõ hơn hay xem ví dụ bên dưới.

**Ví dụ 3.1** : Áp dụng position Relative và Absolute thiết lập cho nút nhấn cách cạnh dưới 35px và cạnh phải 35px.

Trong ví dụ này nếu các bạn không biết về kỹ thuật **position** thì các bạn phải làm rất phức tạp bằng kỹ thuật **float**, **box model** và **dimention**.

Tuy nhiên với kỹ thuật **position** thì vấn đề sẽ giải quyết như sau.

Mã HTML

```html
<div class="container">
  <div class="item">
    <button>
      Hello
    </button>
  </div>
</div>
```

Mã CSS

```css
.container {
  border: 2px solid blue;
  width: 200px;
  height: 200px;
  position: relative;
}

.item button {
  position: absolute;
  right: 35px;
  bottom: 35px;
}
```

Và kết quả là

Live Demo: [Ex 1-3](https://jsfiddle.net/nghuuquyen/ve4v6dhf/)


![Ex 3.1 - Demo Position Relative và Absolute](./images/ex3.1-position-relative-absolute-demo.png)

Rất đơn giản đúng không nào.



## Nhận xét và kết luận

Tới đây các bạn sẽ hỏi mình, **vậy khi nào nên dùng position relative và absolute và khi nào thì nên dùng float, box model, dimention ?**


**Các kỹ thuật float và box model chủ yếu dùng để tạo bố cục trang web (layout)**, Float thì dùng để chia cột hoặc tạo grid, trong khi đó box model và dimention thì dùng để xác đinh khoảng cách và kích thước khi trình bày các phần tử vào từng cột.

Còn kỹ thuật xác định vị trí (position) dùng để trình bày các phần tử. Như là đặt phần tử ở góc trái trên, ở giữa hay cách góc một khoảng nào đó, v.v . Thường là những chi tiết vụn vặt rất phức tạp.


Nếu các bạn áp dụng kỹ thuật tạo bố cục (layout) và để trình bày những chi tiết vụn vặt phức tạp thì sẽ gặp rất nhiều khó khăn trong khi viết mã. Điều này thì các bạn chỉ cần thử đặt vấn đề ra và thử giải quyết là hiểu ngay.

**Ví dụ**: Các bạn thử chia cột bằng  position hoặc tạo một user card phức tạo như trên chỉ bằng float và box model. **Cái gì dùng sai mục đích thì sẽ khó khăn vô cùng đúng không nào**.



## Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
