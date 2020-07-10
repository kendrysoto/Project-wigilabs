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
         <div class="jumbotron">
            <h1 class="display-4">Login /CkeckIn</h1>
         </div>

         {!user &&
            <div style={mystyle}>
               <div  class="form-group">

               </div>
               <label htmlFor="email">correo</label>
               <input  class="form-control" aria-describedby="emailHelp" type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} /> <br />
               <label htmlFor="password">contraseña</label>
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