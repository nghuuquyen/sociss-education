# Những kỹ năng cần có của một Web Frontend Dev 

### 1. HTML/CSS 

Đây là kiến thức chung mà một web developer cần biết. Bạn cần phải nắm được cách triển khai thuần một giao diện web với HTML và CSS. Hiện nay dù có được sự hỗ trợ của các Framework, tuy nhiên chỉ cho ta một khung chung, để có được cấu trúc và màu sắc đúng ý của mình bạn vẫn phải cần có đủ kỹ năng HTML và CSS chứ không đơn thuần chỉ Copy và Paste.

Sociss hiện đã có 11 bài về HTML và CSS cơ bản đủ để bạn có thể sử dụng được HTML và CSS để tạo nên một giao diện web, các bạn có thể xem tại đây.

[Sociss Class - HTML & CSS Course ](https://sociss.edu.vn/courses/html-css) 

### 2. Javascript 

HTML và CSS chỉ cho chúng ta một giao diện tĩnh, để có thể tương tác với người dùng và làm việc với dữ liệu thì cần có Javascript. Nói một cách ngắn gọn thì Javascript là một ngôn ngữ chạy trên nền trình duyệt với mục đích 

1) Tạo nên các tương tác giữa website với người dùng. 
2) Tạo các hiệu ứng đẹp mắt. 
3) Xử lý nhận và gửi dữ liệu.
4) Xây dựng nên các thành phần giao diện thông qua HTML DOM.

Trong buổi Offline đầu tiên của Sociss, mình sẽ trình bày và hướng dẫn các bạn sử dụng Javascript để xây dựng giao diện ứng dụng web. 

Trọng tâm nhắm vào các phần sau đây 

+ Dùng HTML DOM để tương tác với các phần tử HTML.
+ Xử lý sự kiện
+ Xử lý AJAX 
 
 Nhưng trước hết thì cần có một chút kiến thức nền về Javascript và mình cũng đã có một bài viết ở đây.
 
 [Sociss Class - Kiến thức nền về Javascript ](https://sociss.edu.vn/courses/nodejs/lesson/javascript-kien-thuc-nen) 
 

### 3. CSS Framework 

CSS Framework là công cụ để giúp chúng ta phát triển xây dựng giao diện web một cách nhanh chóng và ít bị lỗi nhất. Khi sử dụng một Framework thì ngoài lợi thế là đáp ứng nhanh kết quả, chúng ta còn có một  bộ khung chuẩn với tài liệu và hướng dẫn đầy đủ được cung cấp bởi các nhà cung cấp Framework (bên thứ ba) nhờ vậy mà Team work hoặc việc triển khai một dự án sẽ trở nên đồng nhất hơn, bên cạnh đó cũng không thể không nói đến việc đó là bạn sẽ bị phụ thuộc vào framework đó.

CSS Framework thì thường được chia ra làm hai loại 

**1) Grid Framework**

Đây là loại framework hỗ trợ cho việc chia cột và tạo giao diện Responsive. Bạn nên chọn loại framework này khi mà bạn dự định sẽ tự viết CSS cho các thành phần bên trong, và chỉ muốn đẩy nhanh quá trình tạo bố cục trang web (layout).


**2) CSS UI Framework**

Đây là loại framework cung cấp sẵn cho chúng ta các thành phần giao diện đẹp và bắt mắt có thể dùng trực tiếp mà không cần chỉnh sửa lại CSS. Thậm chí các CSS UI Framework còn cung cấp cả các mã lệnh JS để tạo các hiệu ứng, tương tác người dùng.


**3) Danh sách một số CSS Framework nổi tiếng**

Sau đây mình sẽ liệt kê cho các bạn một số framework nổi tiếng được ưa chuộng trên thế giới.


**1. Bootstrap**

Thuộc loại CSS UI Framework.

Đây có lẽ là Framework được biết đến nhiều nhất và cũng được dùng khá nhiều tại Việt Nam. Bootstrap gần như hỗ trợ đầy đủ các thành phần mà một trang web cần, với tài liệu hướng dẫn sử dụng đầy đủ. Đây là một sự lựa chọn tin cậy. 

Một lưu ý nhỏ là  Bootstrap hiện đã có phiên bản 4, tuy nhiên rất nhiều người và có cả mình công nhận là phiên bản 3 chạy ổn định hơn, nên nếu bạn lần đầu tiên sử dụng thì nên dùng phiên bản 3 nhé.

