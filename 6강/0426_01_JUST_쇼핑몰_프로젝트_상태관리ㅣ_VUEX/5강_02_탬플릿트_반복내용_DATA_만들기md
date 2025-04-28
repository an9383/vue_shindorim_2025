## 02 탬플릿트 반복내용 DATA 만들기
1. HeaderComponent
- 메인메뉴
- 서브메뉴


```vue
<template>
  <header id="header">
    <div class="left">
      <h1>
        <a href="./index.html" :title="logo"
          ><span>{{ logo.split(" ")[0] }}</span>
          <span>{{ logo.split(" ")[1] }}</span></a
        >
      </h1>
    </div>
    <div class="right">
      <nav id="nav" @mouseleave="mouseleaveNav">
        <ul>

          <li 
            v-for="item, idx in gnb"
            :key="item.메인메뉴"

            class="col" 
            :data-key="item.메인메뉴"
          >
            <a
              href="#"
              :class="['main-btn', { on: menu[idx] }]"
              :title="item.메인메뉴"
              @mouseenter="mouseenterMenu(idx)"
              >{{item.메인메뉴}}</a
            >
            <div :class="['sub', `sub${idx+1}`, { 'on': menu[idx], 'off': nav }]">
              <div class="sub-container">
                <ul>

                  <li
                    v-for="item2, idx2 in item.서브메뉴"
                    :key="idx2"
                    :data-key="idx2"
                  >                      
                      <ul>
                        
                          <li
                            v-for="item3, idx3 in item2"
                            :key="idx3"
                            :data-key="idx3"
                          >
                            <a href="#" :title="item3">
                              {{item3}}
                            </a>
                          </li>
                        
                      </ul>
                  </li>
                 
                </ul>
              </div>
            </div>

          </li>


        </ul>
      </nav>
    </div>
  </header>
</template>
  
```



```js 
<script>
export default {
  name: "HeaderComponent",
  props: [],
  data() {
    return {
      logo: "JUST 쇼핑몰",      
      // menu1: false, // menu[0]
      // menu2: false, // menu[1]
      // menu3: false, // menu[2]
      // menu4: false, // menu[3]  

      menu: Array(4).fill(false),  // menu: [false,false,false,false],

      nav: false,
      gnb: [
        {
          메인메뉴: "탑",
          서브메뉴: [
            ["sub1 블라우스","티","셔츠","니트"],
            ["자켓","코트","가디건","머플러"],
            ["청바지","짧은바지","긴바지","레깅스"],
            ["귀고리","목걸이","반지","팔찌"]
          ]
        },
        {
          메인메뉴: "아우터",
          서브메뉴: [
            ["sub2 블라우스","티","셔츠","니트"],
            ["자켓","코트","가디건","머플러"],
            ["청바지","짧은바지","긴바지","레깅스"],
            ["귀고리","목걸이","반지","팔찌"]
          ]
        },
        {
          메인메뉴: "팬츠",
          서브메뉴: [
            ["sub3 블라우스","티","셔츠","니트"],
            ["자켓","코트","가디건","머플러"],
            ["청바지","짧은바지","긴바지","레깅스"],
            ["귀고리","목걸이","반지","팔찌"]
          ]
        },
        {
          메인메뉴: "악세사리",
          서브메뉴: [
            ["sub4 블라우스","티","셔츠","니트"],
            ["자켓","코트","가디건","머플러"],
            ["청바지","짧은바지","긴바지","레깅스"],
            ["귀고리","목걸이","반지","팔찌"]
          ]
        },
      ]
    };
  },
  created(){

  },
  methods: {

    // 마우스 이벤트 전달 함수(매개변수 0 1 2 3 )
    // mouseenterMenu1() ... mouseenterMenu4()
    mouseenterMenu(n) {   
      this.menu = Array(4).fill(false);  // this.menu= [false,false,false,false]
      this.menu[n] = true;
    },    

    // 네비게이션(GNB)
    // 마우스아웃 마우스떠나면
    // 모든 메인버튼, 서브메뉴 초기화
    mouseleaveNav() {
      this.nav = true;

      // 메인버튼, 서브메뉴 초기화
      setTimeout(() => {
        this.menu = Array(4).fill(false);  // this.menu = [false,false,false,false]
        this.nav = false;
      }, 300);
    },
  },
};
</script>

```



