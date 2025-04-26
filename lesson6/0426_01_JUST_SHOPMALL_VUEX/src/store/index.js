import { createStore } from 'vuex';
//import WrapComponent from '@/components/WrapComponent.vue';


const store = createStore({
    state(){
        return {
            isModal: false,
            공지글:'상태관리 공지사항 제목 입니다.'
        }
    },
    getters:{
        //모달에서 사용변수 가져오기
        getModal(state){
            return state;
        }
    },
    mutations:{
        setClickModalOpenMutation(state, payload){
            state.isModal = true;
            state.공지글 = payload;
        },
        setClickModalCloseMutation(state){
            state.isModal = false;
        }

    },   // setters 변수를 변경하는 함수 변경
    actions:{
        // 컴포넌트에서 보내온 변경메서드
        // 모달창 열기 메서드({커밋}, 패일로드)
        clickModalOpenAction({commit},payload){
            console.log(payload);
            commit('setClickModalOpenMutation', payload);

        },
        clickModalCloseAction({commit},payload){
            console.log(payload);
            commit('setClickModalCloseMutation');   
            
        }

    },     // 외부에서 변수를 전달하는 경우 vue컴포넌트와 연결하는 역할 요청하는 역할 즉 dispatch역할
    
});  

export default store;



