Chào các bạn đây là bài học đầu tiên của chúng ta với Git. Trong bài học này chúng
ta sẽ học bằng một câu chuyện kể về một nhóm gồm 3 bạn là Minh, Linh và Vũ (Team DevStory) có một dự án làm một trang web tính toán đơn giản bằng HTML và Javascript. Với bạn Minh là trưởng nhóm. Và câu chuyện bắt đầu.

Vào một ngày đẹp trời, sau khi cả ba đã thống nhất về ý tưởng xây dựng một ứng dụng
đơn giản với các tính năng yêu cầu trong Sprint 1 theo mô hình Scrum là

1) Thiết kế giao diện bằng PS
2) Tạo trang chủ ứng dụng
3) Có form nhập vào hai số và chọn phép tính sau đó tính toán và hiển thị
ra màn hình


Ở trên là hai product backlog, không thể để như vậy để làm mà phải phân rã thành
các task nhỏ hơn rồi estimate xem làm bao lâu, và thế các bạn ấy tách ra như sau

1) Thiết kế giao diện bằng PS (tổng 5)
+ Thiết kế trang chủ (3)
+ Thiết kế form nhập số để tính toán (2)

2) Tạo trang chủ ứng dụng (tổng 8)
+ Tải và cài đặt bootstrap (1)
+ Tạo header, footer (3)
+ khởi tạo layout trang chủ (2)
+ Hoàn thiện trang chủ với các thành phần đã có (2)

3) Có form nhập vào hai số và chọn phép tính sau đó tính toán và hiển thị
ra màn hình (tổng 7)
+ Tạo giao diện form bằng HTML với CSS của bootstrap (3)
+ Viết mã lệnh JS thực hiện tính toán và ghi lên form (2)
+ Gắn kết HTML với JS để hoàn thiện Form (2)

Sau khi gán xong số points cho mỗi backlog thì sẽ tiến hành quy đổi thành giờ làm
việc, nếu team quy ước một point là 1 giờ công thực tế thì Sprint 1 trên sẽ 15 points tương ứng với 15 giờ làm việc.

Xong, đến đây team thống nhất với việc phân rã task của mình, đến bước tiếp nhóm
trưởng Minh quyết định sẽ dùng Git để quản lý mã nguồn dự án, vì team có đến 3 người không thể dùng cách thử công được.

Nhóm trưởng Minh quyết định dùng một Cloud Git Server để cho cả Team dùng, tuy nhiên
lại phân vân giữa hai nhà cung cấp lớn là Github và Bitbucket.

Github hoàn toàn miễn phí nếu team chấp nhận public mã nguồn ra cho cộng đồng, ngược lại Bitbucket lại cho Team bí mật mã nguồn nhưng lại giới hạn ở mức 5 thành viên, trên đó là phải trả phí để mở rộng thành viên.

Suy nghĩ một hồi, nhóm trưởng Minh quyết định sử dụng Github cho project của Team mình.


Và thể là cậu ấy phải đi đến việc tạo một Remote repository trên Github.

# 1. Tạo mới một Repository trên Github

Sau khi đăng nhập vào Github thành công, chúng ta làm theo các bước như sau

1) Chọn vào menu user góc phải trên -> Profile
2) Tại trang profile chọn tab Repository
3) Nhấp vào nút **New**

Tại đây bạn điều vào tên project, nhớ điền ngắn gọn rõ nghĩa, điề n phần mô tả, chọn
kiểu public hay privite nếu public thì miễn phí , private thì sẽ bị trả phí.

Kế đến chọn mẫu .gitignore cho project, giả sử bạn viết bằng Java thì sẽ chọn Java, Github sẽ tự động add thêm file này vào project cho bạn.

Trong trường hợp Team DevStory thì dùng JS và HTML nên nhìn chung là ban đầu không
cần tệp tin này, Team sẽ tự add vào sau khi cần thiết.


Cuối cùng nhấp nút tạo, và bạn Minh đã có một remote repo trên Github cho team sử dụng.

Đường dẫn Repo sẽ là như sau

https://github.com/nghuuquyen/simple-calculator.git


