<script>
    import axios from 'axios';
    import { useUserStore } from '@/stores/users';
    import { useProductStore } from '@/stores/product';
    export default {
      name: 'CheckProducts',
      data() {
        return {
          username: '',
          password: '',
          msg: '',
          products: '',
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
                if(res.data['message'] === "You have no products yet!"){
                    this.msg = "You have no products yet! Click the Add button to add products."
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
        buyer() {
            this.$router.push('/')
        },
        addProduct() {
            this.$router.push('/addProduct')
        },
        editProduct(product) {
            useProductStore().changeProduct(product)
            this.$router.push('/editProduct')
        },
        deleteProduct(product) {
          const path = `https://udm-backend.onrender.com/deleteProduct/${product[0]}/${product[1]}`;
          axios.delete(path)
            .then((res) => {
              if(res.data['message']==='Product has been deleted successfully!'){
                this.msg = res.data['message'];
                this.checkProducts();
              }
              else{
                  this.msg = "Product has not been deleted! Please try again."
              }
            })
            .catch((error) => {
    
              console.error(error);
            });
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

    <div v-if="products" class="tablecontainer">
        <table class="responsive-table">
          <caption>Your Products</caption>
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Details</th>
              <th scope="col">Current Reviews</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products">
              <th scope="row">{{ product[1] }}</th>
              <td>{{ product[2] }}</td>
              <td id="forimage"><img v-bind:src="product[3]"></td>
              <td>{{ product[5] }}</td>
              <td>{{ product[6] }}</td>
              <td>{{ product[4] }}</td>
              <td v-if="product[7]!=='{}'">{{ product[7] }}</td>
              <td v-if="product[7]=='{}'"> None </td>
              <td id="actions">
                <button id="edit" @click="editProduct(product)">EDIT</button>
                <button id="delete" @click="deleteProduct(product)">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
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
  #forimage>img{
    width: 100px;
    height: 100px;
  }
  #actions>button{
    margin: 10px;
    height: 100%;
    width: 80%;
    padding: 5px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  #actions>#edit{
    background: linear-gradient(135deg, #71b7e6, #2B3990);
   }
   #actions>#edit:hover{
    background: linear-gradient(-135deg, #71b7e6, #2B3990);
   }
   #actions>#delete{
    background: linear-gradient(135deg, #f93060, #030110);
   }
   #actions>#delete:hover{
    background: linear-gradient(-135deg, #f93060, #030110);
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