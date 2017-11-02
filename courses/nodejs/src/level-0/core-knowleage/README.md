# Kiến thức nền

Ứng dụng Node JS được viết trên mã lệnh JavaScript. Những bạn trước đây đã làm việc quen với JavaScript trên trình duyệt thì sẽ thấy rất cấu trúc câu lệnh gần như tương đồng tuy nhiên chỉ khác nhau ở điểm đó là.

>Mã JavaScript trong Node JS là chạy ở phía Server Side nên sẽ không hỗ trợ các câu lệnh tưng tác với DOM hay những Browser Library để làm việc với trình duyệt thay vào đó,  Node JS sẽ hỗ trợ những thư viện để chúng ta có thể làm việc với tệp tin, hệ điều hành, v.v.

Trong bài viết này mình Quyền sẽ giới thiệu cho các bạn tổng quát kiến thức nền cần thiết khi làm việc với ngôn ngữ JavaScript bao gồm 3 phần trọng tâm là .


1. Cấu trúc câu lệnh.
2. Kiểu dữ liệu.
3. Thao tác trên các kiểu dữ liệu.


## 1. Cấu trúc câu lệnh JavaScript

### 1.1 Khối lệnh và dòng lệnh

Như các ngôn ngữ họ C khác như Java, .NET, v.v .JavaScript cũng tương tự, các khối mã lệnh được đặt trong cặp dấú ngoặc nhọn `{ code block }`. Kết thúc mỗi dòng lệnh sẽ là dấu chấm phẩy `;`.

Ví dụ về khối lệnh và dòng lệnh.

```javascript
function doSomethingCool() {
  // Đây là một khối lệnh trong cặp dấu ngoặc nhọn.
  // Dòng lệnh trong khối lệnh kết thúc bằng dấu chấm phẩy.
  console.log('Line 1');
  console.log('Line 2');
  console.log('Line 3');
}
```

### 1.2 Từ khóa
Trong JavaScript có bộ từ khóa là:

Từ khóa | Ý nghĩa
-------------------|------------------------------------------
break	| Thoát khỏi câu lệnh Switch hoặc vòng lặp
continue	| Nhảy ra khỏi vòng lặp hiện tại và quay trở lại đầu vòng lặp kế tiếp
debugger	| Dùng để đặt một break point khi debug
do ... while | Thực thi câu lệnh trong khối Do khi điều kiện trong While còn đúng
if ... else	| Khối lệnh điều kiện rẽ nhánh.
return	| Trả về giá trị và thoát khỏi một hàm.
switch | Đánh dấu một block gồm nhiều khối lệnh khác nhau sẽ được thực thi phụ thuộc vào từng trường hợp cụ thể của dữ liệu vào.
try ... catch	| Bắt và xử lý lỗi (Ngoại lệ)
var	| Định nghĩa biến.

Ví dụ một đoạn lệnh nhỏ.

```javascript
var a = 1;
var b = 2;

console.log(a + b); // 3
```

Câu lệnh trên khi thực thi sẽ in ra màn hình terminal giá trị là 3.

### 1.3 Comment (Viết bình luận hoặc mô tả cho mã lệnh)

Khi viết chương trình thì việc comment hay viết lời bình luận cho câu lệnh là không
thể thiếu. Cũng như các ngôn ngữ khác JS có hai kiểu comment là comment trên một dòng
hoặc comment trên nhiều dòng.

comment trên một dòng bắt đầu với //  
còn comment trên nhiều dòng bắt đầu với /* và kết thúc với * /

Ví dụ về viết document cho hàm Add thực hiện việc cộng hai số a và b.

```javascript
/**
* @name Add
* @description
* Add two given number {a} and {b} .
*
* @param  {number} a First number
* @param  {number} b Second number
* @constructor
*/
function Add(a, b) {
  // return sum of a and b.
  return a + b;
};
```

## 2. Biến và toán tử

Trong JS biến được khai báo với từ khóa `var`. Và có các kiểu dữ liệu là Object (đối tượng), String (Chuỗi), Number (Số ) hoặc Array (Mảng).

Ví dụ:

```javascript
var MAX = 1000;                                // Number

var name = "Nguyen Huu Quyen";                 // String

var user = {                                   // Object  
  name:"Nguyen Huu Quyen",
  username: "nghuuquyen"
};    

