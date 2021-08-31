import React, {Component} from 'react';
import firebase from 'firebase';


export default class App extends React.Component<{}, {token: any}>{
  


  constructor(props : any){
    super(props);
    this.state = {
      token: 'Carregando...',
    };

    

    if (!firebase.apps.length) {
 
    let firebaseConfig = {
      apiKey: "AIzaSyDzrxsXjts_sI-XHA4S2Qx2CpmWPKkXp0I",
      authDomain: "reactapp-9371a.firebaseapp.com",
      databaseURL: "https://reactapp-9371a.firebaseio.com",
      projectId: "reactapp-9371a",
      storageBucket: "reactapp-9371a.appspot.com",
      messagingSenderId: "838921412121",
      appId: "1:838921412121:web:dfd8fd2e88622d928d1488",
      measurementId: "G-HHVZXD6ZEZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.database().ref('token').on('value', (snapshot) =>{
      let state = this.state.token;
      console.log(state);
      state = snapshot.val();
      this.setState(state);
    })

   }  
  }


  render(){
    const { token } = this.state;
    return(
      <div>
        <h1>Token: {token}</h1>
      </div>
    );
  }
}

