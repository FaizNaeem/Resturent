import React ,{useState}from 'react'
import './index.css'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import lock from '../../component/assets/2.png'
import Delete from '../../component/assets/Delete.png'
import Sidebar from '../../component/sidebar'


import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'
// const[myStyle, setmyStyle]= useState
//   ({
//       color: 'black',
//       backgroundColor: 'white'
//     })
//     const [btntext, setbtntext]=  useState("Enable Dark mode")
//  const Toggle =()=>{
//     if(myStyle.color=='black'){
// setmyStyle({
//   color: 'white',
//   backgroundColor: 'black'
  
// })
// setbtntext("Enable light mode")
//     }
//     else{
// setmyStyle({
//   color: 'black',
//   backgroundColor: 'white'
  
// }) 
//   setmyStyle("Enable Dark mode")
//  }
//   }
  
 
// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-device-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isTabletOrMobileDevice = useMediaQuery({
//     query: '(max-device-width: 1224px)'
//   })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
 


const Home = (props) => {
    console.log("props", props)
    return (
        
        <div>
        <div>
        <Sidebar />
        </div>
            {/* <p>{props.id}</p>
            <p>{props.nameid}</p> */}
        
            

            <div className="importantmain" >

               <NavLink to ="/location">            
                  <button className="bot">Add Location</button>
                </NavLink>

                  <h2 className="r">Add a Location </h2>
                 
                
                    <Table>
                          
                    <tbody>
                            <tr>
                                <th>Resturant Name</th>
                                <th>Location</th>
                               <th>Edit</th>
                               <th>Delete</th>
                            
                            </tr>
                      
                            <tr>
                                <td>Uniuqe Food</td>
                                <td>orangi Town Karachi</td>
                                <td>
                                    <a href="#">
                                 <span><img className="iii" src={lock}/></span>
                                 </a>
                                 </td>
                                 <td>
                                     <a href="#">
                                <span><img className="iii" src={Delete}/></span>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Food</td>
                                <td>orangi Town Karachi</td>
                                <td>
                                <a href="#">
                                 <span><img className="iii" src={lock}/></span>
                                 </a>
                                 </td>
                                 <td>
                                 <a href="#">
                                <span><img className="iii" src={Delete}/></span>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Uniuqe Food</td>
                                <td>orangi Town Karachi</td>
                                <td>                               
                                <a href="#">
                                    <span><img className="iii" src={lock}/></span>
                                    </a>
                                    </td>
                                    <td>
                                    <a href="#">
                                <span><img className="iii" src={Delete}/></span>
                                </a>
                                </td>
                            </tr>
                    
                        
                        
                            <tr>
                                <td>Uniuqe Food</td>
                                <td>orangi Town Karachi</td>
                                <td>
                                <a href="#">
                                    <span><img className="iii" src={lock}/></span>
                                    </a>
                                </td>
                                <td>
                                <a href="#">
                                    <span><img className="iii" src={Delete}/></span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Uniuqe Food</td>
                                <td>orangi Town Karachi</td>
                                 
                                 <td>
                                 <a href="#">
                                     <span><img className="iii" src={lock}/></span>
                                     </a>
                                     </td>
                                     <td>
                                     <a href="#">
                                <span><img className="iii" src={Delete}/></span>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Uniuqe Food</td>
                                <td>orangi Town Karachi</td>
                                <td>
                                <a href="#">
                                 <span><img className="iii" src={lock}/></span>
                                 </a>
                                 </td>
                                 <td>
                                 <a href="#">
                                <span><img className="iii" src={Delete}/></span>
                                </a>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </div>

            </div>




            


        
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,

})

const mapDispatchtToProps = {
}

export default connect(mapStateToProps, mapDispatchtToProps)(Home);
