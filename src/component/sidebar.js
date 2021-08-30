import React from 'react';
import './sidebar.css';
import yellow from '../component/assets/Oval.png'
import { NavLink } from 'react-router-dom';

function Sidebar(){
  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
      

    return(
        <div className="">

<div id="mySidenav" className="sidenav">

  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <div className="sideba">

            <div className="text">
            <h4 className="tex">Poppins</h4>
            <p className="te">Marchant</p>
            
         <p className="te"> Add Location</p>
         
        <p className="te">Menu</p>
            </div>

          <div className="pic">
              <img className="goal" src={yellow}/>
          </div>


        </div>

</div>

<span className="span" onClick={openNav}>&#9776;</span>


<div className="ta">
         <div className="sideba">

            <div className="text">
            <h4 className="tex">Poppins</h4>
            
            <p className="te">Marchant</p>
            
            <NavLink to="/Location">
         <p className="te"> Add Location</p>
         </NavLink>
         <NavLink to="/menunew">
         <p className="te">Menu</p>
         </NavLink>
            </div>

          <div className="pic">
              <img className="goal" src={yellow}/>
          </div>


        </div>
            </div>  



        </div>
    )
}
export default Sidebar;