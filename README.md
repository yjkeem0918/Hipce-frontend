# HIPCE 프론트엔드
### 프로젝트 소개 및 목적
* 소개: 메이크업 브랜드 hince 웹사이트를 clone한 프로젝트입니다.
* 목적
1. github을 이용하여 프로젝트를 공동으로 관리해 본다.
2. React를 사용하여 데이터 통신, 컴포넌트 분리 및 관리, 컴포넌트 간 데이터 바인딩을 적용해 본다.
3. Sass를 사용하여 컴포넌트 단위로 스타일을 적용하고 관리해본다.

## 프로젝트 참가자 (프론트 엔드)
* <a href ="https://github.com/wecode-bootcamp-korea/11-Hipce-backend">Back-end (김태하, 이태현)</a>
 <ul>
  <li>
    <a href ="https://github.com/sanghunlee-711">이상훈</a>
 </li>
   <li>
    <a href ="https://github.com/yjkeem0918">김영지</a>
 </li>
   <li>
    <a href ="https://github.com/jjo-niixx">이조은</a>
 </li>
   <li>
    <a href ="https://github.com/choaceb">조은별</a>
 </li>
</ul>

## 구현한 웹사이트 바로가기
https://www.youtube.com/watch?v=6vp3yAKCLMg

## 프로젝트 기간
* 약 2주 (2020.08.17 ~ 2020.08.30)

## 적용기술
* HTML/CSS
* JavaScript
* Team Project Set-up with CRA
* React(Class)
* React(Router)
* Scss

## 구현기능
* main/nav에서의 스크롤 이벤트
* 이미지 캐러셀
* 메뉴 탭
* map 함수를 이용한 컴포넌트 재사용
* URL Parameters를 활용한 동적 라우팅
* 특정 조건에서 로그인 기능 활성화
* 댓글 생성/삭제 기능
* Mock data 활용한 Component 생성 및 재활용

## 주의사항
* 코드의 가독성을 높인다 (Ex. 함수와 함수 사이는 한 줄 띄우기)
* 클래스명은 카멜케이스로 통일한다. (Ex. className: helloWorld)
* 함수명은 동사로 하고 함수 기능에 대한 내용이 드러날 수 있게 한다. (Ex. ~~functionThree~~ getIdValue) 
* 푸시할 때 컨벤션 지킨다. (Ex. 불필요한 주석 및 console.log 등 삭제)

## Git reference[git flow]
### 1. 초기 세팅된 git repository clone하기
`git clone https://github.com/wecode-bootcamp-korea/11-Hipce-frontend.git`

### 2. master branch에서 feature 브랜치 만들고 해당 브랜치로 checkout 하기
`git branch feature/페이지 or 기능`

`git checkout feature/페이지 or 기능`

### 3. 자기 브랜치에서만 작업하기(master는 건드리지 않기로 한다)

### 4. 작업 완료 후에 바로 add commit push를 하는 게 아니라 github을 확인한 후 master 브랜치가 update되었는지 확인하기(update가 되었다면 5번부터 읽기, 안되었다면 8번부터 읽기)

### 5. 만약 master 브랜치가 update되었다면(혹시나 혹시나 common.scss가 update되었다면?!) master 브랜치로 checkout하기
`git checkout master`

### 6. update된 코드 다운로드 받기
`git pull origin master`

### 7. feature 브랜치로 다시 이동해서 master branch merge하기
`git checkout feature/페이지 or 기능`

`git merge master`

### 8. 자기 코드에 이상이 없는지 확인 후에 add, commit, push 하기
`git add .`

`git commit -m "ADD : 적용된 내용"`

`git push origin feature/페이지 or 기능`

### 9. github repo에서 PR(Pull Request) 보내기
