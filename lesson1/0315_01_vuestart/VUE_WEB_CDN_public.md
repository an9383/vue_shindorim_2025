## 뷰 프로젝트 작업 순서
1. 프로젝트폴더 만들기
2. VS CODE 실행 
3. 프로젝트폴더 열기
4. index.html 웹파일 만들기
5. ! 팁키 => HTML5 자동완성
6. 웹방식 CDN => MDN에서 복사사 붙이기
7. 뷰탬플릿 태그 생성
8. 뷰 인스턴스 생성
9. 스타일 생성


## 웹방식 CDN => MDN에서 복사사 붙이기
```HTML
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
## 1. 뷰 탬플릿 : HTML 태그
```HTML
    <!-- # 뷰 탬플릿 : HTML 태그 -->    
    <div id="app">
       <!-- 태그에 바인딩은 머스태쉬 수염 괄호{{}} 두개 사용 -->
        <!-- 태그 속성 Attribute 어트리뷰트 지정 v-bind  v-디렉티브 -->
      <h1 v-bind:title='title'>제목 : {{title}}</h1>
      <h2 :title='name'>이름 : {{name}}</h2>
      <p>
        <img 
          :src="image.src" 
          :alt="image.alt"
        >
      </p>
    </div>
```

## 2. 뷰 인스턴스 생성(뷰 컨트롤러): 자바스크립트
```HTML
 <!-- # 뷰 컨트롤러 : 자바스크립트 -->
    <script> 
      // 뷰 사용 선언 => 뷰 프로그램이 상단에 설치 되어야한다.
      // {} Object   한쌍 => 속성: 값
      // [] Array  
      // id="app" => #app
      // class="app" => .app
      new Vue({
        el: '#app',
        data: {
          title: '뷰 시작하기',
          name: '문선종',
          image : {
            src: './img/0aa14420-fcec-469d-80e8-11286881f5c3.jpg',
            alt: '마음 나누는 화이트데이 선물리스트'
          }
        } 
      });

    </script>

```

## 3. 뷰 UI : 스타일

```HTML
    <!-- # 뷰 UI : 스타일  -->
    <style>      
      /* Vue.js 프레임워크 프로그램 설치를 해야만 사용 가능*/
      #app {padding: 100px 0;text-align: center;}
      #app h1 {font-size: 5rem;color: #c66;}
      #app h2 {font-size: 3rem;color: #666;padding-top: 2rem;}
      #app p {
        padding: 50px 0;
        width:100%;
        max-width: 1000px;
        margin: 0 auto;
      }
      #app p img {width: 100%}
    </style>
```

## 배포 : 닷홈
- 배포 폴더 만들고 그리고 배포 폴더에 업로드 하기
> vue_web => [img], index.html
> moonjong8.dothome.co.kr/vue_web/


## 배포시 SSL 웹보안 인증서 발급
- 깃허브에 프론트앤드 페이지 배포
- 백앤드 서버페이지와 데이터베이스는 닷홈 사용 시
- 반드시 SSL 인증서 발급 CORS 잇슈 해결하고 연결

> SSL 웹보안 신청
- 웹호스팅 유로전환
- 도메인 만들고
- SSL 웹보안 신청 하기 => 3 ~ 4일 걸림
- 깃허브 페이지 배포
- 완료
> https://moonjong8.dothome.co.kr/vue_01/   
> htps://깃허브페이지배포주소   


## 공유폴더 접근 방법
> 윈도우키 + E   
> 즐겨찾기 주소   
> \\192.168.136.150   
