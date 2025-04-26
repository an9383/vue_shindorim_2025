import { createStore } from "vuex";

const store = createStore({             //객체(Object)형태로 저장
    state() {                            //state는 데이터를 저장하는 공간으로 메소드형태로 저장 state: function() {}
        return {
            isShow: false,
            cnt: 0,
            main:{
                section1: {
                cnt: 0,
                isClass1: false
            },
            section2: {
                공지사항: [],
                갤러리: []
            },
            },            
            header: {
                gnb: [],
                logo: '',
            }
        }
    },
    getters: {},
    mutations: {},
    actions: {},
});
export default store;