var array = ['Happy', 'Learning', 'Node JS'];  // Array
```

Tương ứng với mỗi kiểu dữ liệu sẽ có một số thao tác cơ bản.

### 2.1 Kiểu dữ liệu đối tượng ( Object )

#### 2.1.1 Khai báo

Trong JS mỗi đối tượng gồm có hai phần cơ bản đó là các thuộc tính (properties)
và các phương thức (methods) hay còn gọi là hành vi của đối tượng.

Ví dụ khai báo một object đơn giản.

```javascript
var product = {
  name : 'Product A',
  price : 500,
  fullInfo : function getFullInfo() {
    return 'Name: ' + this.name + ' Price: ' + this.price;
  }
};
```

Trong ví dụ trên ta thấy đối tượng `product` có 2 thuộc tính là `name` và `price`
trong đó thuộc tính `name` có giá trị (Property Value) là `Product A`.

Ngoài ra object `product` còn có một phương thức đó chính là `fullInfo` để trả
về thông tin đầy đủ của đối tượng là một chuỗi gồm tên và giá.

#### 2.1.2 Thiết lập và truy xuất dữ liệu (Get và Set Data)

Để thiết lập giá trị (Set) cho thuộc tính của đối tượng ta có hai cách như sau

```javascript
product.name = 'New Name';
product['name'] = 'New Name';
```
Việc lấy dữ liệu cũng đơn giản

```javascript
var _name = product.name;
```
Hoặc

```javascript
var _name = product['name'];
```

#### 2.1.3 Thực thi phương thức

Để thực thi phương thức của object các bạn làm như sau.

```javascript
var _fullInfo = product.fullInfo();
```


### 2.1 Kiểu dữ liệu chuỗi ( String )

#### 2.1.1 Khai báo

```javascript
var _string = 'This is string.';
// Nếu trong chuỗi có ký tự đặt biệt thì có thể dùng ký hiệu thoát \
var _message = 'It\'s 7 o\'clock.';
```

#### 2.1.2 Các thuộc tính và phương thức hay dùng trên chuỗi

**1. Lấy độ dài chuỗi.**

```javascript
var _string = 'THIS IS STRING';
_string.length // Get string length.
```

**2. Viết thường hoặc viết hoa tất cả.**

```javascript
var _string = 'THIS IS STRING';
var a = _string.toLowerCase(); // a = 'this is string'
var b = _string.toUpperCase(); // b = 'THIS IS STRING'
```

**3. Cắt bỏ ký tự trống hai đầu.**

Phương thức này được dùng thường xuyên để  xử lý chuỗi vào, tránh bị dư thừa ký
tự trống hai đầu.

```javascript
var _string = '         THIS IS STRING         ';
var a = _string.trim(); // a = 'THIS IS STRING'
```

### 2.2 Kiểu dữ liệu số ( Number )

#### 2.2.1 Khai báo

Khai báo một biến kiểu số.

```javascript
var _number = 150;
```

#### 2.2.2 Đối tượnng Math để thao tác trên số.
trong JS Math là một biến Global các bạn có thể dùng luôn mà không cần khai báo.

**1. Làm tròn số.**

Để làm tròn số thì trong JS có hỗ trợ 3 kiểu, làm tròn gần nhất (round), làm tròn
lên (ceil) và làm tròn xuống (floor).

Làm tròn gần nhất sẽ trả về giá trị nguyên gần nhất với giá trị hiện tại.

```javascript
Math.round(4.7);    // trả về 5
Math.round(4.4);    // trả về 4
```

Làm tròn lên và làm tròn xuống.

```javascript
Math.floor(4.7);    // trả về 4
Math.ceil(4.4);     // trả về 5
```

**2. Tính trị tuyệt đối**

```javascript
Math.abs(-5); // trả về 5
```
**3. Tính sin và cos**

hàm sin và cos nhận và giá trị radians, nếu bạn muốn dùng bằng giá trị độ, thì
đơn giản là nhân cho số PI rồi chia cho 180.

```javascript
Math.sin(90 * Math.PI / 180);     // trả về 1 (Sin góc 90 độ)
```

**4. Tính giá trị mũ (x mũ y )**

```javascript
Math.pow(8, 2);      // trả về 64 vì là 8 mũ 2
```

**5. Tính giá trị căn bật hai**

```javascript
Math.sqrt(64);      // trả về 8
```
**6. Lấy giá trị ngẫu nhiên.**
Hàm random() sẽ trả về ngẫu nhiên một giá trị trong khoảng từ 0 đến 1.
Ví dụ để lấy ngẫu nhiên một số trong khoảng từ 0 đến 1000 thì có thể làm như sau.

```javascript
Math.round( Math.random() * 1000 );
```

### 2.3 Kiểu dữ liệu mảng ( Array )

#### 2.2.1 Khai báo

Khai báo một biến kiểu mảng.

```javascript
var _numArray = [1, 2, 3, 4, 5]; // Khai báo một mảng số.
var _strArray = ['a', 'b', 'c']; // Khai báo một mảng ký tự.
var _oArray = [ // Khai báo một mảng đối tượng.
  {name : 'Product A', price : 500},
  {name : 'Product B', price : 600},
  {name : 'Product C', price : 700}
] ;
```

#### 2.2.2 các thuộc tính và phương thức thao tác với mảng.

**1. Lấy độ dài mảng**

```javascript
var array = [1,2,3];
array.length // 3
```
**2. Thêm phần tử vào mảng**

a. `push` thêm vào cuối.
```javascript
var array = [1,2,3];
array.push(4) // array = [1,2,3,4]
```

b. `unshift` thêm vào đầu mảng

```javascript
var array = [1,2,3,4,5];
array.unshift(0) // array = [0,1,2,3,4,5]
```

**3. Đọc giá trị trên mảng.**

```javascript
var array = [1,2,3];
array[1] // 2 , đọc tại vị trí 1, đếm từ 0.
```

**4. Lấy phần tử trên mảng ra**
Có 3 kiểu lấy phần tử ra đó là lấy đầu, lấy cuối và lấy ở vị trí `i`. Chú ý khi lấy
ra xong thì phần tử đó cũng xóa trong mảng gốc.

a. `pop` lấy cuối.  
```javascript
var array = [1,2,3,4,5];
array.pop() // 5, lấy phần từ ở cuối ra.
```

b. `shift` lấy đầu
```javascript
var array = [1,2,3,4,5];
array.shift() // 1, lấy phần từ ở cuối ra.
```

**5. Cắt mảng (tạo một mảng con từ mảng gốc ban đầu)**

hàm `slice` nhận vào hai tham số  bắt đầu và kết thúc. Chú ý nếu chỉ đưa vào một
tham số thì xem như là cắt từ vị trí đó đến cuối mảng.

Chú ý như ví dụ đây thì vị trí kết thúc sẽ không bao gồm trong mảng con nhé.

```javascript
var array = [1,2,3,4,5];
var sub = array.slice(1, 3); // cắt từ index 1 đến 3, sub = [2,3]
```

Ví dụ cắt từ vị trí số 3 đến tận cùng mảng.

```javascript
var array = [1,2,3,4,5];
array.slice(3) // [4,5]
```
**6. Sắp xếp mảng**

Để sắp xếp mảng thì JS hỗ trợ cho bạn một phương thức `sort`. Nguyên tắc làm việc của hàm `sort` này là đem so sánh từng cặp giá trị của 2 số, sau đó tùy theo giá trị trả về.

Nếu trả về số âm    -> phần tử  `a` nhỏ hơn `b`.
Nếu trả về số dương -> phần tử  `a` lớn hơn `b`.
Nếu bằng 0          -> phần tử  `a` bằng `b`.

Áp dụng nguyên tắc trên mình sẽ viết một hàm `doSort` nhận hai tham số đầu vào là `a` và `b`. sau đó thực hiện so sánh bằng cách trả về giá trị `a - b`.

Ví dụ:
a = 40; b = 50
Vì a - b = -10 nên a < b;

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(doSort); // [1, 5, 10, 25, 40, 100];

function doSort(a,b) {
  return a - b;
}
```

