<template>
  <section id="section1">
    <div class="slide-container">
      <div class="slide-content">
        <ul class="slide-wrap">
          <li class="slide slide1">
            <a href="#" title="JUST 쇼핑몰 오픈!"
              ><span>JUST 쇼핑몰 오픈!</span></a
            >
          </li>
          <li class="slide slide2">
            <a href="#" title="종합 쇼핑의 새 막을 연다! JUST 쇼핑몰!"
              ><span>종합 쇼핑의 새 막을 연다! JUST 쇼핑몰!</span></a
            >
          </li>
          <li class="slide slide3">
            <a href="#" title="JUST쇼핑몰 9월 세일 이벤트 안내"
              ><span>JUST쇼핑몰 9월 세일 이벤트 안내</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
  
  
  <script>
export default {
  name: "Section1Component",
  mounted() {
    //1. 변수
    let cnt = 0;
    // DOM 선택자 => 마운트 되고 난 후에 사용
    // 슬라이드 대상 선택자
    const slide = document.querySelectorAll(".slide"); // 3개
    console.log(slide);
    slide.forEach(function (item, idx) {
      console.log(idx, item);
    });

    //2. 메인슬라이드함수 3개 우측에서 좌측으로 이동  0 1 2
    function mainSlide() {
      // 모든 슬라이드 .slide 3개 z-index: 1 설정 초기화
      // 모든 슬라이드 .slide 3개 opacity: 1 설정 초기화
      slide.forEach(function (item, idx) {
        console.log(idx);
        item.style = "z-index: 1; opacity: 1;";
      });

      // 다음슬라이드 z-index: 2
      slide[cnt].style="z-index: 2; opacity: 0;";
      // 현재슬라이드 z-index: 3
      slide[cnt-1<0? 2: cnt-1].style="z-index: 3; opacity: 1;";

    }

    //3. 다음카운트함수
    function mextCount() {
      cnt++; // 1 2 0 1 2 0 ......
      if (cnt >= 3) {
        cnt = 0;
      }
      mainSlide();
    }

    //4. 자동타이머함수
    function autotimer() {
      setInterval(mextCount, 3000); // 3초간격 무한반복
    }
    autotimer();
  },
};
</script>
  
<style scoped>
/* 메인 */
#wrap #main #section1 {
  width: 100%;
  height: 300px;
  background-color: #c9c;
}
/* 메인슬라이드 아래에서 위로이동 */
#wrap #main #section1 .slide-container {
  width: 100%;
  height: 100%;
}
#wrap #main #section1 .slide-container .slide-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#wrap #main #section1 .slide-container .slide-content .slide-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
#wrap #main #section1 .slide-container .slide-content .slide-wrap .slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url() no-repeat 50% 50%;
  transition: opacity 1s ease-in-out;
}
#wrap #main #section1 .slide-container .slide-content .slide-wrap .slide1 {
  background-image: url(../../../../public/images/banner_img.jpg);
  background-position: 50% 30%;
  background-size: 120% auto;
  z-index: 3;
}
#wrap #main #section1 .slide-container .slide-content .slide-wrap .slide2 {
  background-image: url(../../../../public/images/banner_img2.jpg);
  background-position: 50% 0%;
  background-size: 100% auto;
  z-index: 2;
}
#wrap #main #section1 .slide-container .slide-content .slide-wrap .slide3 {
  background-image: url(../../../../public/images/banner_img3.png);
  background-position: 50% 30%;
  background-size: 110% auto;
  z-index: 1;
}

#wrap #main #section1 .slide-container .slide-content .slide-wrap .slide a {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
#wrap
  #main
  #section1
  .slide-container
  .slide-content
  .slide-wrap
  .slide
  a
  span {
  width: 100%;
  height: 70px;
  background: rgba(85, 170, 204, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #fff;
  user-select: none;
}
#wrap
  #main
  #section1
  .slide-container
  .slide-content
  .slide-wrap
  .slide2
  a
  span {
  background-color: rgba(204, 85, 170, 0.9);
}
#wrap
  #main
  #section1
  .slide-container
  .slide-content
  .slide-wrap
  .slide3
  a
  span {
  background-color: rgba(250, 120, 85, 0.9);
}
</style>