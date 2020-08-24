# HIPCE 프론트엔드
### 프로젝트 소개
* Mood Narrative 메이크업 브랜드 hince 웹사이트를 clone한 프로젝트입니다.
## 프로젝트 참가자 (프론트 엔드)
* <a href ="https://github.com/wecode-bootcamp-korea/11-Hipce-backend">Back-end</a>
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

## 적용기술
* HTML/CSS
* JavaScript
* Team Project Set-up with CRA
* React(Class)
* React(Router)
* Scss
## 구현기능
* 특정 조건에서 로그인 기능 활성화
* 댓글 생성/삭제 기능
* Mock data 활용한 Component 생성 및 재활용
## 구현화면
## 주의사항
* 클래스명은 카멜케이스로 통일한다. (Ex. className: helloWorld)
* 함수명은 동사로 한다.
* 푸시할 때 컨벤션 지킨다. (Ex. 불필요한 주석 및 console.log 등 삭제)
## Git reference[git flow]
초기 세팅된 git repository clone하기
git clone https://github.com/wecode-bootcamp-korea/11-WeCha-frontend.git

master branch에서 feature 브랜치 만들고 checkout하기
git branch feature/페이지 or 기능

git checkout feature/페이지 or 기능

자기 브랜치에서만 작업하기(Master는 신성불가침의 영역이라고 합니다 하하)

작업 완료 후에 바로 add commit push를 하는 게 아니라 github을 확인한 후 master 브랜치가 update되었는지 확인하기(update가 되었다면 5번부터 읽기, 안되었다면 8번부터 읽기)

만약 master 브랜치가 update되었다면(혹시나 혹시나 common.scss가 update되었다면?!) master 브랜치로 checkout하기

git checkout master

update된 코드 다운로드 받기
git pull origin master

feature 브랜치로 다시 이동해서 master branch merge하기
git checkout feature/페이지 or 기능

git merge master

자기 코드에 이상이 없는지 확인 후에 add, commit, push 하기
git add .

git commit -m "ADD : 적용된 내용"

git push origin feature/페이지 or 기능

github에서 PR(Pull Request) 보내기

다시 3번부터 무한 반복...