Sau khi tạo xong repository trên Github, cậu ấy tiến hành khởi tạo cấu trúc Project
như sau.

```sh
.
└── simple-calculator
├── css
├── js
├── index.html
└── README.md
```

# 2. Khởi tạo Git cho một project đã tồn tại

Để khởi tạo Git cho một project, đầu tiên ta đi vào thư mục gốc project đó. Theo
trên chính là **simple-calculator**.

**Mở terminal lên hoặc CMD, từ đây mọi câu lệnh sẽ tương tác thông qua terminal hết nha**

Đầu tiên trong terminal, di chuyến đến thư mục gốc của project.

```sh
cd /simple-calculator
```

Sau khi đã ở trong thư mục gốc project, dùng lệnh sau

```sh
git init
```
Lúc này Git sẽ tự động tạo cho chúng ta thư mục .git để lưu trữ thông tin.

Nhưng vậy bạn Minh đã khởi tạo được Git thành công cho một project.


# 3. Kết nối Local repository với remote repository

Lúc này bạn Minh phải giải quyết vấn đề là kết nối local repo mà bạn ấy vừa khởi
tạo ở bước trên với remote repo đã tạo ở phần 1 trên Github. Đó gọi là thao tác
**add remote**

Đầu tiên chạy thử lệnh sau

```sh
git remote -v
```

và kết quả sẽ báo về là trống trơn vì chưa có remote repo nào cả. Sau đó ta tiến hành chạy lệnh sau để thêm mới một remote repo.

```sh
git remote add origin https://github.com/nghuuquyen/simple-calculator.git
```

Trong đó **origin** là tên của remote bạn đặt, origin là một tên chuẩn để chỉ remote gốc của project, sau này bạn có thể add thêm nhiều remote khác nếu muốn.
Kế đến là đường dẫn đến remote repo trên github mà bạn đã tạo trước đó.


Sau khi thực hiện xong lệnh trên thì bạn một lần nữa thử lệnh sau.


```sh
git remote -v
origin	https://github.com/nghuuquyen/simple-calculator.git (fetch)
origin	https://github.com/nghuuquyen/simple-calculator.git (push)
```

Như trên các bạn thấy rằng remote origin đã được chỉ định để fetch và push code.

Sau đó chúng ta tiến hành thực hiện commit đầu tiên để lưu trữ cấu trúc project đã tạo và đẩy lên Remote repo.

# 4. Kiểm tra trạng thái các tệp tin và nhánh hiện hành trước khi commit

Trước khi commit thì bạn cần kiêm tra xem tình trạng các file như thế nào.

Dùng lệnh `git status` để xem tình trạng file và nhánh hiện hành

```sh
git status
On branch master

Initial commit

Untracked files:
(use "git add <file>..." to include in what will be committed)

README.md
index.html

nothing added to commit but untracked files present (use "git add" to track)
```

Bạn thấy rằng có hai file là README.md và index.html đang bị trạng thái untracked.
Lúc này như bài học trước, bạn phải dùng lệnh `git add` để đẩy nó vào trạng thái
**staged**. Ta làm lân lượt từng lệnh như sau

```sh
git add README.md
git add index.html
```

Lúc này dùng lệnh `git status` một lần nữa để kiểm tra và ta thấy kết quả như sau

```sh
git status
On branch master

Initial commit

Changes to be committed:
(use "git rm --cached <file>..." to unstage)

new file:   README.md
new file:   index.html
```

Hai file mới đã vào trạng thái staged. Và là một file hoàn toàn mới. Ngoài ra bạn có thể kiểm tra branch hiện tại theo cách sau, dùng lệnh `git branch` nhưng nếu
trong lần đầu tiên bạn sẽ không thấy branch nào hết vì bạn đang dùng branch mặc định của Git là master.

# 5. Commit đầu tiên

Sau khi đã kiểm tra mọi thứ và add những file cần thiết vào trạng thái staged để sãn sàng commit thì bạn sẽ bắt đầu commit thử lần đầu tiên.

**Chú ý** : Mình nói những file cần thiết là vì những file không staged thì sẽ không được lưu vào repo khi ta commit.

