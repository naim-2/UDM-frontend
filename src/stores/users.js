import { defineStore } from "pinia";

export const useUserStore = defineStore('counter',{
    state: ()=> {
        return{
            UserSelected:{}
        }
    },
    getters:{
        selectUser(state){
            return state.UserSelected
        }
    },
    actions:{
        changeUser(user){
            this.UserSelected = user
        }
    }
})