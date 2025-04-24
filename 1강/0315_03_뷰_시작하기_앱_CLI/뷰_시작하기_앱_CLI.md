# 뷰 시작하기 앱 CLI 프로젝트 순서
1. 프로젝트 작업 폴더 만들기  
2. 깃배쉬 터미널 => 뷰 CLI 설치 하기 
```bash
  npm i -g @vue/cli
```
3. 프로젝트 생성 하기
```bash
  vue create app
```
4. 프로젝트 실행 
```bash
  ls -la
  cd app
  npm run serve
```

5. 프로젝트 구조 확인, 수정 하기
6. 프로젝트 빌드(dist) 하기
```bash
  npm run build 
  에러발생 => 현재 위치가 app 위치로 이동 해야함.
  clear
  ls -la
  cd app
  npm run build
```
7. 프로젝트 빌드(dist) 내용 수정 하기
8. 닷홈에 배포하기
9. 웹사이트 띄우기