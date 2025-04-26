## 마우스 이벤트
```
1. 메인버튼에 마우스를 오버하면
    메인버튼에 생기면 가상 클래스 on
    class='main' 버튼 배경 색상이 흰색 검정글자색
    class='main on' 버튼 배경 색상이 검정 흰색글자색
    마우스오버 mouseover 마우스엔터 mouseenter
    마우스아웃 mouseout 마우스리브 mouseleave


    //1. 변수
    let cnt = 0;

    //2. 메인슬라이드함수 3개 우측에서 좌측으로 이동  0 1 2
    function mainSlide() {

      $(".slide").css({ zIndex: 1, opacity: 1 });
      $(".slide").eq(cnt).css({ zIndex: 2 });
      $(".slide")
        .eq(cnt - 1 < 0 ? 2 : cnt - 1)
        .css({ zIndex: 3 })
        .animate({ opacity: 0 }, 1000);
    }

    //3. 다음카운트함수
    function mextCount() {
      cnt++;
      if (cnt > 3) cnt = 0;
      mainSlide();
    }

    //4. 자동타이머함수
    function autotimer() {
      setInterval(mextCount, 3000);
    }
    autotimer();

  ```