import { createStore } from 'vuex';
import { modal } from './modules/modal';
import { count } from './modules/count';
import { notice } from './modules/notice'; 


const store = createStore({
    modules: {
        modal,
        count,
        notice
    }
});  

export default store;



