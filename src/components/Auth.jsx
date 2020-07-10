import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';



const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () =>{
       await firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    const login = async () =>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
     }

    const logout = async () =>{
        await firebase.auth().signOut();
     }

  return (
    <div>
        
       
        { !user && 
        <div>
     <h1>iniciar cesion</h1>
     <label htmlFor="email">correo</label>
     <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)} /> <br/>
     <label  htmlFor="password">contraseña</label>
     <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)} /> <br/>
     <button onClick={submit}>crear cuenta</button>
     <button onClick={login}>iniciar cesion</button>
     </div>
        }
        {
          user && <button onClick={logout}>cerrar cesion</button>
        }
    </div>
        
  );
};


export default Auth;