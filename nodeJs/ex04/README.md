## acount
---
* signin
* signup
  *  - [ ] 유효성 체크
* signComplete

## user
---
* myinfo 
  * - [ ] 수정하기
    * - [X] 프로필 이미지 수정
    * - [ ] 기본이미지로 변경
  * - [ ] 내 글 보기
  * - [ ] 탈퇴하기
  * - [ ] 로그아웃

## main

### 회원가입
---
**GET /signup | POST /signup** <br>
> /account 라우터에서 처리 <br>
> 
* {id, password, name, e-mail, contact(phoneNum), birthDay{year, month, date}}

### 로그인 인증
---
**GET /signin | POST /signin** <br>
> /account 라우터에서 처리
> 
* {id, password}
* post 일 때 유효한 사용자 일 때는 인증 처리

### 마이페이지
---
**GET /user**
> /user 라우터에서 처리 <br>
> /user 라우터는 인증받은 사용자만 올 수 있게 라우터에 미들웨어 설정

### 글쓰기 폼
---
**GET /article/home**<br>
> /article /upload 라우트
> 업로드 처리할 것 하고 /article/home 리다이렉트
**글쓰기 폼 요구사항**<br>
* 공개/비공개를 선택할 수 있어야 한다 (radio/checkbox<br>
* 글을 쓸 수 있는 공간이 있어야 한다 (textarea)
* 이미지를 첨부할 수 있어야 한다 (input type="file")
  form enctype="multipart/form-data"
  * 이미지 한 개 업로드 <br>
    multer.single
  * 여러개가 선택 될 수도 있다<br>
    multiple 👉 multer.array
* 미리보기 구현
  
### 글 목록
---
> /article/home에서 목록 출력 <br>
* 코맨트 갯수: comment.length를 출력

### 글 상세보기
---
> /article/view에서 출력
* 쿼리로 넘어온 articleID에 해당하는 문서 상세보기를 만들면 된다
* /article/home에서 개별 아티클 마다 <a href="/article/view?articleId=<%=elm._id.toString()"%>




### DB 작업을 위한 데이터 모듈 작성
---
* accounts
* articles
  >  { "writerId"  / "writerName"  /  "writerImage"   /  "type" / "message" (본문)    /   "createdAt" : Date.now()   등록일/  "attaches" (첨부된 이미지들의 URL) :   /  "comments" : [ 댓글들]   }
  > multiple로 등록시 attaches는 배열로 등록해야한다

### 추가
---
* 디렉토리 정리
* 헤더 분리해서 각 페이지에 맞춰서 css 별도로 링크하기
  ```
	<%- include("../common/header.ejs"),
   {css: 'css 링크'} %> 
  ```
* 푸터 분리하고, js 파일 별도 관리