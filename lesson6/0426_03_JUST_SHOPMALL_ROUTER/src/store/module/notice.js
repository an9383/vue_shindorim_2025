
export const notice = {
state(){
        return {
            isModal: false,
            공지글:''
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
            state.isModal = payload.isModal;
            state.공지글 = payload.공지글;
        },
        setClickModalCloseMutation(state, payload){
            state.isModal = payload.isModal;
            state.공지글 = payload.공지글;
        },
        setClickModalMutation(state, payload){
            state.isModal = payload.isModal;
            state.공지글 = payload.공지글;
        },

    },  
    actions:{
        // 컴포넌트에서 보내온 변경메서드
        // 모달창 열기 메서드({커밋}, 패일로드)
        clickModalOpenAction({commit},payload){
            //console.log(payload);
            commit('setClickModalOpenMutation', payload);
        },
        clickModalCloseAction({commit},payload){
            //console.log(payload);
            commit('setClickModalCloseMutation', payload);   
        },
        clickModalAction({commit},payload){
            //console.log(payload);
            commit('setClickModalMutation', payload);   
        }
    },     // 외부에서 변수를 전달하는 경우 vue컴포넌트와 연결하는 역할 요청하는 역할 즉 dispatch역할

}