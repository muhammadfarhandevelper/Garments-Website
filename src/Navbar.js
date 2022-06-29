import React from 'react'
import {NavLink} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Navbar = () =>{
   
    return(
      <>
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-light  bg-primary ">
  <h3 className=" m-5 mb-3 mt-3 text-white" >Dot Garments</h3>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mx-5">
      <li className="nav-item active">
        <NavLink className="nav-link h5" to='/' activeClassName="active_class" exact>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link h5" to='/contact' activeClassName="active_class" exact>Contact us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link h5" to='about' activeClassName="active_class" exact>About us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link h5" to='gallery' activeClassName="active_class" exact>Gallery</NavLink>
      </li>
      <li className="nav-item d-flex">
      <i class="fas fa-shopping-cart mt-3 "></i>
      <i id="num">0</i>
      </li>

    </ul>
  </div>
</nav>


</>

    )
}




export default Navbar;