> Chú ý viết `points.sort(doSort);` là cách viết theo kiểu đối số là một hàm, các bạn có thể đọc phần JavaScript Callback ở mục dưới để hiểu rõ hơn về phong cách viết này.

Áp dụng tư tưởng trên chúng ta có thể cải tiến hàm trên để sắp xếp mảng sinh viên theo điểm tăng dần như sau.

```javascript
var students = [
  { name : 'Student A', points : 85 },
  { name : 'Student C', points : 56 },
  { name : 'Student K', points : 63 },
  { name : 'Student E', points : 71 },
  { name : 'Student F', points : 25 },
];

function doSortStudent(a,b) {
  return a.points - b.points;
}

students.sort(doSortStudent);

for(student in students) {
  console.log(students[student].points);
}
```


### 2.3 Hàm ( Function )

Việc sử dụng hàm không còn xa lạ gì với kỹ thuật lập trình, trong JS việc khai
báo một hàm có thể thực hiện như sau.

#### 2.3.1 Khai báo

```javascript
function addTwoNumbers(a,b) {
  return a + b;
}
```
Trong đó `function` là từ khóa khai báo hàm. `addTwoNumbers` là tên hàm,
`(a,b)` là danh sách đối số. `return` là từ khóa trả về giá trị hàm đồng thời cũng thoát khỏi hàm đó.

