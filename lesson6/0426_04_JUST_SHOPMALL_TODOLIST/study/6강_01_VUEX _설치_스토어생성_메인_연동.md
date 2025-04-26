# 6강 01 Vuex 설치 스토어 생성 메인 연동

1. VUEX 설치 
```BASH
$ npm i vuex
```

2. 스토어 폴더 만들기
[store]
   

3. 스토어 폴더 안에 인덱스.js 파일 만들기
[store]
    index.js
4. store 생성 vuex 임포트 createStore()
```js
import Vue from 'vue'
import Vuex from 'vuex'

5. main.js 에서 스토어 연동하기
```js
import store from './store'
createApp(App).use(store).mount('#app')
```

6. [store] 스토어 내부에 상태관리 배치
```store
import { createStore } from 'vuex';
//import WrapComponent from '@/components/WrapComponent.vue';


const store = createStore({
    state(){
        return {
            isModal: false,
            공지글:''
        }
    },
    getters:{},
    setters:{},
    mutations:{},   // setters 변수를 변경하는 함수
    actions:{},     // 외부에서 변수를 전달하는 경우 vue컴포넌트와 연결하는 역할
    
});  

export default store;
```
7. 상태관리 변수(객체 key(속성):value) 설정하기
```js
    state(){
        return {
            isModal: false,
            공지글:''
        }
    },
```
8. 상태변수 값 가져올 메서드: 컴포넌트 내부에서 가져오는 메서드 getModal()
```js
getters:{
        //모달에서 사용변수 가져오기
        getModal(state){
            return state;
        }
    },

```