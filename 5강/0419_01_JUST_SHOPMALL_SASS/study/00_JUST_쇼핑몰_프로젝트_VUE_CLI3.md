## JUST쇼핑몰 프로젝트 VUE CLI3
- node 설치 확인 => NVM 관리
nvm-setup.exe

명령어 입력=> nvm list available
node 설치  명령 입력 => nvm install 20.18.1
설치한 버전으로 사용 전환하기 => nvm use 20.18.1
현재 노드 버전 확인 => node --version
설치된 Node.js 목록 확인하기 => nvm list installed

- vue.js 설치 확인
```bash
npm install -g @vue/cli
npm i -g @vue/cli
```
- git 설치 확인
  https://git-scm.com/
  윈도우버전 PC 다운로드 설치
  Windows용 64비트 Git 설치 .
  Git-2.49.0-64-bit.exe

```bash
node --version
v18.20.3

vue --version
@vue/cli 5.0.8
```
1. JUST쇼핑몰 프로젝트 생성
```bash
vue create just_shop
```
2. 프로젝트 실행
```bash
cd just_shop
npm run serve
```

3. node_module 관리
node_module생성
```bash
npm install
또는
npm i
```
4. 프로젝트 정리
- public 정적폴더
  [css]
  [images]
    ...jpg
  [script]
  [lib]
    jquery.js
    ...js
  index.html

src 동적폴더
  main.js
  [components]
  WrapComponent.vue

5. 컴포넌트 구조 생성
```vue
<template>

</template>

<script>
export default {
  name: "WrapComponent",
};
</script>

<style>
</style>

```

6. 이미지 경로 변경
```vue
  ../../public
```

7. 프로젝트 배포
- vue.config.js => 배포폴더 이름을 추가

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/just_shop'     // 퍼블릭경로
})

```bash
npm run build

```

<!-- 2단계 -->
src 동적폴더
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
