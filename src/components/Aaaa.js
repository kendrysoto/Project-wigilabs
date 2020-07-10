import React from 'react';


const CheckIn = () => {
    const mystyle = {
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      };
    const user = "kendry";

    return (



        <div className="login-user">
        <div class="jumbotron">
           <h1 class="display-4">Login /CkeckIn</h1>
        </div>

        {!user &&
           <div style={mystyle}>
              <form >
           <div class="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <input onChange={(ev) => setEmail(ev.target.value)} type="email" class="form-control" id="email" aria-describedby="emailHelp" />
               <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
           </div>
           <div class="form-group">
               <label for="exampleInputPassword1">Password</label>
               <input onChange={(ev) => setPassword(ev.target.value)} type="password" class="form-control" id="id="password />
           </div>
           <div class="form-group" >
           <button onClick={submit} type="submit" class="btn btn-primary">crear cuenta</button>
           </div> 
           <div class="form-group">
           <button onClick={login} type="submit" class="btn btn-primary">iniciar cesion</button>
           </div>
            
           
       </form>
           </div>
        }
        {
           user && <button onClick={logout} type="submit" class="btn btn-primary" >cerrar cesion</button>
        }
     </div>




    );
};


export default CheckIn;