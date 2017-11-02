#require-module

### Để chạy ví dụ sử dụng lệnh.

```
cd /simple-require-module
node index
```

### Mô tả

Ví dụ này hướng dẫn bạn cách sử dụng một module tự viết. Việc tách ứng dụng
thành nhiều module là việc cần thiết để cho mã nguồn dễ quản lý hơn.

Module là giống như các thư viện trong PHP, C, C#,… Mỗi module chứa một tập các hàm chức năng có liên quan đến một đối tượng của Module qua đó giúp việc viết và quản lý mã lệnh của chương trình được dễ dàng hơn. Một module có thể đơn giản là một hàm hay một đối tượng. Mỗi module thường được khai bảo ở một tập tin riêng rẽ.

Trong Node JS để gọi một module chứa trong một file .js khác ta sử dụng require.


ví dụ:

```javascript
var Operator = require('./lib/Operator');
```

Như đoạn code ở trên có nghĩa là chúng ta sẽ khởi tạo một đối tượng Operator
chứa trong thư mục lib. Ký hiệu './' ở đây là để chỉ tìm kiếm bắt đầu từ thư
mục hiện hành.

```javascript
module.exports.add = function Add(a, b) {
  return a + b;
};
```

Từ khóa module.exports ở đây là để xuất hay public một thuộc tính hay phương thức trong module ra ngoài. Sau khi exports chúng ta có thể sử dụng được hàm
add sau khi require nó vào.

```javascript
var a = 5;
var b = 5;

console.log(Operator.add(a, b));
```

Kết quả lúc này sẽ là 10.
