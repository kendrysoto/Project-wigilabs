import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from 'reactfire';


const Menu = () => {
  const user = useUser();

  return (
    

      <nav class="navbar navbar-expand-lg  navbar-dark bg-primary" >
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link className="nav-item nav-link" class="p-3 mb-2 bg-primary text-white" to="/Auth" >Login/CheckIn<span class="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" class="p-3 mb-2 bg-primary text-white" to="/Chat" >Chat</Link>
      <Link className="nav-item nav-link" class="p-3 mb-2 bg-primary text-white" to="/Contact" >Contact</Link>
     <Link className="nav-item nav-link" class="p-3 mb-2 bg-primary text-white" to="/Task" >agregar tarea</Link>
      <Link className="nav-item nav-link" class="p-3 mb-2 bg-primary text-white" to="/GalleryImg" >Gallery</Link>
      <a className="nav-item nav-link" >{user && <p>User :{user.email}</p>}</a>
      <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>



    
  )
}

export default Menu;