Để commit ta dùng lệnh sau `git commit` cụ thể

```sh
git commit -m "Initial project struct"
[master (root-commit) d1a1956] Initial project struct
2 files changed, 0 insertions(+), 0 deletions(-)
create mode 100644 README.md
create mode 100644 index.html

```

Với chỉ định -m theo sau đó là một văn bản bỏ trong dấu nháy kép, đó chính là commit message, hay nói ngắn gọn commit này làm gì , có ý nghĩa gì.

để ý **d1a1956** chính là mã của commit này, sau này với mã này bạn có thể xem lại commit lần này tương tác hay thay đổi những file nào.


Sau đó ta thử dùng lệnh `git log` để xem lại lịch sử commit nào

```sh
git log
commit d1a1956b1c06ac95201726c9aa5a457db492cf01
Author: Quyen Nguyen Huu <nghuuquyen@gmail.com>
Date:   Sat Oct 21 14:31:41 2017 +0700

Initial project struct

```

Như trên ta thấy rõ mã commit, tên tác giả, ngày giờ và nội dung commit. Và đến đây
chúng ta đã commit thành công rồi.


tiếp theo đó là làm thế nào để đẩy mã nguồn của chúng ta lên remote git repo ở github


# 6. Đẩy mã nguồn từ một nhánh ở local repo lên remote repo

Đầu tiên trước khi đẩy, chúng ta phải hiểu là đẩy code, tức là đẩy mã nguồn từ một nhánh ở local lên một nhánh ở remote, thường thì đây là một nhánh tương ứng với nhánh ở local.

Trong lần này, chúng ta đang ở trên branch master ở local và muốn đẩy code lên nhánh master ở remote repo. Chúng ta dùng lệnh sau

```sh
git push origin master
```

Với origin chính là tên của remote repo chúng ta đã thêm vào ở bước trước. Và master là tên nhánh.

**Lưu ý** master tức là ngầm hiểu local branch và remote branch cùng tên. Trong trường hợp local branch khác tên với remote branch thì bạn phải chỉ rõ tên của local và remote branch bằng cách ghi là local-master:master. Đây là một kỹ thuật
khác mình sẽ có bài viết nâng cao nói về cài này. Thông thường bạn nên push code từ một nhánh local cùng tên là dễ hiểu nhất.


```sh
git push origin master
Username for 'https://github.com': nghuuquyen
Password for 'https://nghuuquyen@github.com':
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 242 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/nghuuquyen/simple-calculator.git
 * [new branch]      master -> master
```

Sau khi gõ lệnh bạn sẽ phải nhập username và password (Chú ý nó là ẩn không hiện lên nên bạn cứ gõ mật khẩu đúng vào và enter nhé).

để ý 2 dòng cuối, bạn sẽ thấy đường dẫn của remote repo và dòng cuối ghi là
đã tạo mới trên repo repo nhánh master mới, và ta đã push từ local master đến
remote master.

Lúc này mở github lên ở đường dẫn của remote repo và reload lại. Bạn sẽ thấy mã nguồn của mình đã ở trên github.


Cuối cùng để thử lấy tất cả các nhánh trên remote repo về, bạn dùng lệnh `git fetch`. và sau đó thử xem lệnh `git branch`

```sh
git fetch
git branch
* master
```

Và kết quả trả về là bạn đang ở trên nhánh master. Để kiểm tra tình trạng các nhánh ở local với master bạn dùng lệnh `git remote show origin`

