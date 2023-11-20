<script>
  function myFunction () {{
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {{
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {{
        li[i].style.display = "";
      }} else {{
        li[i].style.display = "none";
      }}
    }}
  }}
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
        msg: ''
      };
    },
  beforeMount(){
    if(JSON.stringify(this.selectedUser)!=='{}'){
      this.username = this.selectedUser
    }
    this.viewProducts()
  },
  methods: {
    viewProducts() {
        const path = "https://udm-backend.onrender.com/viewProduct?category=Clothes";
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
        this.$router.push(`/clothes/${product[1]}`)
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
    <RouterLink to='/clothes' target="_parent"><button id="activated">Clothes</button></RouterLink>
    <RouterLink to='/laundry' target="_parent"><button id="notactivated">Laundry Services</button></RouterLink>
    <RouterLink to='/shoes' target="_parent"><button id="notactivated">Shoes</button></RouterLink>
    <RouterLink to='/bags' target="_parent"><button id="notactivated">Bags</button></RouterLink>
    <RouterLink to='/makeup' target="_parent"><button id="notactivated">Makeup Accessories</button></RouterLink>
    <RouterLink to='/makeupservices' target="_parent"><button id="notactivated">Makeup Services</button></RouterLink>
    <RouterLink to='/laptops' target="_parent"><button id="notactivated">Laptops</button></RouterLink>
    <RouterLink to='/smartphones' target="_parent"><button id="notactivated">Smartphones</button></RouterLink>
    <RouterLink to='/phonecases' target="_parent"><button id="notactivated">Phone Cases</button></RouterLink>
    <RouterLink to='/watches' target="_parent"><button id="notactivated">Watches</button></RouterLink>
    <RouterLink to='/electronics' target="_parent"><button id="notactivated">Earphones & Headsets</button></RouterLink>
    <RouterLink to='/tutoring' target="_parent"><button id="notactivated">Tutoring Services</button></RouterLink>
    <RouterLink to='/macronutrients' target="_parent"><button id="notactivated">Macronutrients & Other Supplements</button></RouterLink>
  </div>

  <div id="search">
    <input type="text" id="mySearch" v-on:keyup="myFunction" placeholder="Search.." title="Type in a product name">
    <input type="number" id="min" placeholder="Enter min price">
    <input type="number" id="max" placeholder="Enter max price">
    <input id="filter" type="submit" v-on:click="verify()" value="Filter">

    <ul v-for="product in products" id="myMenu2" @click="chosenProduct(product)">
        <li>
            <img v-bind:src="product[3]">
            <p style="white-space: pre;">
                <strong>{{product[1]}} <em>@ Ksh. {{ product[5] }}</em></strong> <br><br>Only {{ product[6] }} remaining <br><br><em>Details:</em><br>{{ product[4] }}
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
    margin-left: 25px;
  }
  #navigation button {
    margin: 40px 7px 20px 7px;
    border-radius: 30px;
    border: 3px solid #000000;
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
    border: 3px groove #FFFFFF;
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