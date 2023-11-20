import { defineStore } from "pinia";

export const useSelectedProductStore = defineStore('counter3',{
    state: ()=> {
        return{
            ProductSelected:{}
        }
    },
    getters:{
        selectProduct(state){
            return state.ProductSelected
        }
    },
    actions:{
        changeProduct(product){
            this.ProductSelected = product
        }
    }
})