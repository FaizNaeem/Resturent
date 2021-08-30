import React from 'react'
import { NavLink } from 'react-router-dom';
import './Poppins.css'

function Poppins(){
    return(
        <div className="mainp" >
            <div className="text" >
<h1 className="np">Poppins</h1>
<p className="pk">M a r c h a n t</p>
<NavLink to="/Loogin2">
<button className="hg">Login</button>
</NavLink>
<p className="jklm">Don't have an account? <NavLink to="/singup">
    <a className="am" href="#">Sign Up</a>
    </NavLink>
</p>
            </div>
        </div>
    )
}
export default Poppins;