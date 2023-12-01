<script>
import axios from 'axios'
import { useUserStore } from '@/stores/users';
export default{
  name: '',
    data() {
      return {
        username: '',
        selectedUser: useUserStore().UserSelected,
        msg: '',
        users: []
      };
    },
  mounted(){
    if(JSON.stringify(this.selectedUser)!=='{}'){
      this.username = this.selectedUser
    }
    this.allusers()
  },
  beforeMount(){
    if(useUserStore().UserSelected.length === undefined){
      this.$router.push('/log-in')
    }
  },
  methods: {
    allusers(){
        this.users = []
        const path = "https://udm-backend.onrender.com/allusers";
        axios.get(path)
        .then((res) => {
            if(res.data.length!=0){
                for(let i in res.data){
                    if(res.data[i][0].split(",")[0].split("(")[1] === "admin123"){
                        continue
                    }
                    else{
                        this.users.push({
                        "username":res.data[i][0].split(",")[0].split("(")[1],
                        "status":res.data[i][0].split(",")[1].split(")")[0]
                        })
                    }
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
    signout(){
      useUserStore().changeUser(undefined);
      this.selectedUser = ''
      this.$router.go('/');
    },
    deleteUser(username) {
          const path = `https://udm-backend.onrender.com/deleteUser/${username}`;
          axios.delete(path)
            .then((res) => {
              if(res.data['message']==='User deleted successfully!'){
                this.msg = res.data['message'];
                this.allusers();
              }
              else{
                  this.msg = "User has not been deleted! Please try again."
              }
            })
            .catch((error) => {
    
              console.error(error);
            });
        },
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
      <button v-if="username" @click="signout()">SIGN OUT</button>
    </div>
  </header>

  <p v-if="msg" id="msgAdmin">{{ msg }}</p>

  <div v-if="username" class="tablecontainer">
    <table class="responsive-table">
      <caption>Accounts</caption>
      <thead>
        <tr>
          <th style="text-align:center" scope="col">Username</th>
          <th style="text-align:center" scope="col">Status</th>
          <th style="text-align:center" scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <th style="text-align:center" scope="row">{{ user.username }}</th>
          <td>{{ user.status }}</td>
          <td id="actions">
            <!-- <button id="edit" @click="suspendAcc(username)">SUSPEND</button> -->
            <button id="delete" @click="deleteUser(user.username)">DELETE ACCOUNT</button>
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
  #msgAdmin{
    text-align: center;
    margin-top: 80px;
    font-size: 25px;
    font-weight: bolder;
    font-style: italic;
  }
  #actions>button{
    margin: 10px;
    height: 100%;
    width: 50%;
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