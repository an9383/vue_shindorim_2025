## JUST_쇼핑몰_프로젝트_컴포넌트_분석_설계

1. 프로젝트 정리
- public 정적폴더
  [css]
   reset.css
  [images]
    ...jpg
  index.html

- src 동적폴더
  main.js
  [components]
  WrapComponent.vue  
  [wrap]
    HeaderComponent.vue  
    MainComponent.vue  
    [main]
      Section1Component.vue  
      Section2Component.vue  
    FooterComponent.vue  
    ModalComponent.vue

```VUE
<template>
  <main id="main">
    <h1>메인컴포넌트 입니다.</h1>
  </main>
</template>


<script>
export default {
  name: "MainComponent",
};
</script>

<style scoped>
#wrap #main {
  width: 100%;
  position: relative;
  z-index: 2;
}
</style>
```

2. 이미지 경로 public
./images => ../../../../public/images



3. 제이쿼리 사용 : 패키지 설치
```bash
npm i jquery
```