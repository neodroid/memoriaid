<template>
    <div class="hello">
      <img class="logo" alt="Vue logo" src="@/assets/logo.png"/>
      <h1>{{ 'Welcome to Memoria' }}</h1>
      <img class="snap" alt="Snap" src="@/assets/boardingSnap.png"/>
      <button @click="googleSignIn">Log In with Google</button>
    </div>
  </template>
  
  <script>
  import firebase from "firebase";
  export default {
    name: "SignIn",
    methods: {
      googleSignIn: () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
            console.log(token) // Token
            console.log(user) // User that was authenticated
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
      }
    }
  }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1 {
    color: white;
    font-size: 18px;
  }
  .hello {
    background-color: #111827;
    text-align: center;
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
  }
  img {
    margin-top: 50px;
  }
  
  .logo {
    width: 100px;
    max-width: 50%;
  }
  .snap {
    width: 80%;
    max-width: 350px;
  }
  </style>
  