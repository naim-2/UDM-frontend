<script setup>
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
</script>

<template>
  <div id="search">
    <input type="text" id="mySearch" v-on:keyup="myFunction" placeholder="Search.." title="Type in a category">
    
    <ul id="myMenu">
      <li><RouterLink to='/clothes' target="_parent">Clothes<br><img src="../assets/clothes.png"></RouterLink></li>
      <li><RouterLink to='/laundry' target="_parent">Laundry Services<br><img src="../assets/laundry.png"></RouterLink></li>
      <li><RouterLink to='/shoes' target="_parent">Shoes<br><img src="../assets/shoes.png"></RouterLink></li>
      <li><RouterLink to='/bags' target="_parent">Bags<br><img src="../assets/bags.png"></RouterLink></li>
      <li><RouterLink to='/makeup' target="_parent">Makeup Accessories<br><img src="../assets/makeup.png"></RouterLink></li>
      <li><RouterLink to='/makeupservices' target="_parent">Makeup Services<br><img src="../assets/makeupservices.png"></RouterLink></li>

      <li><RouterLink to='/laptops' target="_parent">Laptops<br><img src="../assets/laptops.png"></RouterLink></li>
      <li><RouterLink to='/smartphones' target="_parent">Smartphones<br><img src="../assets/smartphones.png"></RouterLink></li>
      <li><RouterLink to='/phonecases' target="_parent">Phone Cases<br><img src="../assets/phonecases.png"></RouterLink></li>
      <li><RouterLink to='/watches' target="_parent">Watches<br><img src="../assets/watches.png"></RouterLink></li>
      <li><RouterLink to='/electronics' target="_parent">Other Electronics<br><img src="../assets/electronics.png"></RouterLink></li>
      <li><RouterLink to='/tutoring' target="_parent">Tutoring Services<br><img src="../assets/tutoring.png"></RouterLink></li>
      <li><RouterLink to='/macronutrients' target="_parent">Macronutrients and Other Supplements<br><img src="../assets/macronutrients.png"></RouterLink></li>
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
#mySearch {
    width: 90%;
    font-size: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    margin: 1% 0 1% 4%;
  }
  
  #myMenu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: 90px;
  }
  
  #myMenu li a {
    padding: 12px;
    text-decoration: none;
    color: #2B3990;
    display: block;
    margin: 4%;
    margin-bottom: 0%;
    box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    float: left;
  }
  
  #myMenu li a:hover {
    background-color: #eee;
  }

  #myMenu img {
    width: 400px;
    height: 250px;
  }

  #myMenu li a{
    margin-bottom: 10px;
    font-weight: bolder;
    font-size: larger;
  }

  footer{
    background-color: #2B3990;
    color: #FFFFFF;
    text-align: center;
    width: 101.5%;
    padding: 2% 0% 2% 0%;
    font-size: larger;
    margin-top: 2000px;
    font-family: 'Poppins',sans-serif;
  }
  @media screen and (max-width: 1780px){
    #myMenu {
      margin-left: 40px;
    }
  }
  @media screen and (max-width: 1730px){
    #myMenu {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 1710px){
    #myMenu {
      margin-left: 5px;
    }
  }
  @media screen and (max-width: 1695px){
    #myMenu {
      margin-left: 300px;
    }
    footer{
      margin-top: 2650px;
    }
  }
  @media screen and (max-width: 1595px){
    #myMenu {
      margin-left: 250px;
    }
  }
  @media screen and (max-width: 1495px){
    #myMenu {
      margin-left: 200px;
    }
  }
  @media screen and (max-width: 1395px){
    #myMenu {
      margin-left: 150px;
    }
  }
  @media screen and (max-width: 1295px){
    #myMenu {
      margin-left: 100px;
    }
  }
  @media screen and (max-width: 1195px){
    #myMenu {
      margin-left: 50px;
    }
  }
  @media screen and (max-width: 1120px){
    #myMenu {
      margin-left: 25px;
    }
  }
  @media screen and (max-width: 1080px){
    #myMenu {
      margin-left: 15px;
    }
  }
  @media screen and (max-width: 1045px){
    #myMenu {
      margin-left: 4px;
    }
  }
  @media screen and (max-width: 1030px){
    #myMenu {
      margin-left: 10%;
      font-size: smaller;
    }
    #myMenu img {
      width: 300px;
      height: 180px;
    }
    footer {
      margin-top: 2000px;
      font-size: smaller;
    }
  }
  @media screen and (max-width: 950px){
    #myMenu {
      margin-left: 7%;
    }
  }
  @media screen and (max-width: 900px){
    #myMenu {
      margin-left: 5%;
    }
  }
  @media screen and (max-width: 850px){
    #myMenu {
      margin-left: 2%;
    }
  }
  @media screen and (max-width: 805px){
    #mySearch{
      font-size: 90%;
    }
    #myMenu {
      margin-left: 1%;
    }
  }
  @media screen and (max-width: 795px){
    #myMenu {
      margin-left: 20%;
    }
    #myMenu img {
      width: 400px;
      height: 250px;
    }
    footer{
      margin-top: 4400px;
    }
  }
  @media screen and (max-width: 750px){
    #myMenu {
      margin-left: 15%;
    }
  }
  @media screen and (max-width: 640px){
    #mySearch{
      margin-left:3%;
    }
    #myMenu {
      margin-left: 12%;
    }
  }
  @media screen and (max-width: 600px){
    #myMenu {
      margin-left: 9%;
    }
    footer{
      margin-top: 4350px;
    }
  }
  @media screen and (max-width: 550px){
    #mySearch{
      margin-left: 2%;
      font-size: 80%;
    }
    #myMenu {
      margin-left: 15%;
    }
    #myMenu img {
      width: 300px;
      height: 180px;
    }
    footer{
      margin-top: 3400px;
    }
  }
  @media screen and (max-width: 500px){
    #mySearch{
      margin-left: 1%;
    }
    #myMenu {
      margin-left: 10%;
    }
  }
  @media screen and (max-width: 430px){
    #myMenu {
      margin-left: 5%;
    }
    footer{
      margin-top: 3350px;
    }
  }
  @media screen and (max-width: 400px){
    #mySearch{
      margin-left: 0.5%;
      font-size: 60%;
    }
    #myMenu{
      font-size: 9px;
      margin-left: 15%;
    }
    #myMenu img{
      width: 200px;
      height: 120px;
    }
    footer{
      margin-top: 2450px;
    }
  }

</style>