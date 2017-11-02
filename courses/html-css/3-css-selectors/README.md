Trong bài học lần trước các bạn đã biết CSS là gì, có ý nghĩa ra sao. Trong bài học lần này mình sẽ hướng dẫn cụ thể hơn về  vùng chọn trong CSS để định dạng HTML.

**Về bản chất**, để định dạng một phần tử HTML nào đó, thì đầu tiên bạn phải chọn được phần tử đó, sau khi chọn được thì mới tiến hành định dạng các thông số như màu sắc, kích thước, ...

Và tư tưởng trên cũng chính là các tiếp cận để viết mã CSS. Cấu trúc của mã lệnh CSS bất kỳ như sau


```css
list selectors {
  attribute : value;

  [... more ...]
}
```

Đầu tiên là xác định vùng chọn kế theo đó toàn bộ các thuộc tính để định dạng sẽ bỏ trong cặp dấu ngoặc nhọn.

**Ví dụ :** bạn muốn định dạng cho tất cả thẻ h1 đều có màu chữ là xanh và cỡ chữ là 30px thì làm như sau.

```css
h1 {
  color : blue;
  font-size: 30px;
}
```

Trong đó h1 chính là tên vùng chọn, color và font-size là tên thuộc tính và blue và 30px là giá trị.

Trong CSS vùng chọn đóng vai trò rất quan trọng khi viết CSS, vì nếu bạn sử dụng vùng chọn sai thì sẽ dẫn đến các quy tắc CSS của bạn sẽ không thể thực thi hoặc thực thi không đúng chỗ. Chính vì vậy việc nắm rõ quy tắc sử dụng vùng chọn là kỹ thuật đầu tiên bạn cần nắm khi sử dụng CSS.


# 1. Vùng chọn là gì ?

Vùng chọn là những phần tử, mà các quy tắc CSS bạn định nghĩa được áp dụng trên đó.

# 2. Các kiểu vùng chọn

Trong CSS các kỹ thuật xác định vùng chọn rất phong phú, bao gồm:

## 2.1 Kỹ thuật chọn căn bản

1) Chọn theo tên thẻ (Type selector)
2) Chọn theo class (Class selector)
3) Chọn theo ID (ID selector)
4) Chọn theo thuộc tính (Attribute selector)
5) Chọn toàn thể (universal selector)

## 2.2 Kỹ thuật chọn tổ  hợp (Combinators)

1) Tổ hợp thừa hưởng (Descendant combinator)
2) Tổ hợp con (Child combinator)
3) Tổ hợp anh chị em kề sát (Adjacent sibling combinator)
4) Tổ hợp anh chị em chung chung (general sibling combinator)

Tiếp theo chúng ta sẽ tìm hiểu cụ thể từng kỹ thuật chọn một cách cụ thể về công dụng, ý nghĩa và các trường hợp áp dụng điển hình.

**Lưu ý**: Trong thực tế khi đã hiểu về các kỹ thuật chọn, thì lúc dùng sẽ phối hợp các kỹ thuật chọn với nhau để chọn chính xác phần tử mình mong muốn.

# 3. Kỹ thuật chọn căn bản

## 3.1 Chọn theo tên thẻ

Đây là kỹ thuật chọn khá phổ biến, mục đích là để áp dụng CSS lên mọi thẻ có tên được chọn.

### Tình huống sử dụng

Khi bạn muốn chọn tất cả các phần tử theo tên thẻ.


**Ví dụ 1**: tất cả các thẻ a đều có màu đỏ.

```css
a {
  color : red;
}
```

**Ví dụ 2**: Tất cả các thẻ a nằm trong thẻ div đều có màu đỏ.

```css
div a {
  color : red
}
```

## 3.2 Chọn theo tên class

Đây là kỹ thuật chọn phổ biến nhất, mục đích là để định dạng cho tất cả các thành phần cùng chung một lớp.

### Tình huống sử dụng

Khi bạn muốn áp đặt CSS lên một tập các phần tử có tính chất giống nhau. Ví dụ bạn có một list items , thì các item được xem là các phần tử có tính chất giống nhau.


**Ví dụ 1**: tất cả các thẻ a thuộc lớp link đều có màu đỏ.

```css
a.link {
  color : red;
}
```

**Ví dụ 2**: Tất cả các phần tử thuộc lớp item đều có cỡ chữ 20px;

```css
.item {
  font-size: 20px;
}
```

Lúc này khi sử dụng thì ta làm như sau.