#### 2.3.2 Gọi một hàm ra sử dụng.
Để gọi hàm chúng ta đơn giả sử dụng cặp dấu ngoặc tròn `()` kèm bên theo danh
sách đối số nếu có.

```javascript
function addTwoNumbers(a,b) {
  return a + b;
}

// Gọi hàm
addTwoNumbers(5,3) // trả về 8
```

#### 3.3.3 Callback trong JavaScript

**a. Khái niệm và cách tiếp cận**

Trong khi làm việc với JavaScript bạn sẽ rất tường xuyên nghe đến khái niệm Callback.Callback có thể hiểu là việc bạn truyền vào một hàm khác tạm gọi là B đối số là một `function` tạm gọi là A. Sau đó việc triệu gọi function A bạn truyền vào sẽ phụ thuộc function B kìa.

Callback ở đây là gọi ngược, tức là cái function này gọi ngược lại function kia.

Để dễ hiểu hơn mình sẽ đưa ra ví dụ sau.

Giả sử yêu cầu bạn viết một hàm mở cơ sở dữ liệu và tìm kiếm một sinh viên theo `ID`, đồng thời xử lý 3 trường hợp đó là
1. tìm thấy sinh viên
2. không tìm thấy sinh viên
3. Xảy ra lỗi nào đó (như mất kết nối, ...)

Thì với yêu cầu trên thì có bạn sẽ viết theo kiểu là hàm `find` sẽ trả về  `object` nếu tìm thấy hoặc `null` nếu không tìm thấy, và đồng thời ném ra ngoại lệ nếu gặp lỗi.

Mình sẽ viết mô phỏng code như sau.

```javascript
function findStudentByID(id) {
  if(!id) throw new Error('id param is undefined !');

  try {
    /**
    * Tìm kiếm gì đó ở đây, nếu thầy thì trả về student
    * nếu không thì trả về null.
    */
  } catch (error) {
    // Nếu gặp bất kỳ lỗi nào thì ném ra.
    throw error;
  }
}

// Gọi hàm để dùng phải sử dụng try-catch để bắt lỗi.

try {
  var _result = findStudentByID(5);

  if(!_result) {
    console.log('Student not found');
  } else {
    console.log('Found student.');
  }
} catch (e) {
  // Gọi hàm để xử lý lỗi ở đây. có thể dựa trên mã lỗi
  // e.code === 400 => notFound
  // e.code === 500 => error
  console.error(e);
}
```

Qua đoạn code trên thấy nhiều hạn chế như là.
1. Code không đẹp, không rõ ràng vì có nhiều try-catch.
2. Tại lúc catch khi dùng hàm `findStudentByID` ta thấy phải if-else hoặc switch-case để xử lý lỗi trả về.

=> Nhìn chung là khá phức tạp.

Tuy nhiên nếu tiếp cận theo mô hình `callback` thì vấn để trên sẽ giải quyết như sau.

```javascript
function findStudentByID(id, success, notFound, error) {
  if(!id) error(new Error('id param is undefined !'));

  try {
    /**
    * Tìm kiếm gì đó ở đây, nếu thầy thì trả về student
    * nếu không thì trả về null.
    */
    if (nếu tìm thầy) {
      // Gọi function success với đói số vào chính là giá trị
      // student tìm thấy.
      success(student);
    }
    // Nếu không thì gọi notFound để xử lý không tìm thấy.
    notFound();
  } catch (e) {
    // Nếu gặp bất kỳ lỗi nào thì gọi error để xử lý lỗi.
    error(e)
  }
}

// Hàm xử lý khi tìm thấy.
function onSuccess(_student) {
  console.log('Found student !!!');
  console.log(_student);
}

// Hàm xử lý khi bị lỗi.
function onError(err) {
  console.log('Has error !!!');
  console.log(err);
}

// Hàm xử lý khi không tìm thấy.
function onNotFound() {
  console.log('Student not found !!!');
}

// Sử dụng.
findStudentByID(5,onSuccess, onNotFound, onError);
```

