<script>
import { RouterView } from 'vue-router'
export default{
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
  }
}
</script>

<template>
  <header>
    <img @click="homePage()" src="../src/assets/logo.png" alt="USIU Logo"/>
    <h1>USIU-AFRICA DIGITAL MARKETPLACE <br> <div id="lower_heading">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</div></h1>
    <div id="buttons">
      <button @click="signUp()">SIGN UP</button>
      <button @click="logIn()">LOG IN</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header img{
  line-height: 1;
  width:10%;
  margin-left: 8%;
  margin-right: 8%;
}
header img:hover{
  cursor: pointer;
}
header h1{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #2B3990;
  width: 55%;
  text-align: center;
  border-left: 3px solid #2B3990;
  border-right: 3px solid #2B3990;
  padding-top: 2%;
  padding-bottom: 2%;
  font-weight: bolder;
}
#lower_heading {
  font-size: 80%;
  font-style: italic;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
}
header #buttons {
  width: 15%;
  margin: auto;
}
header #buttons button {
  margin-left: 7%;
  color: #FFFFFF;
  background-color: #2B3990;
  border-radius: 30px;
  border: 3px solid #000000;
  padding: 7%;
}
header #buttons button:hover{
  border: 3px groove #FFFFFF;
  cursor: pointer;
}
header {
  border: 3px solid #2B3990;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
