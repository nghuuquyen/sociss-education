# Lab 4. Sociss To Do Application

Sau bài lab thứ 4 này chúng sẽ học được gì ?

1. Cách xây dưng một ứng dụng theo mô hình MVC.
2. Cách sử dụng javascript để xử lý HTML DOM.
3. Cách lưu trữ dữ liệu trực tiếp trên trình duyệt.
4. Cách để bắt sự kiện bàn phím của người dùng.

Sản phẩm của bài lab sau khi hoàn thành sẽ như bên dưới:

![Sociss to do application](socciss-todo-app.png)

Ok trên đây là tất cả nội dung của bài lab. Bắt tay vào thực hiện nào!!! Let's go!!!

## 1. Các chức năng và cách thực hiện

* Xây dựng ứng dụng To Do để quản lý các công việc hằng ngày của mình

* Người dùng có thể thay đổi trạng thái của todo bằng cách nhấp chuột vào todo đó.

-> Cách làm là chúng ta sẽ gán một hàm kích hoạt mỗi khi người dùng nhấp lên một
dòng của bảng dữ liệu todo, và đổi trạng thái của task từ `doing` thành `done` hoặc ngược lại.

* Khi người dùng nhấn tổ hợp phím `Ctrl + B` thì ứng dụng sẽ hiển thị ra danh sách
công việc chưa hoàn thành, sắp xếp theo thứ tự thời gian.

-> Cách làm là gán hàm xử lý sự kiện bàn phím mỗi khi người dùng nhấp đúng tổ hợp
`Ctrl + B` thì lấy từ dữ liệu todo ra các task có `status` là `doing`, sắp xếp theo
thời gian tăng dần rồi hiển thị.


## 2. Thực hành thôi nào.
Chúng ta sẽ xây dựng dựa trên mô hình MVC nên trước hết chúng ta sẽ xây phần view cho ứng dụng trước.

### 2.1 Mã lệnh cho phần view

* Mã lệnh HTML
```HTML
<div id="container">
  <div class="header">
    <h1>Task management</h1>
  </div>
  <form class="create-todo">
    <h3>Create To Do</h3>
    <div class="form-group">
      <label for="name">Name: </label>
      <input type="tẽt" name="name" id="name">
    </div>
    <div class="form-group">
      <label for="time-start">Time start: </label>
      <input type="time" name="time-start" id="time-start">
    </div>
    <div class="form-group">
      <label for="time-end">Time end: </label>
      <input type="time" name="name" id="time-end">
    </div>
    <div class="form-group">
      <button class="btn_create" type="button" onclick="submitNewTaskForm()">
        Create
      </button>
      <button class="btn_reset" type="reset">Reset</button>
    </div>
  </form>

  <div class="list-todo">
    <h3>list To Do</h3>
    <table class="tb-list-todo" id="tb-list-todo">
      <tr class="header-list-todo">
        <th>Name</th>
        <th>Time start</th>
        <th>Time end</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      <!-- Data add to here. -->
    </table>
  </div>
</div>
```
Chúng ta sẽ thêm thuộc tính **id** vào những những phần tử HTML mà chúng ta cần truy xuất để lấy và đổ dữ liệu vào bằng mã lệnh javascript.


## 3. Phần Model

Phần này chúng ta có 2 phần chính là sử dụng đối tượng localStorage để lưu và lấy dữ liệu từ trình duyệt.

Chúng ta sẽ sử dụng trình duyệt làm database để lưu các task của mình. và sử dụng đối tượng localStorage để truy xuất data:

```javascript
function saveTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

Hàm ở trên dùng để lưu dữ liệu vào trình duyệt, còn hàm bên dưới đây dùng để lấy dữ liệu ra từ trình duyệt để đọc.

```javascript
function getTasks() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  } catch(err) {
    return [];
  }
}
```

### 4. Phần Controller

Phần này chúng ta sẽ có hai phần chính:

**4.1 - Thêm một task mới**

```javascript
function submitNewTaskForm() {
  var task = getNewTaskFormData();

  try {
    // Validate data.
    validateTask(task);
    // Put task to database.
    saveTask(task);
    // Render to view table.
    addTaskToTable(task);
    // Reset view form.
    resetNewTaskForm();
  } catch(err) {
    window.alert(err.message);
  }
}
```

Chúng ta sẽ lấy thông tin từ form thông qua function getNewTaskFormData() bằng việc sử dụng đối tượng document để lấy gía trị của các phần tử HTML thông quá thuộc tính id.

```javascript
function getNewTaskFormData() {
  return {
    id : randomString(15),
    name : document.getElementById('name').value,
    timeStart : document.getElementById('time-start').value || null,
    timeEnd : document.getElementById('time-end').value || null,
    status : 'doing'
  };
}
```


Sau đó chúng ta sẽ kiểm tra xem dữ liệu form có hợp lệ hay không bằng việc gọi hàm validate().

Nếu kiểm tra thất bại thì hàm validate sẽ ném ra lỗi và hàm submitNewTaskForm sẽ bắt lỗi này và hiển thị lỗi này ra.

Nếu thành công thì chúng ta sẽ gọi hàm saveTask để lưu nó vào database(trình duyệt).

Cuối cùng chúng ta sẽ thêm nó vào bảng danh sách todo để hiển thị ra view và reset lại form data.


**4.2 - Lắng nghe sự kiện `Ctrl + B` của người dùng để hiển thị danh sách task chưa hoàn thành**

Trong Javascript chúng ta sử dụng sự kiện `keydown` khi chúng ta muốn lấy tên gọi của phím mà người dùng bấm. Ví dụ bạn nhấn phím `B`, bạn nhấn phím `C`.

Vì có một sự kiện khác là `keypress` dùng để lấy ký tự thật sự hiển thị ra màn hình khi người dùng nhấn phím đó. Ký tự khi dùng `keypress` sẽ phụ thuộc vào máy tính của mỗi quốc gia, ví dụ người Nhật khi gõ phím `B` thì sẽ không là chứ `B` mà có thể làm một ký tự nào đó tiếng Nhật chẳng hạn.

```javascript
function bindingHotKeyEvent() {
  document.addEventListener('keydown', function(e) {
    var evt = e ? e : window.event;

    // Ctrl + B
    if(evt.ctrlKey && String.fromCharCode(evt.keyCode) === 'B') {
      showDoingListTaskPopup();
    }
  });
}
```

Có ba phím đặt biệt mà Javascript đặc biệt sử lý riêng đó là `Ctrl` , `Shift` và `Alt` cái này gọi là những phím điều khiển, khi mà người dùng nhấn một trong 3 phím tên thì `evt.ctrlKey` hoặc `evt.altKey` hoặc `evt.shiftKey` sẽ trả về true. Nhờ vậy mà chúng ta có thể xác định được khi nào người dùng nhấp tổ hợp `Ctrl + B` bằng cách như trong đoạn mã trên.


### 5. Chạy thử ứng dụng

Tại một thư mục bất kỳ trên máy tính các bạn tạo ra 3 tệp tin `index.html`, `app.js`, `style.css` sau đó copy nội dung các file tương ứng trong thư mục lab-4 trên Github. Sau khi hoàn tất, các bạn chạy tệp tin `index.html` lên bằng trình duyệt là được.
