import HeaderComponent from "./wrap/HeaderComponent.js";
import MainComponent from "./wrap/MainComponent.js";
import FooterComponent from "./wrap/FooterComponent.js";

export default {
  template: `
    <div id='wrap'>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  `,
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  data(){
    return {
      title: '랩퍼컴포넌트(WrapComponent) 입니다.'
    }
  }
}