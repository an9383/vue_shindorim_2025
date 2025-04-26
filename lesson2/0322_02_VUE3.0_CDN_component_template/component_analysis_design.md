## 컴포넌트(Component) 분석 설계
### 1. 홈페이지 기본 구성
- 헤더 header
- 메인 main
- 푸터 footer

### 2. 컴포넌트 생성 네이밍 규칙
- 컴포넌트 네이밍 규칙 : 파스칼 케이스

## 3. 홈페이지 구성
```HTML
  <div id="wrap">
    <header id="header"></header>
    <main id="main">
      <section id="section1"></section>
      <section id="section2"></section>
      <section id="section3"></section>
    </main>
    <footer id="footer"></footer>
  </div>
```

### 4. Vue CLI 전체구성
[public]
  index.html   #root
[src]
  index.js
    WrapComponent
    [wrap]
      HeaderComponent
      MainComponent
      [main]
        Section1Component
        Section2Component
        Section3Component
      SubComponent 
      [sub]
        Sub1Component 
        [sub1]
          Section1Component
          Section2Component
          Section3Component
        Sub2Component 
        [sub2]
          Section1Component
          Section2Component
          Section3Component
        Sub3Component 
        [sub3]
          Section1Component
          Section2Component
          Section3Component

      FooterComponent


## 5. 모듈 컴포넌트 생성과 구현
0. index.html => #root 생성
1. [js] 폴더 생성
2. [js] index.js 생성 
   - 돔컨테이너 #root 연결
   - 탬플릿트(template) 구성 태그요소 작성
3. index.html => index.js 호출 연동
4. WrapComponent.js
5. [wrap]
6. HeaderComponent.js
7. MainComponent.js
8. FooterComponent.js
9. [wrap] > [main]
        Section1Component.js
        Section2Component.js
        Section3Component.js