Qua cách tiếp cận callback trên các bạn có thể thấy ngay là mã lệnh bây giờ trở nên rất đẹp và dễ hiểu đúng không nào.

**b. Ứng dụng trong xử lý bất đồng bộ**

Không chỉ dừng lại ở việc design pattern như trên, callback còn được xử dụng và cũng chính là core của NodeJS.

Đầu tiên như thế nào là `xử lý đồng bộ`. Chúng ta có thể hình dung như sau, giả xử một hàm tìm sinh viên từ cơ sở dữ liệu như trên theo ID gồm các thao tác sau.

1. mở kết nối
2. thực thi tìm kiếm
3. trả kết quả

trong đó việc mở kết nối mất đến 10 giây vì mạng chậm, như vậy nếu theo xử lý đồng bộ thì tất cả các công việc sẽ phải dừng lại chờ đủ 10 giây để hàm trên làm xong và trả về kết quả thì mới thực thi tiếp được --> việc này dẫn đến chậm trễ do chờ tài nguyên.

cơ chế callback sẽ khắc phục được nhược điểm đó, xem đoạn code ví dụ dưới đây.

```javascript
function doSomethingCool(message, callback) {
  // Hàm này sẽ delay 10 giây.
  setTimeout(function callAfter10Sec() {
    // Sau 10 giây sẽ gọi callback với đối số message.
    callback(message);
  }, 10000);
}

doSomethingCool('Done', function onDone(message) {
  console.log('Callback :: ' + message);
});

console.log('Do something 1');
console.log('Do something 2');
console.log('Do something 3');
```

Qua đoạn code trên các bạn thấy rằng khối lệnh

```javascript
console.log('Do something 1');
console.log('Do something 2');
console.log('Do something 3');
```
không hề chờ mà thực thi luôn, sau đó 10 giây thì hàm `onDone` mới thực thi, nhờ đó tốc độ chương trình sẽ tăng rất nhiều.

**c. Lưu ý khi sử dụng callback**

khi viết mã bất đồng bộ, nghĩa là các bạn phải nắm rõ khi nào nó đồng bộ (có dữ liệu) để xử lý logic code cho đúng tránh bị lỗi. Ví dụ

```javascript
var message;

function handleData(data) {
  // do something when have data.
}

doSomethingCool('Done', function onDone(_data) {
  message = _data;
  console.log(message); // -> Done

  // Khi có dữ liệu mới gọi hàm xử lý.
  handleData();
});

// Tại đây không có dữ liệu nên phải chú ý.
console.log(message); // -> undefined
```

Các bạn thấy nếu các bạn log message ra ở ngoài hàm callback thì tại đó không có dữ liệu.

Ngoài ra khi lạm dụng callback thì sẽ trở thành 'callback hell' địa ngục callback ám chỉ việc gọi lồng quá nhiều callback gây rối, ví dụ

```javascript
var message;

function handleData(data) {
  // do something when have data.
}

doSomethingCool('Done', function onDone(_data) {
  // Khi có dữ liệu mới gọi hàm xử lý.
  handleData(_data, function cb1(_data) {
    cb2(_data, function cb3(_data) {
      cb4(_data, function cb5(_data) {
        cb6(_data, function cb7(_data) {
          cb8(_data, function cb0(_data) {
            // Và còn nhiều hơn nữa.
          });
        });
      });
    });
  });
});
```

Thật kinh khủng nếu phải đọc đoạn code trên đúng không nào, thì mình sẽ gọi ý một từ khóa đó chính là `promise` nó sẽ giúp xử lý việc `callback hell` ở trên. Trong phạm vi bài học này mình sẽ không đề cập, tuy nhiên mình sẽ nói ở một bài học khác về việc

`áp dụng promise trong xử lý callback hell`.


## Các cấu trúc câu lệnh thường gặp

Trong ví dụ này chỉ ra các câu lệnh cơ bản hay gặp trong lập trình Node JS.

## I. Vòng lặp for

Trong Node JS vòng lặp có thể được khai báo như sau.

