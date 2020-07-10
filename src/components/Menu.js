import React from 'react';
import '../styles/SideMenu.css';
import { Link } from "react-router-dom";
import { useUser } from 'reactfire';


const Menu = () => {
  const user = useUser();

  return (
    <div>
      <div class="SideMenu-container">
        <h1 class="SideMenu-h1">GALERIA</h1>
      </div >
      <nav>
        <div id="menuA">
          <div href="#" class="showhim"><span class="menumov"> &#8803;</span>
            <div class="showme">
              <li><Link to="/" >registrarse</Link></li>
              <li><Link to="/Auth" >iniciar cesion</Link></li>
              <li><Link to="/Chat" >Chat</Link></li>
              <li><Link to="/Contact" >contacto</Link></li>
              <li><Link to="/Task" >agregar tarea</Link></li>
              <li><Link to="/GalleryImg" >Gallery</Link></li>
              <li>{user && <p>usuario:{user.email}</p>}</li>
            </div>
          </div>
        </div>

        <ul class="elivi">
          <li class="fac"><Link to="/" >registrarse</Link></li>
          <li class="fac"><Link to="/Auth" >iniciar cesion</Link></li>
          <li class="fac"><Link to="/Chat" >Chat</Link></li>
          <li class="fac"><Link to="/Contact" >contacto</Link></li>
          <li class="fac"><Link to="/Task" >agregar tarea</Link></li>
          <li class="fac"><Link to="/GalleryImg" >Gallery</Link></li>
          <li class="fac">{user && <p>usuario:{user.email}</p>}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;
