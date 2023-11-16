<script>
    import axios from 'axios';
    import { useUserStore } from '@/stores/users';
    import Table from '../components/Table.vue';
    export default {
      name: 'CheckProducts',
      data() {
        return {
          username: '',
          password: '',
          msg: '',
          selectedUser: useUserStore().UserSelected,
        };
      },
      mounted(){
        this.checkProducts()
      },
      methods: {
        checkProducts() {
          const path = `https://udm-backend.onrender.com/viewSellerProduct?username=${this.selectedUser}`;
          axios.get(path)
            .then((res) => {
              if(res.data.length!=0){
                this.msg = res.data['message'];
                if(res.data['message'] === "You have no products yet!"){
                    this.msg = "You have no products yet! Click the Add button to add products."
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
        buyer() {
            this.$router.push('/')
        },
        addProduct() {
            this.$router.push('/addProduct')
        }
    }
}
</script>

<template>
    <header>
        <img @click="homePage()" src="../../src/assets/logo.png" alt="USIU Logo"/>
        <h1>USIU-AFRICA DIGITAL MARKETPLACE <br> <div id="lower_heading">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</div></h1>
        <div id="buttons">
            <button @click="buyer()">CHANGE TO BUYER</button>
        </div>
    </header>

    <div>
        <p id="message">{{ msg }}</p>
    </div>

    <button id="add" @click="addProduct()">
        +
    </button>

    <Table/>

  <footer>
    For any enquiries, please contact:
    <br>
    nsalim@usiu.ac.ke
    <br>
    Copyright © 2023 UDM.com™. All rights reserved.
  </footer>
</template>

<style scoped>
  #message{
    text-align: center;
    font-size: 30px;
  }
  #add{
    border-radius: 100%;
    font-size: 50px;
    background-color: #2B3990;
    border-color: 3px solid #000000;
    color:#FFFFFF;
    margin-left: 90%;
    width: 70px;
    font-weight: bolder;
  }
  #add:hover{
    border: 2.5px groove #FFFFFF;
    cursor: pointer;
  }
  footer{
    background-color: #2B3990;
    color: #FFFFFF;
    text-align: center;
    width: 100%;
    padding: 2% 0% 2% 0%;
    font-size: larger;
    margin-top: 570px;
    font-family: 'Poppins',sans-serif;
  }

</style>