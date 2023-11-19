import { defineStore } from "pinia";

export const useProductStore = defineStore('counter2',{
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