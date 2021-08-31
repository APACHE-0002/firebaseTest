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
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
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

