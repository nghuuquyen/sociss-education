


# Những kinh nghiệm đúc kết được sau một thời gian lập trình Node JS .

Sau một thời gian dài làm việc với Node JS nói riêng và cảm nhận về việc phát triển phân mềm nói chung mình rút ra được một số kinh nghiệm sau.

## I. Cách để có thể học và làm quen với việc sử dụng Node JS.

Để học được Node JS thì đầu tiên các bạn nên lên Youtube xem video trước, để biết nó ra sao và làm thế nào cài đặt, làm thế nào có thể chạy thử một ứng dụng “Hello World”.

Thứ hai, các bạn có thể lên các trang như [W3Schools Online Web Tutorials](https://www.w3schools.com/) hay [TutorialsPoint](https://www.tutorialspoint.com/) để học các kiến thức bắt đầu như cấu trúc câu lệnh, từ khóa, các hàm hay thư viện thường dùng.

Sau một thời gian mày mò khởi động, mình tin rằng các bạn sẽ thấy ứng dụng thấy rõ nhất của Node JS là xây dựng một trang web, lúc này không cần nghĩ nhiều các bạn hay thử mày mò làm thử một trang web nhỏ cho mình (Nhớ là giữ nó thật nhỏ). Sau khi tạo ra được một sản phẩm nho nhỏ cho mình như một web todo hay như cái mình làm đầu tiên chính là một mini blog để mình viết bài chẳng hạn. Đến khi có một sản phẩm nhỏ cho riêng mình thì chính lúc đó các ban đã có một thứ vô cùng quan trọng đó là.

Biết mình đang học cái gì và dùng làm cái gì. Đây là một câu trả lời mà nhiều khi có những bạn học cả năm trời cũng không biết cái mình học là gì và mình đang làm cái gì.

Lời khuyên: Node JS thì không phụ thuộc vào IDE, các bạn hãy cài Atom, Visual Studio Code hay Sublime Text để code, việc dùng Text Editor để code và chạy chương trình thông qua Terminal là kỹ năng bắt đầu tốt và giúp các bạn tự tin hơn về sau.


## II. Bắt đầu bước vào con đường chuyên nghiệp hơn .

Một sự thật là các bạn sau khi hoàn thành bước 1 ở trên thì sẽ bắt đầu mất định hướng, không biết đi đâu và làm gì tiếp theo. Vì một trong những nguyên nhân dưới đây.

1. Không biết ngoài công ty người ta làm dự án với công nghệ này ra sao ?
2. Mình học như vậy là đã xin được việc làm chưa, cần học thêm gì nữa ?
3. Giờ muốn làm cho mình một sản phẩm thì đã được chưa nhỉ ?
4. Tự cảm thấy có gì đó chưa ổn làm khi nhìn lại Code, bạn tốn quá nhiều thời gian và có một chút gì đó thiếu tự tin khi muốn trình bày mã của mình ra cho một ai đó ?

Và tất nhiên là còn nhiều điều nữa, nhưng những điều trên chính là những gì chính bản thân mình gặp trong khoảng 3 năm trước đây. 

Và các để không lạc lối ở giai đoạn này thì các bạn phải nhìn nhận một số  điều sau đây.


a) Ở công ty người ta không làm việc một mình, họ làm theo nhóm nhiều người nghĩa là học phải có **quy trình** và một **tập các quy tắc**. 

**Quy trình** ở đây thường gặp trong các công ty công nghệ hiện nay là **quy trình Scrum**, hãy thử lên mạng tìm kiếm và đọc về quy trình này.

**Quy tắc** ở đây là các chuẩn mực viết code, viết code thế nào cho dễ đọc, dễ hiểu và dễ bảo trình.Kế đến là cách tổ chức cấu trúc một chương trình (Cách tạo thư mục, các đặt tên file, …). 

Để biết được các quy tắc viết code và tổ chức code bạn hãy search trên google hai cụm từ khóa là :

- **Node JS styleguide** : Cái này là quy tắt viết code 
- **Node js architecture best practices** : Cái này là cách tổ chức và các cách thực hành tốt.

**Styleguide**  giống như là tập các quy tắt **clean code** cho một quy tắc cụ thể, thường các bản hướng dẫn tốt đều nằm ở github các bạn chọn những project nhiều star để học nhé ( Google và facebook là những nhà cung cấp Styleguide nhiều nhất và độ tin cậy thống nhất cao nhất)
 
**Project architecture** : Ngoài đọc các tài liệu trên mạng các bạn cần phải có một hướng tiếp cận đúng để có thể dễ dàng nghiên cứ cái này, và hướng tiếp cận đó gồm những điều đây.

