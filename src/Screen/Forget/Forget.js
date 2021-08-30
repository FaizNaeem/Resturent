import React from 'react'
import '../Forget/Forget.css'
import mn from '../../component/assets/email.png'
import { NavLink } from 'react-router-dom'


function Forget2 (){
return(
    <div className="forget-main">
        <div className="h2-div">
            <h2><b>Forget Password</b></h2>
        </div>
<div className="input-group flex-nowrap nowra">
  <span className="input-group-text " id="addon-wrapping"><img className="icon" src={mn}/></span>
  <input type="text" className="form-control alrt " placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div className="no" >
    <NavLink to="/verification">
    <button className="submit">
        Submit
    </button>
    </NavLink>
</div>
    </div>
)
}
export default Forget2;