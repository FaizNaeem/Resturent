import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Varification/Varification.css'

function Varification2 (){
    return(
        <div className="vari2"> 
        <div className="jh">
            <h2 className="h2-div"> <b>Varification</b></h2>
           <p className="vbn"> We have Sent you an email With a code</p>
        </div>
        <div className="mj">
        <div class="input-group flex-nowrap">
 
  <input  type="text" className="form-control fai" maxLength="1"  aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="input-group flex-nowrap">
 
  <input type="text" className="form-control fai" maxLength="1"   aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="input-group flex-nowrap">
 
  <input type="text" className="form-control fai" maxLength="1"  aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="input-group flex-nowrap">
 
  <input type="text" className="form-control fai" maxLength="1"  aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
<div class="input-group flex-nowrap">
 
  <input type="text" className="form-control fai" maxLength="1"  aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
</div>
<div>
  <NavLink to="/newpassword">    
    <button  className="Submit">
    Submit
    </button>
    </NavLink>

</div>
        </div>
    )
}
export default Varification2;