## JUST SHOPMALL PROJECT VUE CLI3
- node 버전 확인 ==> nvm 관리
- vue.js 설치확인
```bash
npm install -g @vue/cli
```
- git 설치 확인
https://git-scm.com
윈도우 버전 설치 확인

vue.js 설치
```bash
node --version
vue --version
@vue/cli 5.0.8
```
1. 프로젝트 생성
```bash
vue create just_shop
```
2. 프로젝트 실행
cd just_shop
npm run serve

3. node_module 관리
npm install생성
```bash
npm install
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
  ....js
 index.html
src 동적폴더
 main.js
 [components]
 [image]
 WrapComponent.vue


<!--2단계-->
  HeaderComponent.vue
  MainComponent.vue
 [main]
 Section1Components.vue
 Section2Components.vue


5. 컴포넌트 구조 생성
```vue
<template>
</template>

6. 이미지 경로 변경
```vue
 ../../public
 ```

 7. 프로젝트 배포
 ```bash
 vue.config.js => 배포폴더 이름을 추가

 const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //퍼블릭 경로
  publicPath: '/just_shop' // 퍼블릭경로
})
 ```