Các project lớn thường xây dựng dựa trên các mộ hình như là **MVC**, mô hình **Webservice**, **Microservice**, ….
Một project thì luôn có những module giúp giao tiếp với **cơ sỡ dữ liệu** thông qua **ORM**, những module để xử lý nghiệp vụ nhưng validation, query data, … và một module ở lớp view để giao tiếp với thế giới bên ngoài. Tất cả đều có một điểm khởi động ở đâu đó, ví dụ như Node JS thì thường là file index.js hoặc file server.js. Đọc ngược từ đây bạn sẽ nắm được dòng hoạt động của một project nhanh hơn.
Các điểm hay của một project Node JS nói riêng thường nằm ở cách tổ chức thư mục và các đặt tên file. Nhìn qua một cấu trúc thư mục các bạn có thể năm được dòng hoạt động của nó dễ dàng.

```markup
   .
├── apps
│   ├── client
│   │   └── modules
│   │       └── core
│   ├── server
│   │   ├── configs
│   │   │   ├── env
│   │   │   ├── i18n
│   │   │   └── logs
│   │   ├── controllers
│   │   ├── jobs
│   │   ├── lib
│   │   ├── models
│   │   │   └── DAO
│   │   ├── policys
│   │   ├── routes
│   │   │   ├── api
│   │   │   └── page
│   │   ├── services
│   │   └── views
│   └── test
│       ├── client
│       ├── e2e
│       └── server
├── bin
├── build
├── configs
├── docs
├── public
│   ├── dist
│   ├── images
│   └── uploads
├── scripts
└── tasks
```

Ví dụ ở trên là một cấu trúc thư mục mình hay sử dụng để Code một Project Node JS. 

Đầu tiên nhìn vào các bạn sẽ thấy hai thư mục là **client** và **server**. client ở đây chính là các mã lệnh JavaScript ở phía client, mang đến một giao diện người dùng tốt và trực quan cho người dùng, mình thì mình rất quen tay dùng Angular JS. **Server** ở đây chính là code Node ở phía server,để ý sơ qua các bạn sẽ thấy mình có các thư mục chính là controllers , services, routes, models và configs. Trong đó **controllers**, **services** và **models** chính là 3 thư mục đặc trưng trong khi xây dựng một trang web hoặc một **API RESTFul Webservice**. Kế đến mình còn có thư mục configs  trong này chứa các cài đặt về môi trường chạy ứng dụng, các **message dành cho việc đa ngôn ngữ** và các thiết lập dành cho việc **logging khi chạy ứng dụng thực tế** để lưu vết lỗi chương trình. 

**Để ý các từ mình bôi đậm, vì đó chính là từ khóa để các bạn reseach trên mạng.** 

Ngoài ra còn có thể các thư mục như **jobs** thư mục này chứa các mã lệnh dùng để **migration data** - Để cập nhật database chẳng hạn  hoặc các **cron jobs** - chạy xóa log hàng tuần hoặc **backup database** , **batch jobs** - để cập nhật một lượng lớn dữ liệu khi bạn cần nó để chạy một tính năng mới.

và không thể thiếu được **policy** đây là nơi chứa các mã lệnh để kiểm tra quyền của người dùng trên một tính năng nào đó, ví dụ bạn không thể để một người dùng A cập nhật thông tin tài khoản của người B, hay User mà vào thẳng trang của của Admin để cập nhật dữ liệu, trong Node JS thì thư việc **ACL** là một thư viện hay được sử dụng cho việc tạo các policy. Tại thời điểm này còn có thể có những thư viện tốt hơn các bạn có thể tra cứu nó với từ khóa **ACL / Roles + Permissions**. 

**Lời khuyên** : Thật ra thì sau một thời gian làm với Node, mình cũng hoàn toàn có thể tự viết riêng cho mình các policys dưới dạng **Middleware** rất dễ dàng. Có một lời khuyên được các chuyên gia nói đó là đừng quá phụ thuộc và các bộ thư viện, dùng nó mà không hiểu gì về nó. Hãy mở code nó ra đọc và xem thử liệu mình có cần dùng nó hay không hay có thể tự viết được khi tham khảo nó. Sẽ có một phần phân tích sâu hơn vào luận điểm này.