**2. PureCSS**

Thuộc loại CSS UI Framework.

Đây là một ứng cử viên nổi nhất năm 2017 với đặc tính dung lượng nhẹ, đẹp và đầy đủ các components. Đây cũng là một framework mà mình muốn giới thiệu cho các bạn dùng thử.

**3. Skeleton** 

Thuộc loại CSS UI Framework.

Đây là một framework thiết kế theo phong cách tối giản cực kỳ, và tất nhiên nó cực kỳ nhẹ. Nếu bạn mong muốn một trang web nhẹ nhàng, đơn sắc không cầu kỳ thì hãy tìm đến Skeleton.

**4. Simple Grid**

Đúng như tên gọi, nó là một Grid Framework và chỉ cung cấp cho bạn chia cột và responsive.

[Trang chủ Simple Grid ](http://thisisdallas.github.io/Simple-Grid/) 


Ngoài ra các bạn có thể tìm thêm nhiều hơn tại đây nếu muốn, vì thực ra là rất nhiều mình cũng không thể dùng hết [các grid framework](https://www.webpagefx.com/blog/web-design/responsive-css-grid/) 


### 4. Javascript Library & Framework 

Qua các bài lab thực hành trong buổi offline các bạn sẽ thấy được các tác dụng của Javascript trong việc xây dựng website, tuy nhiên các bạn cũng sẽ thấy được là để viết ra cần tốn khá nhiều thời gian đặc biệt là trong các việc như quản lý phần View, Get và Set data.

Thì các Javascript Framework được sinh ra để giải quyết các vấn đề này, giúp tăng tốc độ phát triển giảm chi phí và tăng độ an toàn cho ứng dụng, tăng thời gian cho Developer tập trung và các bussiness logic của ứng dụng hơn.

Những ưu điểm khi sử dụng JavaScript frameworks :

**Hiệu quả** – thường một dự án phải mất tới vài tháng và hàng trăm dòng mã code nhưng nay quá trình này đã nhanh hơn rất nhiều với các patterns và functions được prebuilt được structure tốt.

**An toàn** – top những JavaScript framework có thoả thuận về bảo mật và được hỗ trợ bởi cộng đồng rộng lớn.

**Chi phí** – hầu hết các framework đều là mã nguồn mở và miễn phí. Vì framework giúp các lập trình viên xây dựng giải pháp tuỳ chỉnh nhanh hơn, giá cuối cùng cho ứng dụng web sẽ thấp hơn.


#### Các Javascript library & framework nổi tiếng

Đầu tiên phải nói đến chính là 

**a) JQuery** 

JQuery là một thư viện được sử dụng nhiều nhất và cũng là cốt lõi xây dựng lên các framework khác. Đặc biệt JQuery làm việc rất hiệu quả với HTML DOM, việc truy vấn các phần tử trở nên vô cùng dễ dàng.

Ngoài ra bộ thư viện JQuery UI nổi tiếng cũng rất được ưa dùng để xây dựng giao diện ứng dụng người dùng. 

https://jqueryui.com

**b) Angular JS** 

Angular JS được biết đến là một Full MVC framework để xây dựng một ứng dụng Single Page hoàn chỉnh.  Sociss Class cũng được xây dựng một phần dựa trên Angular JS 1.x, cá nhân mình thì rất thích và tin dùng công cụ này.

Trong phần bài lab chính mình cũng sẽ demo sử dụng Angular JS để làm ứng dụng web.

**c) React JS** 

Đây là một thư viện tập trung cao vào phần View nhờ đó có thể kết hợp tốt với bất kỳ cấu trúc web nào, bên cạnh đó cũng được biết đến với cơ chế DOM ảo để nâng cao hiệu suất và tốc độ render giao diện.

Cá nhân mình thì không có nhiều kinh nghiệm với React.js tuy nhiên đây là một công cụ cực kỳ hot và tràn đầy tiềm năng với sự hỗ trợ của ông lớn Facebook. Tương lai mình sẽ dành thời gian để nghiên cứ về cái này, chắc chắn sẽ như vậy.


# 5. Responsive Design

Với xu thế mobile first hiện nay thì kiến thức về Responsive web là vô cùng cần thiết, nếu không nói quá thì đây cũng là kỹ năng đầu tiên mà mọi người đòi hỏi khi làm một trang web.

Nói một cách đơn giản thì Reponsive là làm cho trang web hiển thị khác nhau khi xem trên các thiết bị với kích thước màn hình khác nhau nhằm mục đích làm cho người dùng dễ xem nội dung hơn.

