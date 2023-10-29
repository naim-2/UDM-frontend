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
      <li id="testingclothes"><RouterLink to='/clothes' target="_parent">Clothes<br><img src="../assets/clothes.png"></RouterLink></li>
      <li><RouterLink to='/bags' target="_parent">Bags<br><img src="../assets/bags.png"></RouterLink></li>
      <li><RouterLink to='/laptops' target="_parent">Laptops<br><img src="../assets/laptops.png"></RouterLink></li>
      <li><RouterLink to='/shoes' target="_parent">Shoes<br><img src="../assets/shoes.png"></RouterLink></li>
      <li><RouterLink to='/smartphones' target="_parent">Smartphones<br><img src="../assets/smartphones.png"></RouterLink></li>
      <li id="watches"><RouterLink to='/watches' target="_parent">Watches<br><img src="../assets/watches.png"></RouterLink></li>
    </ul>
  </div>

  <footer>
    For any enquiries, please contact:
    <br>
    nsalim@usiu.ac.ke
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
  }
  
  #myMenu li a {
    padding: 12px;
    text-decoration: none;
    color: #2B3990;
    display: block;
    margin: 4%;
    margin-bottom: 0%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
  }

  footer{
    background-color: #2B3990;
    color: #FFFFFF;
    text-align: center;
    width: 101.5%;
    padding: 2% 0% 2% 0%;
    font-size: larger;
    margin-top: 800px;
  }
</style>