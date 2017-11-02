# common-statements

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
