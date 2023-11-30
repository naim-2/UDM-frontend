<template>
    <header>
      <img @click="homePage()" src="../../src/assets/logo.png" alt="USIU Logo"/>
      <h1>USIU-AFRICA DIGITAL MARKETPLACE <br> <div id="lower_heading">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</div></h1>
      <div id="buttons">
        <button @click="buyer()">CHANGE TO BUYER</button>
      </div>
    </header>
    
      <html lang="en" dir="ltr">
        <head>
          <meta charset="UTF-8">
          <title> Add Product Page </title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
         </head>
      <body>
        <div class="container">
          <div class="title">Add Product</div>
          <div class="content">
              {{ msg }}
              <div class="user-details">
                  <div class="input-box">
                  <span class="details">Product Name</span>
                  <input type="text" placeholder="Enter the product name" v-model="productName" required>
                  </div>
                  <div class="input-box">
                  <span class="details">Product Category</span>
                  <select v-model="selectedCategory">
                    <option v-for="category in categories" :value="category">{{category}}</option>
                  </select>
                  </div>
                  <div class="input-box">
                  <span class="details">Product Price</span>
                  <input type="number" placeholder="Enter the price in Kshs" v-model="price" required>
                  </div>
                  <div class="input-box">
                  <span class="details">Quantity</span>
                  <input type="number" placeholder="Enter the current quantity" v-model="quantity" required>
                  </div>
                  <div class="input-box" id="expand">
                  <span class="details">Image Link</span>
                  <input type="text" placeholder="e.g. https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" v-model="image" required>
                  </div>
                  <div class="input-box" id="expand">
                  <span class="details">Product Details</span>
                  <textarea rows="3" type="text" placeholder="Enter the details the customer would like to know about the product" v-model="details" required></textarea>
                  </div>
              </div>
              <div class="button">
                  <input type="submit" v-on:click="verify()" value="Add Product">
              </div>
          </div>
        </div>
        <footer>
          For any enquiries, please contact:
          <br>
          nsalim@usiu.ac.ke
          <br>
          Copyright © 2023 UDM.com™. All rights reserved.
        </footer>
      </body>
      </html>
      </template>
  
      <script>
      import axios from 'axios';
      import { useUserStore } from '@/stores/users';
      export default {
        name: 'AddProduct',
        data() {
          return {
            username: useUserStore().UserSelected,
            productName: '',
            category: '',
            price: '',
            quantity: '',
            image: '',
            details: '',
            msg: '',
            categories: ["Bags","Clothes","Earphones and Headsets","Laptops","Laundry Services","Macronutrients and Other Supplements",
            "Makeup Accessories","Makeup Services","Phone Cases","Shoes","Smartphones","Tutoring Services","Watches"],
            selectedCategory: '',
          };
        },
        methods: {
          verify(){
              if (this.productName.length === 0){
                  this.msg = "Please input the product name!";
                  return;
              }
              if (this.selectedCategory.length === 0){
                  this.msg = "Please input the product category!";
                  return;
              }
              if (this.price.length === 0){
                  this.msg = "Please input the product price!";
                  return;
              }
              if (this.quantity.length === 0){
                  this.msg = "Please input the product quantity!";
                  return;
              }
              if (this.image.length === 0){
                  this.msg = "Please input the image link!";
                  return;
              }
              if (this.details.length === 0){
                  this.msg = "Please input the product details!";
                  return;
              }
              this.addProduct();
          },
          addProduct() {
            let productWords = ''
            if(this.productName.split(" ").length > 0){
              for(let i=0; i<this.productName.split(" ").length; i++){
                productWords += (this.productName.split(" ")[i].toLowerCase())[0].toUpperCase() + (this.productName.split(" ")[i].toLowerCase()).slice(1).toLowerCase()+" "
              }
              productWords = productWords.substring(0, productWords.length - 1)
            }
            const path = 'https://udm-backend.onrender.com/addProduct';
            axios.post(path, {
                "username": this.username.toLowerCase(),
                "productname": productWords,
                "category": this.selectedCategory,
                "photo": this.image,
                "productdetails": this.details,
                "price": this.price,
                "quantity": this.quantity
            })
              .then((res) => {
                if(res.data.length!=0){
                  if(res.data['message'] === "Product details added successfully!"){
                      this.msg = "Product details added successfully!";
                      this.$router.push('/sell')
                  }
                  else{
                    this.msg = "Product name already exists!";
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
        },
      };
      
    </script>
      <style scoped>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins',sans-serif;
      }
      header img{
        line-height: 1;
        width:10%;
        margin-left: 8%;
        margin-right: 8%;
      }
      header img:hover{
        cursor: pointer;
      }
      body{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }
      .container{
        max-width: 700px;
        width: 100%;
        background-color: #fff;
        padding: 25px 30px;
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        margin: auto;
        margin-top: 3%;
  
        margin-left: 35%;
      }
      .container .title{
        font-size: 25px;
        font-weight: 500;
        position: relative;
      }
      .container .title::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 30px;
        border-radius: 5px;
        background: linear-gradient(135deg, #71b7e6, #2B3990);
      }
      .content .user-details{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0 12px 0;
      }
      .user-details .input-box{
        margin-bottom: 15px;
        width: calc(100% / 2 - 20px);
      }
      .input-box span.details{
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
      }
      .user-details .input-box input{
        height: 45px;
        width: 100%;
        outline: none;
        font-size: 16px;
        border-radius: 5px;
        padding-left: 15px;
        border: 1px solid #ccc;
        border-bottom-width: 2px;
        transition: all 0.3s ease;
      }
      .user-details .input-box input:focus,
      .user-details .input-box input:valid{
        border-color: #2B3990;
      }
       .gender-details .gender-title{
        font-size: 20px;
        font-weight: 500;
       }
       .category{
         display: flex;
         width: 80%;
         margin: 14px 0 ;
         justify-content: space-between;
       }
       .category label{
         display: flex;
         align-items: center;
         cursor: pointer;
       }
       .category label .dot{
        height: 18px;
        width: 18px;
        border-radius: 50%;
        margin-right: 10px;
        background: #d9d9d9;
        border: 5px solid transparent;
        transition: all 0.3s ease;
      }
       #dot-1:checked ~ .category label .one,
       #dot-2:checked ~ .category label .two,
       #dot-3:checked ~ .category label .three{
         background: #2B3990;
         border-color: #d9d9d9;
       }
       input[type="radio"]{
         display: none;
       }
       .button{
         height: 45px;
         margin: 35px 0
       }
       .button input{
         height: 100%;
         width: 100%;
         border-radius: 5px;
         border: none;
         color: #fff;
         font-size: 18px;
         font-weight: 500;
         letter-spacing: 1px;
         cursor: pointer;
         transition: all 0.3s ease;
         background: linear-gradient(135deg, #71b7e6, #2B3990);
       }
       .button input:hover{
        /* transform: scale(0.99); */
        background: linear-gradient(-135deg, #71b7e6, #2B3990);
        }
        footer{
          background-color: #2B3990;
          color: #FFFFFF;
          text-align: center;
          width: 100%;
          padding: 2% 0% 2% 0%;
          font-size: larger;
          margin-top: 43%;
          margin-left: -80%;
        }
       @media(max-width: 584px){
       .container{
        max-width: 100%;
      }
      .user-details .input-box{
          margin-bottom: 15px;
          width: 100%;
        }
        .category{
          width: 100%;
        }
        .content .user-details{
          max-height: 300px;
          overflow-y: scroll;
        }
        .user-details::-webkit-scrollbar{
          width: 5px;
        }
        }
        @media(max-width: 459px){
        .container .content .category{
          flex-direction: column;
        }
      }
      #expand, #expand>textarea{
        width: 100%;
      }
      #expand>textarea{
        width: 100%;
        outline: none;
        font-size: 16px;
        border-radius: 5px;
        padding-left: 15px;
        border: 1px solid #ccc;
        border-bottom-width: 2px;
        transition: all 0.3s ease;
      }
      select{
        width: 100%;
        outline: none;
        font-size: 16px;
        border-radius: 5px;
        padding-left: 15px;
        border: 1px solid #ccc;
        border-bottom-width: 2px;
        transition: all 0.3s ease;
        padding: 8px;
      }
      </style>