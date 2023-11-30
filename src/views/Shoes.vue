<script>
import axios from 'axios'
import { useUserStore } from '@/stores/users';
import { useSelectedProductStore } from '@/stores/selectedProduct';
import { RouterView } from 'vue-router'
export default{
  name: '',
    data() {
      return {
        username: '',
        selectedUser: useUserStore().UserSelected,
        products: '',
        hide: '',
        msg: '',
        min: '',
        max: '',
        search: '',
        searching: false,
        searchedProducts: []
      };
    },
  beforeMount(){
    if(JSON.stringify(this.selectedUser)!=='{}'){
      this.username = this.selectedUser
    }
    if(JSON.stringify(useSelectedProductStore().ProductSelected)!=='{}'){
        this.selectedProduct = useSelectedProductStore().ProductSelected
    }
    this.viewProducts()
  },
  methods: {
    viewProducts() {
        const path = "https://udm-backend.onrender.com/viewProduct?category=Shoes";
        axios.get(path)
        .then((res) => {
            if(res.data.length!=0){
                if(res.data['message'] === "There are no products in this category!"){
                    this.msg = "There are no products in this category!"
                }
                else{
                    this.products = res.data;
                }
            }
        })
        .catch((error) => {
            console.error(error);
        });
    },
    homePage() {
      this.$router.push('/')
    },
    signUp() {
      this.$router.push('/sign-up')
    },
    logIn() {
      this.$router.push('/log-in')
    },
    seller() {
      this.$router.push('/sell')
    },
    chosenProduct(product) {
        useSelectedProductStore().changeProduct(product)
        this.$router.push(`/shoes/${product[1]}`)
    },
    verify(){
      if(this.min.length === 0 || this.max.length === 0){
        alert("Please input some values in both min and max!")
        return
      }
      if(typeof(this.min) !== "number" || typeof(this.max) !== "number"){
        alert("Please input numbers only to filter!")
        return
      }
      const path = `https://udm-backend.onrender.com/filterProduct?category=Shoes&minprice=${this.min}&maxprice=${this.max}`;
      axios.get(path)
      .then((res) => {
          if(res.data.length!=0){
              if(res.data['message'] === "There is no product with such a price range!"){
                  this.msg = "There are no products with such a price range!"
                  this.hide = true
              }
              else{
                this.hide = false
                this.msg = ''
                this.products = res.data;
              }
          }
      })
      .catch((error) => {
          console.error(error);
      });
    },
    searchProduct(){
      this.searchedProducts = []
      if(this.search.length === 0){
        this.searching = false
      }
      if(this.search.length !== 0){
        this.searching = true
      }
      if(this.products.length !== 0){
        for (let i=0; i<this.products.length; i++){
          if(this.products[i][1].toLowerCase() === this.search.toLowerCase()){
            let inside = false
            for(let l=0; l<this.searchedProducts.length; l++){
              if(this.searchedProducts[l].toLowerCase() === this.products[i].toLowerCase()){
                inside = true
              }
            }
            if(!inside){
              this.searchedProducts.push(this.products[i])
            }
          }
        }
      }
    }
  }
}
</script>

