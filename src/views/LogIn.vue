<template>
  <header>
    <img @click="homePage()" src="../../src/assets/logo.png" alt="USIU Logo"/>
    <h1>USIU-AFRICA DIGITAL MARKETPLACE <br> <div id="lower_heading">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</div></h1>
    <div id="buttons">
      <button @click="signUp()">SIGN UP</button>
      <button @click="logIn()">LOG IN</button>
    </div>
  </header>

    <html lang="en" dir="ltr">
      <head>
        <meta charset="UTF-8">
        <title> Log In Page </title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
       </head>
    <body>
      <div class="container">
        <div class="title">Log In</div>
        <div class="content">
            {{ msg }}
            <div class="user-details">
              <div class="input-box">
                <span class="details">Username</span>
                <input type="text" placeholder="Enter your username" v-model="username" required>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="password" placeholder="Enter your password" v-model="password" required>
              </div>
            </div>
            <div class="button">
              <input type="submit" v-on:click="checkUser()" value="Log In">
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
      name: 'CheckUser',
      data() {
        return {
          username: '',
          password: '',
          msg: ''
        };
      },
      methods: {
        checkUser() {
          const path = `https://udm-backend.onrender.com/login?username=${this.username}&password=${this.password}`;
          axios.get(path)
            .then((res) => {
              if(res.data.length!=0){
                this.msg = res.data['message'];
                if(this.msg === "Logged in successfully!"){
                    useUserStore().changeUser(this.username);
                    this.$router.push('/')
                }
                console.log(this.msg)
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
      margin-top: 5%;

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
    </style>