```javascript
for(var i=0; i<= 5; i++) {
  console.log(i);
}
```

Ở ví dụ trên là biểu thức vòng lòng giống như ngôn ngữ lập trình C hay C++.
Ngoài ra con có nhiều kiểu khác như là :


#### 1. Loop in

```javascript
var arrays = ['A', 'B', 'C', 'D', 'E'];

for(var item in arrays) {
  console.log(arrays[item]);
}
```

Đây đơn giản là một biến thể của vòng for loop ban đầu. Lúc này chúng ta không cần tăng biến điếm nữa, mặc định `item` sẽ giữ giá trị index của mảng, vì vậy khi cần truy xuất giá trị một phần tử của mảng ta đơn giản dùng `arrays[item]`


#### 2. For loop

```javascript
arrays.forEach(function onEachItem(_item) {
  console.log(_item);
});
```

Đây là một method hỗ trợ trong ES5, giúp cho việc tương tác với mảng trở nên thuận tiện hơn.

Chú ý: `forEach` là một hàm bất đồng bộ, nghĩa là nó không theo thứ tự dòng lệnh trên mã.

Ví dụ:

```javascript
arrays.forEach(function onEachItem(_item) {
  console.log(_item);
});
console.log('It will call before loop print console done.');
```

Theo suy nghĩ thông thường thì lệnh `console.log` thứ hai sẽ in ra sau, tuy nhiên như nói trên hàm forEach là bất đồng bộ nên nó sẽ chạy ra trước khi hàm forEach in xong giá trị ra console.

# II. Câu lệnh If Else

```javascript
function isMorning(time) {

  if(!time) return false;

  if(time === 'morning') {
    return true;
  }
  else {
    return false;
  }
}
```

# III. Câu lệnh Switch Case

Sử dụng để thực hiện một tập lệnh rẽ nhánh dựa trên một biểu thức đầu vào.

```javascript
switch (time) {
  case 'morning': {
    console.log('Good Morning.');
    break;
  }

  case 'afternoon': {
    console.log('Good afternoon.');
    break;
  }

  case 'evening': {
    console.log('Good evening.');
    break;
  }

  default: {
    console.log('I dont know.');
  }
}
```

# IV. Thao tác với JSON

Trong Node JS, làm việc với dữ liệu định dạng JSON là việc thường xuyên gặp. Như là xử lý dữ liệu trả về từ API hay việc làm việc với Cơ sở dữ liệu Mongo DB.

Ví dụ: Dưới đây, mình sẽ định nghĩa một object đơn giản với ba thuộc tính là name, age và job. Sau đó mình sẽ thực hiện lần lượt hai việc là

1. Chuyển đổi từ Objet sang chuỗi JSON.
2. Chuyển đổi từ chuỗi JSON sang Object.
3. Bắt ngoại lệ khi đầu vào của việc chuyển đổi là không hợp lệ.

> Trong khi chuyển đổi qua lại JSON , bạn nên nhớ try-catch vì rất dễ xảy ra
> lỗi gây sập chương trình.


```javascript
// JS object define.
var object = {
  name : 'Person A',
  age : 20,
  job : 'Developer'
};


// Cover object to JSON string.
var JSONStr = JSON.stringify(object);
console.log('Should be string :', typeof JSONStr === 'string');


// Cover JSON string to object.
var _object = JSON.parse(JSONStr);
console.log('Should be object: ', typeof _object === 'object');

// Catch exception when on invalid input data.
try {
  JSON.parse('THIS IS NOT JSON STRING, WILL FIRE ERROR !!!');
} catch (e) {
  console.log('Should have error on invalid input: ', e !== undefined);
}
```

# Kết bài

Nhưng vậy qua bài học này Quyền đã giới thiệu cho các bạn sơ qua về những kiến thức
thường gặp khi làm việc với ngôn ngữ lập trình JavaScript. Bao gồm cấu trúc chương trình, các kiểu dữ liệu và các thao tác trên từng kiểu dữ liệu.

Ngoài ra các bạn còn cần nắm thêm các cấu trúc lệnh cơ bản của JS như vòng lặp(for, do while, while), các lệnh rẽ nhánh (Switch-case, if-else) để có thể thực hiện các thuật toán trên dữ liệu.

Đà Nẵng, Ngày 1 tháng 10 năm 2017.

Nguyễn Hữu Quyền
