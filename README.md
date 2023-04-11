# 원티드 프리온보딩 프론트엔드

## 1. 배포 링크
https://todoapp2304.vercel.app/

## 2. 실행 방법
1. node package 설치
```
npm install
```
2. 프로젝트 실행
```
npm start
```

## 3. 기능 시연

#### 회원가입 & 로그인
![회원가입](https://user-images.githubusercontent.com/32917014/231179967-1e2b0ce1-bf20-4dd0-81e2-17e70a08549c.gif)

![로그인](https://user-images.githubusercontent.com/32917014/231180359-64453874-c1d2-45b2-ba97-87ba1bf58976.gif)

✅ Assignment 1
- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현
  - 이메일 조건: @ 포함
  - 비밀번호 조건: 8자 이상

✅ Assignment 2
- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동

✅ Assignment 3
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
  - 응답받은 JWT는 로컬 스토리지에 저장

✅ Assignment 4
- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트

#### Todo 목록
![TODO](https://user-images.githubusercontent.com/32917014/231180661-9e28c36b-fdba-48d8-822e-a8a501bb1882.gif)

✅ Assignment 5
- /todo경로에 접속하면 투두 리스트의 목록
- TODO의 내용과 완료 여부가 표시

✅ Assignment 6
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록
- 새로고침을 해도 추가한 TODO가 목록에 보여야 함

✅ Assignment 7
- TODO의 체크박스를 통해 완료 여부를 수정

✅ Assignment 8
- TODO 우측에 수정버튼과 삭제 버튼
  
✅ Assignment 9
- 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제

✅ Assignment 10
- 투두 리스트의 수정 기능을 구현
  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 함
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 함
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화

## 4. File Setting
📦src
 ┣ 📂components
 ┃ ┣ 📂core
 ┃ ┃ ┗ 📜page.js
 ┃ ┗ 📂todo
 ┃ ┃ ┗ 📜todoItem.js
 ┣ 📂configs
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┗ 📜todo.js
 ┃ ┗ 📜networkHandler.js
 ┣ 📂hooks
 ┃ ┗ 📜useAuth.js
 ┣ 📂pages
 ┃ ┣ 📜signin.js
 ┃ ┣ 📜signup.js
 ┃ ┗ 📜todo.js
 ┣ 📂stylesheets
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┗ 📜page.scss
 ┃ ┃ ┗ 📂todo
 ┃ ┃ ┃ ┗ 📜todoItem.scss
 ┃ ┗ 📜globals.scss
 ┗ 📜index.js



## 5. 라이브러리
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [sass](https://www.npmjs.com/package/sass)