```html
<ul>
  <li class="item">Product 1</li>
  <li class="item">Product 2</li>
  <li class="item">Product 3</li>
</ul>
```
Như trên thì tất cả các thẻ li đều thuộc class item, nên cỡ chữ bên trong thẻ li sẽ là 20px


## 3.3 Chọn theo ID

Vùng chọn dựa vào ID (tên định danh) nghĩa là bạn có thể chọn một phần tử cụ thể dựa vào giá trị của thuộc tính id trong thẻ HTML. Trên một trang tài liệu HTML thì mỗi phần tử phải mang một id riêng biệt không trùng nhau.

### Tình huống sử dụng

Khi bạn thiết lập CSS cho một phần tử mà bạn biết nó là duy nhất trong trang.

**Ví dụ 1**: chỉnh màu nền là xanh cho thẻ div có id là main.

```css
div#main {
  background: blue;
}
```

**Ví dụ 2**: thiết lập chiều cao cho phần tử có id là header giá trị 350px

```css
#header {
  height: 350px;
}
```

## 3.4 Chọn theo thuộc tính

Vùng chọn dựa vào thuộc tính là các chọn các phần tử có chung một thuộc tính nào đó.

### Tình huống sử dụng

Khi bạn muốn chọn các thành phần có cùng tên thẻ hoặc cùng một class nhưng lại có một thuộc tính nào đó khác nhau.


**Ví dụ 1**: Bạn muốn bôi nền xanh tất cả các thẻ a có đường dẫn.

```css
a[href] {
  background: blue;
}
```

**Ví dụ 2**: Bạn muốn bôi nền xanh tất cả các thẻ a có đường dẫn bắt đầu bằng https://sociss.edu.vn

```css
a[href^="https://sociss.edu.vn"] {
  background: blue;
}
```

Thì lúc này chỉ những thẻ bắt đầu từ đường dẫn trang web https://sociss.edu.vn mới được tô đậm, còn các đường dẫn bình thường khác thì không.


Bạn có thể tham khảo thêm bảng sau đó biết được nhiều phép so sánh trên thuộc tính hơn.


Vùng chọn |   ý nghĩa
...................|......................................

[attr] | Có chứa thuộc tính
[attr=value]  | Chứa thuộc tính bằng một giá trị cụ thể nào đó
[attr~=value] | Chọn thuộc tính có chứa value được ngăn cách bởi dấu cách

[attr|=value] | Có giá trị bắt đầu bằng value hoặc theo sau đó là một dấu trừ -, thường dùng để chọn ngôn ngữ.

[attr^=value] | Phần tử có thuộc tính có giá trị bắt đầu trùng khớp.
[attr$=value] | Phần tử có thuộc tính có giá trị kết thúc trùng khớp.
[attr*=value] | Ơhần tử có thuộc tính có giá trị chứa ít nhất một giá trị được quy định.

[attr operator value i] | Xác định có không phân biệt hoa thường.


## 3.5 Chọn toàn thể (universal selector)

sử dụng ký tự hoa thị * để đại diện cho tất cả các phần tử gọi là chọn toàn thể.

**Ví dụ 1**: Tạo viền cho tất cả các phần tử có chứa class has-border

```css
*.has-border {
  border: 1px solid blue;
}
```


# 4. Kỹ thuật chọn tổ hợp

## 4.1 Tổ hợp thừa hưởng (Descendant combinator)

**Ví dụ 1**: thiết lập màu xanh dương cho tất cả các thẻ p trong thẻ div có class chứa class là post-content.

```css
div.post-content p {
  color: blue;
  font-size: 15px;
}
```

Như vậy cách chọn thừa hưởng là một bộ chọn phối hợp giữa hai selector mà trong đó những phần từ khớp với selector thứ hai khi và chỉ khi có tổ tiên khớp với selector thứ nhất. **Hai bộ chọn ngăn cách nhau bởi khoảng trắng**

trong ví dụ trên thì selector thứ hai là thẻ p, selector thứ nhất là div.post-content. Lúc này theo định nghĩa chọn tất cả thẻ p có tổ tiên là div.post-content nghĩa là thẻ p nằm ở trong thẻ div có chứa class post-content.


### Tình huống sử dụng

Khi bạn muốn chọn tất cả phần tử bên trong một vùng chọn nào đó.


## 4.2 Tổ hợp con (Child combinator)