```sh
git remote show origin
* remote origin
  Fetch URL: https://github.com/nghuuquyen/simple-calculator.git
  Push  URL: https://github.com/nghuuquyen/simple-calculator.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

Kết quả trả về là sẽ liệt kê danh sách tất cả các remote và repo cho mỗi remote tương ứng, trong remote origin các bạn để ý là nhánh master ở local đã ghi là `up to date` nghĩa là đã là bản mới nhất so với nhánh master ở trên remote repo. Vậy là code trên nhanh của bạn đã là mới nhất rồi. Thường thì lệnh này để bạn có cái nhìn tổng quát về  thay đổi ở tất cả các nháy nếu có để cập nhật code về.

Giả sử nếu có thay đổi bạn có thể cập nhật tất cả bằng lệnh `git fetch`.


# 7. Một bạn khác trong team tải mã nguồn về để làm việc

Sau khi xong bước trên, thì đến bước này bạn trưởng nhóm Minh, sẽ rút điện thoại ra nói mọi người là mình đã đẩy code lên github rồi, mọi người lên lấy về xem nhé.


Vậy làm sao để một bạn khác trong team lấy được mã nguồn về  ?

Rất đơn giản, ta sẽ dùng lệnh `git clone`

Để giả lập việc này, bạn có thể tạo một thư mục nào đó ở ngoài thư mục **working directory** hiện tại của project mà bạn đang làm việc để thử việc clone.

Ví dụ mình tạo mới một thư mục là **test-clone-app** để giải sử cho việc minh đang ở một máy tính khác. Bạn vào thư mục mới tạo này, mở terminal lên và gõ vào đó lệnh sau.

```sh
git clone https://github.com/nghuuquyen/simple-calculator.git
```

Và kết quả là

```sh
Cloning into 'simple-calculator'...
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
```  

Để ý ta thấy rằng theo sau lệnh git clone chính là URL của remote repo trên github.

Sau khi clone thành công thì bạn đã có source code của project mà trưởng nhóm Minh đã tạo để làm việc rồi. Toàn bộ source code của project sẽ ở trong thư mục
**/test-clone-app/simple-calculator**


# 8. Làm thể nào để một bạn khác trong Team có thể đẩy code lên remote repo

Mặc định ban đầu chỉ người tạo repo mới có thể tự do đẩy code lên repo mình tạo. Để một bạn khác có thể đẩy code của mình làm vào remote repo thì có hai cách.

1) Thêm bạn ấy vào danh sách người dùng được cấp phép đẩy code vào remote repo.
2) Bạn kia phải folk ra một repo khác và tự đẩy code lên repo của mình, sau đó tạo pull request về remote repo gốc.

Ở trên thì cách 2 là cách nâng cao, thường dùng cho các open source project để cộng đồng có thể đóng góp cho một project, mình sẽ bàn đến ở bài học khác. Ở bài này mình chọn cách dễ nhất đó là bạn Minh trưởng nhóm sẽ cấp quyền push code cho các member của mình là Linh và Vũ.


Để có thể cấp quyền cho người dùng khác vào repo của mình trên github các bạn làm
như sau

1) Vào trang chủ repo của mình (Khi đã đăng nhập vào tài khoản tạo ra repo ấy).
2) Vào tab settings --> Mở thẻ Collaborators --> Nhập lại mật khẩu nếu bị yêu cầu
3) Điền vào ô username hoặc email của team member và nhấn vào nút add.
4) Gọi điện thoại nói team member đăng nhập email đã đăng ký với github để chấp thuận yêu cầu.
5) Sau khi member kia chấp thuận yêu cầu member đó đã có quyền đẩy code lên repo

Việc quản lý thành viên trong repo, bạn có thể quản lý trong settings/Collaborators


Tới đây là bạn đã cấp quyền thành công, giờ tiếp theo là chúng ta thử nghiệm đẩy code lên remote repo với tài khoản khác xem nào.


# 9. Làm việc với remote repo trên tài khỏan của thành viên (Collaborators)

Giờ chúng ta lại vào thư mục test-clone-app đã tạo ở trước để giả lập việc,làm việc
ở một máy tính của bạn khác, trên tài khỏa github của bạn ấy.

Giả sử ở đây là bạn Linh,

Đầu tiên vào lại thư mục test-clone-app và mở terminal lên. di chuyển đến thư mục project bằng lệnh `cd /simple-calculator`. Thử kiểm tra lệnh `git branch` nếu trả
về là master tức là bạn đã ở đúng thư mục project.

Lúc này bạn thử tạo một thư mục css và tạo file style.css ở thư mục đó

```sh
.
├── css
│   └── style.css
├── index.html
└── README.md
```

Cấu trúc thư mục sẽ như sau, Sau đó bạn sẽ dùng lệnh git add để đẩy file vào trạng thái staged.

```sh
git add css/style.css
```

Chú ý để add tất cả các file và thư mục đang được tracked hoặc những tệp tin mới tạo thì bạn có thể dùng lệnh `git add .`. Ở ví dụ của Minh, dù đã tạo thư mục css và js nhưng chưa add vào cho git biết nên lúc commit hai thư mục này sẽ không được thêm vào, đó là lý do là lúc này ở máy tính của bạn khác, ta clone về sẽ không thấy hai thư mục này.


Sau khi đã add thì ta commit code.

```sh
git commit -m "Create style.css for homepage"
[master 63e81ec] Create style.css for homepage
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 css/style.css
```

và cuối cùng là `git push` để đẩy code lên nhánh master ở remote repo trên github.

```sh
git push origin master
Username for 'https://github.com': sociss-education
Password for 'https://sociss-education@github.com':
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 351 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/nghuuquyen/simple-calculator.git
   d1a1956..63e81ec  master -> master
