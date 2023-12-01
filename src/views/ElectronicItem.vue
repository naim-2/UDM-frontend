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
        selectedProduct: '',
        msg: '',
        call: '',
        sellerFirstname: '',
        sellerLastname: '',
        sellerPhonenumber: '',
        sellerEmail: '',
        sellerUsername: '',
        userFirstname: '',
        userLastname: '',
        giveReview: '',
        reviews: [],
        givenReview: '',
        review: '',
        done: false
      };
    },
  mounted(){
    if(JSON.stringify(this.selectedUser)!=='{}'){
      this.username = this.selectedUser
    }
    if(JSON.stringify(useSelectedProductStore().ProductSelected)!=='{}'){
        this.selectedProduct = useSelectedProductStore().ProductSelected
    }
    this.viewReviews()
    const path = `https://udm-backend.onrender.com/viewSeller?username=${this.selectedProduct[0]}`;
      axios.get(path)
      .then((res) => {
          if(res.data.length!=0){
            this.sellerFirstname = res.data[0]
            this.sellerLastname = res.data[1]
            this.sellerPhonenumber = res.data[2]
            this.sellerEmail = res.data[3]
            this.sellerUsername = res.data[4]
          }
      })
      .catch((error) => {
          console.error(error);
      });
      const path2 = `https://udm-backend.onrender.com/user?username=${this.selectedUser}`;
      axios.get(path2)
      .then((res) => {
          if(res.data.length!=0){
            this.userFirstname = res.data[0]
            this.userLastname = res.data[1]
          }
      })
      .catch((error) => {
          console.error(error);
      });
  },
  beforeMount(){
    if(useUserStore().UserSelected.length === undefined){
      this.$router.push('/log-in')
    }
  },
  methods: {
    viewReviews() {
        const path = `https://udm-backend.onrender.com/getReview?username=${this.selectedProduct[0]}&productname=${this.selectedProduct[1]}`;
        axios.get(path)
        .then((res) => {
            if(res.data[0][0] === "{}"){
              this.msg = "There are currently no reviews!"
            }
            else{
              let listReview = (res.data[0][0].split('!@#$%^&*()'))
              let finalListReview = []
              for(let i=1; i<listReview.length; i++){
                if(i%2 === 0){
                  finalListReview.push(listReview[i])
                }
              }
              let storeThis = finalListReview[0].slice(2).slice(0, -1).split("%20")
              let userReview = []
              let count = 0
              let firstReview = []
              firstReview.push(storeThis)
              console.log(finalListReview)
              this.reviews.push(storeThis)
              this.done = true;
              // for(let j=0; j<storeThis; j++){
              //   userReview.push(storeThis[j])
              //   console.log(storeThis)
              //   if(j === 2 + count){
              //     this.reviews.push(userReview)
              //     userReview = []
              //     count += 3
              //   }
              // }
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
        this.$router.push(`/electronics/${product[1]}`)
    },
    signout(){
      useUserStore().changeUser(undefined);
      this.selectedUser = ''
      this.$router.go('/');
    },
    allowReview(){
      this.giveReview = true;
    },
    postReview(){
      if(this.givenReview.length === 0){
        alert("Please input some text in the review!")
        return;
      }
      if(this.givenReview.length !== 0){
        const currentDate = new Date();

        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
        this.review = dateString + "%20" + this.selectedUser + "%20" + this.givenReview
        const path = 'https://udm-backend.onrender.com/postReview';
          axios.put(path, {
              "username": this.sellerUsername.toLowerCase(),
              "productname": this.selectedProduct[1],
              "reviews": this.review
          })
            .then((res) => {
              if(res.data.length!=0){
                if(res.data['message'] === "Review added successfully!"){
                    this.msg = "Review added successfully!";
                    this.viewReviews()
                    this.giveReview = false
                }
                else{
                  this.msg = "Review added successfully!";
                }
              }
            })
            .catch((error) => {
              console.error(error);
            });
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
      <button v-if="username" @click="signout()">SIGN OUT</button>
    </div>
  </header>

  <div id="navigation">
    <RouterLink to='/bags' target="_parent"><button id="notactivated">Bags</button></RouterLink>
    <RouterLink to='/clothes' target="_parent"><button id="notactivated">Clothes</button></RouterLink>
    <RouterLink to='/electronics' target="_parent"><button id="activated2">Earphones & Headsets</button></RouterLink>
    <RouterLink to='/laptops' target="_parent"><button id="notactivated">Laptops</button></RouterLink>


    <RouterLink to='/makeup' target="_parent"><button id="notactivated">Makeup Accessories</button></RouterLink>

    <RouterLink to='/phonecases' target="_parent"><button id="notactivated">Phone Cases</button></RouterLink>
    <RouterLink to='/shoes' target="_parent"><button id="notactivated">Shoes</button></RouterLink>
    <RouterLink to='/smartphones' target="_parent"><button id="notactivated">Smartphones</button></RouterLink>

    <RouterLink to='/watches' target="_parent"><button id="notactivated">Watches</button></RouterLink>
  </div>

  <div id="search">

    <ul v-if="selectedProduct" id="myMenu3">
        <li>
            <img v-bind:src="selectedProduct[3]">
            <p style="white-space: pre;">
                <strong>{{selectedProduct[1]}} <em>@ Kshs. {{ selectedProduct[5] }}</em></strong> <br><br>Only {{ selectedProduct[6] }} remaining <br><br><em>Details:</em><br>{{ selectedProduct[4] }}
            </p>
            <p id="names">Seller's Name: <strong>{{sellerFirstname}} {{sellerLastname}}</strong></p>
            <a @click="allowReview" v-bind:href="'tel:'+sellerPhonenumber"><input id="contact" type="submit" value="Call"></a>
            <a @click="allowReview" :data="selectedProduct" v-bind:href="'mailto:'+sellerEmail+'?subject=UDM EARPHONES AND HEADSETS&body=Greetings, I am interested at the product with the name: '+selectedProduct[1]+'; that goes at Kshs. '+selectedProduct[5]+' with only '+selectedProduct[6]+' remaining. Kind regards, '+userFirstname+' '+userLastname+'.'"><input id="contact" type="submit" value="Email"></a>
        </li>
    </ul>  
  </div>
  <p id="warning">
    Don't send any pre-payments.
    Meet the seller at a safe public place.
    Inspect the goods to make sure they meet your needs
    and pay if you're satisfied.
  </p>

  <p id="reviewsh">REVIEWS</p>
  <div v-if="msg" id="noreviews">
    {{ this.msg }}
  </div>
  <div v-if="giveReview" id="yesreviews">
    <textarea v-model="givenReview" rows="5" ></textarea>
    <button @click="postReview()">SUBMIT</button>
  </div>
  <div v-if="reviews && done">
    <div v-for="times in reviews.length">
      <div style="border: 3px solid black;padding: 10px;">
        <p><strong> On {{  reviews[0][0] }} </strong></p>
        <p><em>{{ reviews[0][1] }} </em></p>
        <p>Comment: {{ reviews[0][2] }}</p> 
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
  #activated2{
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
  #navigation #activated2:hover{
    cursor: pointer;
  }
  #search{
    margin-bottom: 330px;
  }
  #names{
    margin: 50px 0 0 600px;
    text-align: center;
  }
  #contact{
    height: 45px;
    width: 200px;
    margin: 30px 0 0 600px;
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
  #contact:hover{
   /* transform: scale(0.99); */
   background: linear-gradient(-135deg, #71b7e6, #2B3990);
   }
  #warning{
    background-color: #880000;
    color: #FFFFFF;
    font-size: larger;
    padding: 15px;
    border-radius: 15px;
    width: 80%;
    margin: 8%;
    text-align: center;
  }
footer{
    margin-top:12.5%;
    margin-bottom: 0;
}
</style>