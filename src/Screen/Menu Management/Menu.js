import React,{useEffect,useState} from 'react'
import Sidebar from '../../component/sidebar'
import './Menu.css'
import lock from '../../component/assets/2.png'
import Delete from '../../component/assets/Delete.png'
import { Getmenu } from '../../Redux/Action/userAction'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Menu ({Getmenu,user,menureducer}){
    let history = useHistory()
    const  [sat,setuse]= useState ("")

    useEffect(() => {
     setuse(menureducer)
    }, [menureducer])
    
    useEffect(() => {
        Getmenu(user)
        console.log("u",user)
       }, [])
       console.log("men",menureducer)

       function Navigettoitem(menuid) {
           history.push("/Menucotogry", {menuid: menuid})
           
       }
    return(
        <div className="">
            <div>
                <Sidebar />
            </div>
           <div className="importantmain">
               <NavLink to="/Menu1">
           <button className="bot">Add Menu</button>
           </NavLink>


           <h2 className="r"> <b> Menu Management </b> </h2>
           <input type="text" className="from form-control"  id="autoSizingInputGroup" placeholder="Search here" />
           <div className="margin">
           <Table>
                          
                          <tbody>
                              
                          <tr>
                                      <td></td>
                                      <td></td>
                                     <td></td>
                                     <td></td>
                                  
                                  </tr>
                                  <tr className="tg">
                                      <td >ID</td>
                                      <td>Menu</td>
                                     <td>Edit</td>
                                     <td>Delete</td>
                                  
                                  </tr>
                                        {menureducer ? 
                                <>
                                        {menureducer.map((value, index) => {
                                            return(
                                                <tr onClick={()=> Navigettoitem(value.menuid)}>
                                                <td>{index+1}</td>
                                                <td >{value.menuName}</td>
                                                
                                                <td>
                                                    {/* <NavLink to="/menumenegment"> */}
                                                 <span><img className="iii" src={lock}/></span>
                                                 {/* </NavLink> */}
                                                 </td>
                                                 <td>
                                                <span><img className="iii" src={Delete}/></span>
                                                </td>
                                            </tr>
                                            )
                                 })}
                                </> : null}
                                
                                 
                                  
                                    
                                  </tbody>
                                  </Table>
                         
           </div>
           </div>
           


        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    loading: state.userReducer.loader,
    menureducer: state.userReducer.menureducer
    
    })
    
    const mapDispatchtToProps = {
    Getmenu,
    }
    
    export default connect(mapStateToProps, mapDispatchtToProps)(Menu);