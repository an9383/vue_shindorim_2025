# 6강 01 Vuex 설치 스토어생성 메인 연동
1. Vuex 설치
```BASH
npm i vuex

```

2. 스토어 폴더 만들기
[strore]

3. 스토어 폴더 안에 인덱스.js 만들기
[strore] 
    index.js

4. 스토어 생성 createStore
```js
import { createStore } from "vuex";

const store = createStore();
export default store;
```

5. main.js 에서 스토어 연동 하기
```js
:
import store from './store'

createApp(WrapComponent).use(store).mount('#app')

```

6. [store] index.js  store 내부에 상태관리 구성요소 배치 내보내기
```js
import { createStore } from "vuex";

const store = createStore({
   state(){
    return {
        isModal: false,
        공지글:''
    }
   },
   getters:{},
   mutations:{},  // setters
   actions:{},
});
export default store;
```

7. 상태관리 변수(객체 키 key 속성: 밸류 value 값) 설정하기

```js 

   state(){
        return {
            isModal: false,
            공지글:''
        }
   },

   ```

8. 상태변수 값 가져올 메서드 : 컴폰넌트 내부에서 가져오는 메서드 getModal()
``` js
    getters:{

        getModal(state){
            return state
        }

   },
```



