import React from 'react'
import Sidebar from '../../component/sidebar'
import './location.css'
import { useHistory } from 'react-router-dom'


function Location (){
  let history = useHistory()
  const Done = () => {

  history.push("/Home")
  }
    return(
        <div>
<div>
    <Sidebar />
</div>

<div className="importantmain">
    

<div className="row">




<div className="col-lg-6 m ">
<h2 className="r"> <b> Location info </b> </h2>
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Resturent Name" />
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Email" />
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Type" />

<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Store Address" />
<select className=" mn ">
    <option>Chain</option>
<option>Yes</option>
<option>No</option>
</select>

<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Username" />
<input type="text" className="mn form-control"  id="autoSizingInputGroup" placeholder="Password" />
<select className=" mn ">
    <option>Select menu </option>
    
</select>
<div class="mn form-floating">
  <textarea className=" mn form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>

</div>


<div className="col-lg-4 bn">
<h2 className="b"> <b>Bank info </b> </h2>
<div className="bak">
<input type="text" className="nb form-control"  id="autoSizingInputGroup" placeholder="Banks" />
<input type="text" className="nb form-control"  id="autoSizingInputGroup" placeholder="Routing Number" />
<input type="text" className="nb form-control"  id="autoSizingInputGroup" placeholder="Account Number" />
{/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary hj" data-bs-toggle="modal" data-bs-target="#exampleModal">
Proceed
</button>
</div>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div className="modal-content mh">
    
    
      <div className="modal-body jkl">
      
          McDonalds
      
      <div className="modal-footer jkl">
          
      </div>
      
      Star Bucks
      <div class="modal-footer">
          
      </div>
      Pizaa Hut
      <div class="modal-footer">
          
      </div>
      Burger King
      <div class="modal-footer">
        
      </div>
      Taco Bell
      <div class="modal-footer">
          
      </div>
      Wendy's
      <div class="modal-footer">
      </div>
      
      </div>
      
      <div className="">
        <button type="button" className="btn btnm btn-" data-bs-dismiss="modal" onClick={Done}>Done</button>
      </div>
      
    </div>
  </div>

</div>
</div>

</div>


</div>


</div>
    )
} 
export default Location;