Về góc nhìn kỹ thuật thì các kỹ thuật Responsive được tạo ra bởi tính năng Media Query của CSS bên cạnh đó cũng có thể can thiệp thêm bởi Javascript để để các trải nghiệm được chính xác hơn.

Trong buổi offline mình cũng sẽ có một demo nhỏ cho phần này.

# 6. Version Control/Git

Trong quá trình tạo ra một sản phẩm thì việc quản lý lịch sử phát triển, quản lý phiên bản là rất cần thiết. Cùng với xu hướng ngày càng chuyên nghiệp hiện và nhu cần Team work hiện này thì kiến thức về GIT là không thể bỏ qua.

trong buổi offline thì không đề cập đến công cụ này, tuy nhiên mình đã có 3 bài viết trình bày về Git ở Sociss, các bạn có thể xem qua.

[Sociss Class - Kiến thức nền về GIT ](https://sociss.edu.vn/courses/devstory/lesson/kien-thuc-nen-ve-git-nhung-khai-niem-quan-trong-can-nam) 


[Tự học GIT bài 1](https://sociss.edu.vn/courses/devstory/lesson/tu-hoc-git-tu-co-ban-den-nang-cao-phan-1) 

[Tự học GIT bài 2 ](https://sociss.edu.vn/courses/devstory/lesson/tu-hoc-git-tu-co-ban-den-nang-cao-phan-2)    


# 7. CSS Preprocessing

Khi viết thuần CSS, thì bản thân CSS cũng sẽ dần có những hạn chế của nó khi ứng dụng ngày càng lớn dần lên, thì những thay đổi trong CSS có thể là ác mộng. Thứ hai trong lập trình thì nhu cầu sử dụng lại mã nguồn là rất cao, hoặc module hóa code để dễ quản lý tổ chức. 

CSS Preprocessing là nhưng công cụ cung cấp cho chúng ta một ngôn ngữ mở rộng của CSS mà trên phần mở rộng này, chúng ta có thể sử dụng biến, function, thực hiện tính toán số học, module hóa code, kế thừa, ... 

Rồi sau đó CSS Preprocessing có trách nhiệm biên dịch phần mã lệnh mở rộng này thành mã lệnh CSS thuần túy.

Hai CSS Preprocessing mà mình có kinh nghiệm đó là Sass và LESS. 

Trong buổi offline mình sẽ demo cho các bạn xem về công cụ này.

#Ngoài những điều trên còn có thêm

+ **Testing/Debugging** Bạn cần biết cách viết code test cho các mã lệnh Javascript, bạn cũng cần biết cách sử dụng hiệu quả các công cụ để debug.

+ **Browser Developer Tools** Các trình duyệt đều cung cấp Dev tools để các bạn có thể debug, view network trafic, tracking, .... Việc sử dụng và khai thác các tiện ích mang lại từ Browser dev tools sẽ giúp cho công việc phát triển frontend thuận lợi hơn. 

Có thể đọc thêm một bài tại đây [30 tiện ích mở rộng của Chrome dành cho chuyên viên thiết kế và lập trình viên](https://techtalk.vn/30-tien-ich-mo-rong-cua-chrome-danh-cho-chuyen-vien-thiet-ke-va-lap-trinh-vien.html) 

+ **Building and Automation Tools** xu thế hiện nay là tự động hóa các công việc có tính chất lặp đi lặp lại ví dụ như là chạy task để biên dịch mã Sass thành css, minify CSS, JS và HTML, chạy các trình kiểm tra mã code khi viết như là JSHint hoặc CSSHint. Các việc này có thể tự động hóa bằng các công cụ Build automation tools như Webpack, Grunt hoặc Gulp. 

+ **Command Line** Làm việc với dòng lệnh hay cụ thể hơn là các bạn nên tập quen dần với việc chạy các lệnh vào terminal hoặc CMD thay vì chỉ sử dụng GUI (giao diện trực quan) vì tính tiện lợi của nó. Đầu tiên các bạn có thể thử sử dụng GIT chỉ qua terminal sau đó là thư sử dụng các build automation tools như là grunt hoặc gulp. 


Những điều này sẽ hẹn các bạn ở một buổi offline khác, vì chắc chắn sẽ không đủ thời gian để trình bày hết.

Tuy nhiên đó cũng là từ khóa để các bạn tìm hiểu trước.


