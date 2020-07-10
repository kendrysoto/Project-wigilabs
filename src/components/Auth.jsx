import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';



const Auth = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const firebase = useFirebaseApp();
   const user = useUser();
   const mystyle = {
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    };

    const mystyle2 = {
      backgroundColor: "#1E90FF",
    
    };

    
  

   const submit = async () => {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
   }

   const login = async () => {
      await firebase.auth().signInWithEmailAndPassword(email, password);
   }

   const logout = async () => {
      await firebase.auth().signOut();
   }

   return (
      <div>
         <div style={mystyle2} class="jumbotron">
            <h1 class="display-4">Login /Register</h1>
         </div>

         {!user &&
            <div style={mystyle}>
               <div  class="form-group">

               </div>
               <label htmlFor="email">Mail address</label>
               <input  class="form-control" aria-describedby="emailHelp" type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} /> <br />
               <label htmlFor="password">Password</label>
               <input  class="form-control" aria-describedby="emailHelp" type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} /> <br />
               <div>
               <button class="btn btn-primary" onClick={submit}>crear cuenta</button> 
               </div><br></br>
               <div>
               <button class="btn btn-primary" onClick={login}>iniciar cesion</button>
               </div>
               
              
            </div>
         }
         {
            user && <button class="btn btn-primary" onClick={logout}>cerrar cesion</button>
         }
      </div>

   );
};


export default Auth;