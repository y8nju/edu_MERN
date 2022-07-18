## acount
---
* signin
* signup
* signComplete

## user
---
* myinfo
* info 
  * 수정하기
  * 내 글 보기
  * 탈퇴하기
  * 로그아웃
* 

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

### DB 작업을 위한 데이터 모듈 작성
---

### 추가
---
* 디렉토리 정리
