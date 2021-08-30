import React,{useState,useEffect} from 'react'
import Sidebar from '../../component/sidebar'
import { Getmenu, Menu } from '../../Redux/Action/userAction'
import { connect } from 'react-redux';
function Menu1({Menu,user}){
    console.log(user.uid)
    const [menu,setMenu] = useState ("") 
    function Menuadd(){
        if(menu==""){
            alert("Fill please")
        }
        else{
            Menu(menu,user)
     
        }
        setMenu("")
        
    }
    

    return(
        <div>
            <div>
                <Sidebar />
            </div>
            <div className="importantmain">
        

           <h2 className="r"> <b> Menu  </b> </h2>
           <label className="mj">Menu Name</label>
           <input type="text" className="f form-control" value={menu} id="autoSizingInputGroup" onChange={(e) => setMenu(e.target.value)} />
           
           <button className="buttuon" onClick ={Menuadd}>Add</button>
</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    loading: state.userReducer.loader
    
    })
    
    const mapDispatchtToProps = {
    Menu, Getmenu
    }
    
    export default connect(mapStateToProps, mapDispatchtToProps)(Menu1);
    
    