Khác với tổ hợp thừa hưởng, tổ hợp con là một bộ chọn phối hợp giữa hai selector, trong đó selector thứ hai được chọn khi nó là con trực tiếp của selector thứ nhất. **Hai bộ chọn ngăn cách nhau bằng ký tự >**

**Ví dụ 1** cho đoạn HTML sau, hãy phân tích các mỗi quan hệ.

```html
<div class="post-content">
  <p>Con trực tiếp của div.post-content</p>
  <p>Con trực tiếp của div.post-content</p>

  <div class="post-footer">
    <p>Con trực tiếp của div.post-footer và là cháu của div.post-content</p>
  </div>
</div>
```

Qua ví dụ trên các bạn đã hiểu hơn về khái niệm con trực tiếp rồi đúng không nào.

**Ví dụ 2** Cho đoạn HTML sau, hãy thiết lập màu xanh dương cho thẻ p chứa mô tả form.

```html
<form class="search-form">
  <h1>Tìm kiếm</h1>
  <p>Tìm kiếm thông tin trong hệ thống</p>
  <fieldset>
    <label>Keyword</label>
    <input name="keyword" type="text"></input>
    <p>Nhập từ khóa bạn muốn tìm</p>
  </fieldset>
</form>
```

Phân tích thì thấy trong form trên có đến hai nơi có thẻ p. Tuy nhiên thẻ p mô tả cần được đổi màu chữ thì là con trực tiếp của thẻ form. Vì vậy ta làm như sau

```css
form.search-form > p {
  color : blue;
}
```


### Tình huống sử dụng

Khi ban muốn chọn một phần tử mà nó là phần tử con trực tiếp của một phần tử nào đó mà không qua bất kỳ trung gian nào.

## 4.3 Tổ hợp anh chị em kề sát (Adjacent sibling combinator)

Là một bộ chọn gồm hai selector trong đó các phần tử khớp với selector thứ hai chỉ được chọn khi nó **đứng liền sau** các phần tử khớp với selector thứ nhất. **Hai bộ chọn ngăn cách nhau bởi dấu +**

**Ví dụ 1** : Thiết lập CSS sao cho cặp thẻ label và input kề nhau luôn luôn nằm ở hai dòng khác nhau.

```css
label + input {
  display: block;
  clear: both;
}
```

Theo đoạn code trên thì mọi thẻ input nằm kề sau thẻ label đều hiển thị ở dạng block, nên chắc chắn nó sẽ ở hai dòng khác nhau.

### Tình huống sử dụng

khi bạn muốn định dạng cho một cặp phần tử thường đi kèm với nhau.

## 4.3 Tổ hợp anh chị em chung chung (general sibling combinator)


Là một bộ chọn gồm hai selector trong đó các phần tử khớp với selector thứ hai chỉ được chọn khi nó **đứng sau** các phần tử khớp với selector thứ nhất. **Hai bộ chọn ngăn cách nhau bởi dấu ~**


**Ví dụ 1** : Thiết lập CSS sao cho cặp thẻ label và input luôn luôn nằm ở hai dòng khác nhau.

```css
label ~ input {
  display: block;
  clear: both;
}
```

Để ý thấy ở đây cặp thẻ label và input không nhất thiết phải đừng liền kề, có thể được ngăn cách bởi một phần tử nào đó, tuy nhiên các thẻ input được chọn phải đứng sau thẻ label. **Có thể tác động đến nhiều thẻ input đứng sau thẻ label chứ không phải chỉ một như tổ hợp kề sát**.


# 5. Kết luận

Qua bài học mình đã giới thiệu với các bạn tất cả kỹ thuật chọn hiện có của CSS3. Các bạn cần nắm và hiểu rõ cách sử dụng và ý nghĩa của mỗi vùng chọn.

Sau bài này sẽ có một bài thực hành số 1 về thao tác với vùng chọn (Selector) để các bạn có thể áp dụng vào thực hành để nâng cao kỹ năng.


# 6. Câu hỏi cần suy ngẫm

Hãy suy nghĩ và nêu lên nhận xét của bạn với các luận điểm dưới đây là đúng hay sai và vì sao ? . Hãy trả lời và cũng thảo luận ở phần comment nhé.


1) Tôi có thể chọn mọi thứ với bộ chọn class, nên chỉ cần biết mỗi bộ chọn này là được rồi không cần biết các bộ chọn khác.

2) Làm thế nào để biết bộ chọn nào là phù hợp nhất, vì tôi vẫn có thể chọn một phần tử bằng nhiều cách khác nhau.


# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
