import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from 'reactfire';
import '../style/SideMenu.css';


const Menu = () => {

  const mystyle2 = {
    color: "#1E90FF",
  };
  const user = useUser();

  return (
    <div>
      <div className="contenedor">
        <div ><h1 style={mystyle2} >APP WIGILABS</h1></div>
      </div>
      <div className="SideMenu-container">
      </div >
      <nav >
        <div id="menuA">
          <div href="#" className="showhim"><span className="menumov">  &#8803;</span>
            <div className="showme">

              <li><Link to="/" >LogIn/Register</Link></li>
              <li><Link to="/Contact" >Contact</Link></li>
              <li><Link to="/Task" >agregar tarea</Link></li>
              <li><Link to="/GalleryImg" >Gallery</Link></li>
              <li>{user && <p>User :{user.email}</p>}</li>
              <hr></hr>
            </div>
          </div>
        </div>

        <ul className="elivi">

          <li className="fac"><Link to="/" >LogIn/Register</Link></li>
          <li className="fac"><Link to="/Contact" >Contact</Link></li>
          <li className="fac"><Link to="/Task" >add Task</Link></li>
          <li className="fac"><Link to="/GalleryImg" >Gallery</Link></li>
          <li className="fac">{user && <p>User :{user.email}</p>}</li>
        </ul>
      </nav>
      <hr className="hr"></hr>
    </div>
  )
}

export default Menu;
