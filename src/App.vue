<script>
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/users';
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
    if(useUserStore().UserSelected.length === undefined){
      this.$router.push('/log-in')
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
      this.$router.push('/sell')
    },
  }
}
</script>

<template>
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
@media screen and (max-width: 1295px){
  button {
    margin: 0;
    margin-top: 10px;
    font-size: 10px;
  }
}
@media screen and (max-width: 1100px){
  h1{
    font-size: larger;
  }
}
@media screen and (max-width: 1024px){
  header img{
    line-height: 1;
    width:10%;
    margin-left: 3%;
    margin-top: 0.5%;
  }
  header h1{
    margin: 0;
    margin-top: -8%;
    margin-left: 15%;
  }
  header #buttons{
    margin-top: -7%;
    margin-left: 80%;
    margin-bottom: 3%;
  }
}
@media screen and (max-width: 993px){
  header #buttons{
    margin-top: -7%;
    margin-left: 75%;
    margin-bottom: 3%;
    width: 20%;
  }
}
@media screen and (max-width: 950px){
  header img{
    margin-top: 1.5%;
  }
}
@media screen and (max-width: 850px){
  header img{
    margin-top: 2%;
  }
}
@media screen and (max-width: 750px){
  header #buttons{
    width: 25%;
    margin-top: -8%;
    margin-left: 73%;
  }
}
@media screen and (max-width: 605px){
  header h1{
    font-size: 15px;
  }
  header #buttons{
    width: 15%;
    margin-top: -13%;
    margin-left: 77%;
  }
  header button{
    width: 70px;
  }
}
@media screen and (max-width: 480px){
  header h1{
    font-size: 13px;
  }
  header #buttons{
    margin-top: -15%;
  }
}
@media screen and (max-width: 430px){
  header h1{
    font-size: 10px;
  }
  header #buttons{
    margin-top: -15%;
  }
}
</style>
