import Section1Component from "./main/Section1Component.js";
import Section2Component from "./main/Section2Component.js";
import Section3Component from "./main/Section3Component.js";

export default {
  template: `
    <main id='main'>
      <Section1Component/>
      <Section2Component/>
      <Section3Component/>
    </main>
  `,
  components: {
    Section1Component,
    Section2Component,
    Section3Component
  },
  data(){
    return {
      title: '메인컴포넌트(MainComponent) 입니다.'
    }
  }
}