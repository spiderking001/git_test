import {createStore} from "vuex";

const store = createStore({
    state() {
        return{
            count:0
        }
    },
    mutations: {
        increment(state){
            state.count++
        }
    },
    actions: {
        increment1({commit}){
                setTimeout(()=>{
                    commit('increment')
                },1000)
        }
    }

})
export default store