Để ý thêm các bạn sẽ còn thấy các thư mục như là : **build , docs và public** trong đó :
**build** : là thư mục chưa các **file binary của project**, đây là file thực thi được tạo ra từ mã nguồn có thể chạy trên một hệ điều hành nào đó mà không cần có mã nguồn gốc. Các bạn hãy nghĩ đến việc khi các bạn cần đem sản phẩm đi Demo hoặc chạy ở máy chủ thì không thể để mã nguồn gốc ở đó được , **tránh việc hack và ăn cắp mã nguồn** là việc vô cùng nguy hiểm, việc build thành các file thực thi dưới sự hỗ trợ của công cụ là vô cùng cần thiết. Với Node JS thì **pkg** là một ứng cử viên sáng giá trong công việc này.

Thư mục **docs** thường thì chứa các file .md là các file tài liệu dự án, như là file hướng dẫn sử dụng, hướng dẫn cài đặt, **hướng dẫn sử dụng** các API, v.v. Thường khi viết một tính năng gì đó qua trọng mình luôn ghi vào tài liệu ngay, phòng về sau quên và cũng để sau này các đồng nghiệp hay bạn bè vào thì cũng dễ làm việc cùng hơn.

**public** theo đúng nghĩa là chứa các tài nguyên công khai như là các file JS, CSS hoặc hình ảnh ( JS ở client nha

thư mục **scripts** đây là thư mục thường chưa một số **shell script** để làm việc với hệ điều hành, ví dụ sau này khi bạn cần config một bộ CI hay **auto build, auto deploy** thì bạn sẽ viết các kịch bản shell vào.
ví dụ: để chạy ứng dụng thì cần gõ các lệnh như là. 

```markup
git pull
grunt buid 
node server 
```

các lệnh này sẽ ghi vào các file shell script, tùy vào từng hệ điều hành mà sẽ có loại shell khác nhau.

Thư mục **tests** chứa code test cho ứng dụng để tránh trường hợp khi bạn viết một tính năng mới lại kéo theo lỗi cho một tính năng trước đó đang chạy tốt hoặc một ai đó đã làm sai code của bạn. Các kỹ thuật viết Test hiện nay hay gặp là **TDD (Test-Driven Development)** , **BDD (Behavior Driven Development)**. Tuy nhiên viết code test là rất tốn thời gian, nên để hiệu quả thường chúng ta chỉ viết code test cho những tính năng thật sự quan trọng.
  
cuối cùng đó là **tasks** đây là thư mục chứa các **file config cho việc auto build và auto deploy**. Thường thì Node JS mình hay **dùng Grunt để làm công cụ build**.

Ví dụ khi viết mã CSS bằng **SASS** thì các bạn cần phải chạy một trình compile để dịch mã SASS sang CSS. Khi deploy một website thì bạn cần **Minify mã CSS , JS và HTML** để tiết kiếm băng thông và tăng tốc độ tải.

Hoặc trong khi code bạn cần một công cụ liên tục check mã mình xem viết có đúng tiêu chuẩn không thì có thể sử dụng **JShint và CSSHint**. 

Và còn rất nhiều thứ có thể làm được với Grunt  hoặc một công cụ khác đó là Webpack cũng có công dụng gần tương tự .

## Chốt lại phần 2: 

Để có được các kiến thức cũng như cập nhật sớm nhất sự thay đổi của công nghệ các bạn **nên theo dõi một opensource project trên github** đọc hiểu Code của Project đó để có thể nhận biết ra sự thay đổi. Mình follow MEAN.JS và Mean project trên Github, hai project này cung cấp cho mình kỹ năng rất nhiều.

Bạn có thể tìm thấy rất nhiều Opensource project tốt tại đây hoặc reseach trên github.


[ Những opensource project Node JS hay ](https://github.com/sqreen/awesome-nodejs-projects)

thứ hai đó là thường xuyên đọc tạp chí hoặc blog công nghệ  ở Việt Nam thì [Tech Talk | Xu hướng công nghệ](https://techtalk.vn/) , [Viblo | Free service for technical knowledge sharing](https://viblo.asia/) là những trang khá uy tín và cung cấp thông tin chất lượng nhất. Ngoài ra nếu bạn có thể thì [DZone: Programming & DevOps news, tutorials & tools](https://dzone.com/) là một trang tuyệt vời để cập nhật thông tin tổng quát về công nghệ (Mình rất thích trang này).



(Còn tiếp …. )


Đà Nẵng ngày 6 tháng 10 năm 2017.

Nguyễn Hữu Quyền 

**website**: [ sociss.edu.vn - Sociss Class - Online Education Center ](https://sociss.edu.vn/search)
**email**  : nghuuquyen@gmail.com 