<template>
  <header>
    <img @click="homePage()" src="../../src/assets/logo.png" alt="USIU Logo"/>
    <h1>USIU-AFRICA DIGITAL MARKETPLACE <br> <div id="lower_heading">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</div></h1>
    <div id="buttons">
      <button v-if="!username" @click="signUp()">SIGN UP</button>
      <button v-if="!username" @click="logIn()">LOG IN</button>
      <button v-if="username" @click="seller()">CHANGE TO SELLER</button>
    </div>
  </header>

  <div id="navigation">
    <RouterLink to='/bags' target="_parent"><button id="notactivated">Bags</button></RouterLink>
    <RouterLink to='/clothes' target="_parent"><button id="notactivated">Clothes</button></RouterLink>
    <RouterLink to='/electronics' target="_parent"><button id="notactivated">Earphones & Headsets</button></RouterLink>
    <RouterLink to='/laptops' target="_parent"><button id="notactivated">Laptops</button></RouterLink>
    <RouterLink to='/laundry' target="_parent"><button id="notactivated">Laundry Services</button></RouterLink>
    <RouterLink to='/macronutrients' target="_parent"><button id="notactivated">Macronutrients & Other Supplements</button></RouterLink>
    <RouterLink to='/makeup' target="_parent"><button id="notactivated">Makeup Accessories</button></RouterLink>
    <RouterLink to='/makeupservices' target="_parent"><button id="notactivated">Makeup Services</button></RouterLink>
    <RouterLink to='/phonecases' target="_parent"><button id="notactivated">Phone Cases</button></RouterLink>
    <button id="activated">Shoes</button>
    <RouterLink to='/smartphones' target="_parent"><button id="notactivated">Smartphones</button></RouterLink>
    <RouterLink to='/tutoring' target="_parent"><button id="notactivated">Tutoring Services</button></RouterLink>
    <RouterLink to='/watches' target="_parent"><button id="notactivated">Watches</button></RouterLink>
  </div>

  <div id="search">
    <input type="text" id="mySearch" v-model="search" v-on:keyup="searchProduct" placeholder="Search.." title="Type in a product name">
    <input type="number" id="min" placeholder="Enter min price" v-model="min">
    <input type="number" id="max" placeholder="Enter max price" v-model="max">
    <input id="filter" type="submit" v-on:click="verify()" value="Filter">

    <p v-if="!searching" id="noproductsmsg">{{ msg }}</p>
    <ul v-if="!hide && !searching" v-for="product in products" id="myMenu2" @click="chosenProduct(product)">
        <li>
            <img v-bind:src="product[3]">
            <p style="white-space: pre;">
                <strong>{{product[1]}} <em>@ Kshs. {{ product[5] }}</em></strong> <br><br>Only {{ product[6] }} remaining <br><br><em>Details:</em><br>{{ product[4] }}
            </p>
        </li>
    </ul>  

    <p v-if="searching" id="noproductsmsg">{{ msg }}</p>
    <ul v-if="!hide && searching" v-for="product in searchedProducts" id="myMenu2" @click="chosenProduct(product)">
        <li>
            <img v-bind:src="product[3]">
            <p style="white-space: pre;">
                <strong>{{product[1]}} <em>@ Kshs. {{ product[5] }}</em></strong> <br><br>Only {{ product[6] }} remaining <br><br><em>Details:</em><br>{{ product[4] }}
            </p>
        </li>
    </ul>
  </div>

  <footer>
    For any enquiries, please contact:
    <br>
    nsalim@usiu.ac.ke
    <br>
    Copyright © 2023 UDM.com™. All rights reserved.
  </footer>
</template>

<style scoped>
  #navigation {
    width: 100%;
    margin: auto;
    margin-left: 15vh;
  }
  #navigation button {
    margin: 40px 0px 20px 0px;
    border: 1px solid #777777;
    padding: 15px;
  }
  #activated{
    background-color: #FFFFFF;
    color: #000000;
  }
  #notactivated{
    color: #FFFFFF;
    background-color: #2B3990;
  }
  #navigation button:hover{
    border: 1px groove #FFFFFF;
  }
  #navigation #notactivated:hover{
    cursor: pointer;
  }
  #navigation #activated:hover{
    cursor: not-allowed;
  }
  #search{
    margin-bottom:40%;
  }
  #mySearch{
      width: 60%;
  }
  #noproductsmsg{
    margin: auto;
    margin-left: 5%;
    font-weight: bolder;
    font-size: larger;
    margin-top: 2%;
  }
  #min, #max{
      height: 45px;
      width: 150px;
      outline: none;
      font-size: 16px;
      border-radius: 5px;
      padding-left: 15px;
      border: 1px solid #ccc;
      border-bottom-width: 2px;
      transition: all 0.3s ease;
  }
  #min{
      margin-left: 100px;
      margin-right: 20px;
  }
  #filter{
    margin: 0 0 0 20px;
    width: 5%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #71b7e6, #2B3990);
    padding: 15px;
    height: 52px;
  }
  #filter:hover{
   /* transform: scale(0.99); */
   background: linear-gradient(-135deg, #71b7e6, #2B3990);
   }
  footer{
    margin-top:35%;
    margin-bottom: 0;
  }
</style>