```

mình dùng lệnh `git push origin master`, và tài khoản mình dùng là **sociss-education** đay là tài khoản mà mình đã cấp quyền. Và như trên code đã được đẩy lên thành công từ tài khoản sociss-education.


Mở github lên và kiểm tra,lúc này chắc chắn bạn sẽ thấy cập nhật mới nhất có tệp tiên css/stylt.css


# 10. Thiết lập thông tin cá nhân chủ sở hữu cho local repo

Lúc này có một điều đặc biệt mà các bạn có thể thấy là nếu sử dụng lệch `git log`

bạn sẽ thấy lịch sử như sau.


```sh
git log
commit 63e81ec01f9cbf36c60bb69a8dc4deeb285e946e
Author: Quyen Nguyen Huu <nghuuquyen@gmail.com>
Date:   Sat Oct 21 15:42:51 2017 +0700

    Create style.css for homepage

commit d1a1956b1c06ac95201726c9aa5a457db492cf01
Author: Quyen Nguyen Huu <nghuuquyen@gmail.com>
Date:   Sat Oct 21 14:31:41 2017 +0700

    Initial project struct

```

Để ý commit mới nhất là **Create style.css for homepage** lại ghi là tác giả là
Quyen Nguyen Huu <nghuuquyen@gmail.com> dùng cho mình đăng nhập và commit bằng tài
khoản **sociss-education**. Nguyên do là vì do **git config** của máy tính bạn đang cài mặc định tài khoản Git cho máy tính này là Quyen Nguyen Huu và địa chỉ email là nghuuquyen@gmail.com

Để thay đổi thì bạn sẽ chạy lần lượt hai lệnh sau nhưng thay vào đó tên và email của bạn nhé.

```sh
git config --global user.name "Nguyen Huu Quyen"
git config --global user.email nghuuquyen@gmail.com
```

Và khi đó mọi commit sau này sẽ lấy thông tin tác giả là theo thiết lập đó.



# Kết luận và nhận xét

Qua bài học này mình đã hướng dẫn được cho các bạn các nội dung sau

1) Cách tạo một repository trên github
2) Cách thực hành lệnh clone, commit, add, branch và push
3) Cách cấp quyền cho một tài khoản để đẩy code lên remote repo github


Trong bài học tiếp theo mình sẽ hướng dẫn cách làm việc trên các nhánh khác nhau để
thực hiện các task mà mình đã chia ra ở đầu bài. Các bài học này sẽ liên kết với nhau nhé.


# Bài tập về nhà

Hãy đọc theo nội dung bài học và thử tạo một repo riêng cho mình, và tìm hiểu trước
cách tạo nhánh và merge để chuẩn bị cho bài học sau.


# Tác giả

**Name:** Nguyen Huu Quyen ( Nguyễn Hữu Quyền )

**Email:** nghuuquyen@gmail.com

**Website:** [Sociss Class - Online Education Center](https://sociss.edu.vn/)

**Profile Page:** [Nguyen Huu Quyen - Profile Page ](https://sociss.edu.vn/users/nghuuquyen)
