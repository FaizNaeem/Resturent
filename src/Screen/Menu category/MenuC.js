import React ,{useState} from 'react'
import Sidebar from '../../component/sidebar'
import {Category} from '../../Redux/Action/userAction'
import { connect } from 'react-redux'
import './MenuC.css'

function MenuC({Category}){

    const [CotegoryMenu,SetCotegry] = useState ("")

    function Add(){
        if(CotegoryMenu==""){
            alert("please fill")
        }
        else{
            Category(CotegoryMenu)
        }

        SetCotegry("")
        
        
    }
    console.log("catogry",CotegoryMenu)
    
    return(
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="importantmain">
        

           <h2 className="r"> <b> Menu Management </b> </h2>
           <label className="mj">category Name</label>
           <input type="text" className="f form-control" value={CotegoryMenu}  id="autoSizingInputGroup" onChange={(e)=> SetCotegry (e.target.value)}/>
           <button className="buttuon" onClick={Add}>Add</button>
</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    loading: state.userReducer.loader
    
    })
    
    const mapDispatchtToProps = {
        Category
    }
    
    export default connect(mapStateToProps, mapDispatchtToProps)(MenuC);