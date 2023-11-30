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
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/users';
import axios from 'axios'
export default{
  name: '',
    data() {
      return {
        username: '',
        selectedUser: useUserStore().UserSelected,
      };
    },
  beforeMount(){
    if(JSON.stringify(this.selectedUser)!=='{}'){
      this.username = this.selectedUser
    }
  },
  methods: {
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
      const path = 'https://udm-backend.onrender.com/changeUser';
      axios.put(path, {
          "username": this.selectedUser.toLowerCase(),
          "status": "seller"
      })
        .then((res) => {
          if(res.data.length!=0){
            if(res.data['message'] === "Status changed successfully!"){
                this.$router.push('/sell')
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    signout(){
      useUserStore().changeUser(undefined);
      this.selectedUser = ''
      this.$router.go('/');
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
      <button v-if="username" @click="signout()">SIGN OUT</button>
    </div>
  </header>

  <RouterView />

  <div id="search">
    <input type="text" id="mySearch" v-on:keyup="myFunction" placeholder="Search.." title="Type in a category">
    
    <ul v-if="!username" id="myMenu">
      <li><RouterLink to='/log-in' target="_parent">Bags<br><img src="../assets/bags.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Clothes<br><img src="../assets/clothes.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Earphones and Headsets<br><img src="../assets/electronics.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Laptops<br><img src="../assets/laptops.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Laundry Services<br><img src="../assets/laundry.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Macronutrients and Other Supplements<br><img src="../assets/macronutrients.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Makeup Accessories<br><img src="../assets/makeup.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Makeup Services<br><img src="../assets/makeupservices.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Phone Cases<br><img src="../assets/phonecases.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Shoes<br><img src="../assets/shoes.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Smartphones<br><img src="../assets/smartphones.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Tutoring Services<br><img src="../assets/tutoring.png"></RouterLink></li>
      <li><RouterLink to='/log-in' target="_parent">Watches<br><img src="../assets/watches.png"></RouterLink></li>
    </ul>

    <ul v-if="username" id="myMenu">
      <li><RouterLink to='/bags' target="_parent">Bags<br><img src="../assets/bags.png"></RouterLink></li>
      <li><RouterLink to='/clothes' target="_parent">Clothes<br><img src="../assets/clothes.png"></RouterLink></li>
      <li><RouterLink to='/electronics' target="_parent">Earphones and Headsets<br><img src="../assets/electronics.png"></RouterLink></li>
      <li><RouterLink to='/laptops' target="_parent">Laptops<br><img src="../assets/laptops.png"></RouterLink></li>
      <li><RouterLink to='/laundry' target="_parent">Laundry Services<br><img src="../assets/laundry.png"></RouterLink></li>
      <li><RouterLink to='/macronutrients' target="_parent">Macronutrients and Other Supplements<br><img src="../assets/macronutrients.png"></RouterLink></li>
      <li><RouterLink to='/makeup' target="_parent">Makeup Accessories<br><img src="../assets/makeup.png"></RouterLink></li>
      <li><RouterLink to='/makeupservices' target="_parent">Makeup Services<br><img src="../assets/makeupservices.png"></RouterLink></li>
      <li><RouterLink to='/phonecases' target="_parent">Phone Cases<br><img src="../assets/phonecases.png"></RouterLink></li>
      <li><RouterLink to='/shoes' target="_parent">Shoes<br><img src="../assets/shoes.png"></RouterLink></li>
      <li><RouterLink to='/smartphones' target="_parent">Smartphones<br><img src="../assets/smartphones.png"></RouterLink></li>
      <li><RouterLink to='/tutoring' target="_parent">Tutoring Services<br><img src="../assets/tutoring.png"></RouterLink></li>
      <li><RouterLink to='/watches' target="_parent">Watches<br><img src="../assets/watches.png"></RouterLink></li>
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

</style>