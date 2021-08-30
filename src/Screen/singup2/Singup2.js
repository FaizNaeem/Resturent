import React from 'react'
import { useState } from 'react'
import '../singup2/Singup2.css'
import icon from '../../component/assets/usericon.png'
// import lock from '../../component/assets/passward.png'
import msg from '../../component/assets/email.png'
import Phones from '../../component/assets/phone.png'
import { NavLink } from 'react-router-dom'
import fire from '../../fire'
import { useHistory } from 'react-router-dom'
import { SingupAction } from '../../Redux/Action/userAction'
import { connect } from 'react-redux';

function Singup2({ SingupAction, user, loading }) {

    let history = useHistory()
    const [name, setName] = useState('')
    const [username, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [phone, setphone] = useState('')


    const Singup = async () => {
        SingupAction(email, pass, name, phone, username, )
        .then((res) => {
            console.log(res ,"res")
            history.push('/home')
        })
        .catch((err) => {
            console.log(err)
        })

    }

    console.log("reducer user", user, loading)
    return (
        <div className="secondmain">
            <div className="main-singup">
                <div className="h1">
                    <h2><b>Sing up</b></h2>
                </div>
                <div class="row">
                    <div className="hgfh col-lg-6">
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><img className="usericon" src={icon} /></span>
                            <input type="text" className="form-control type" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><img className="usericon" src={msg} /></span>
                            <input type="text" class="form-control type" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="input-group flex-nowrap ">
                            <span class="input-group-text" id="addon-wrapping"><img className="usericon" src={Phones} /></span>
                            <input type="Number" class="form-control type" placeholder="Phone" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setphone(e.target.value)} />
                        </div>
                    </div>

                    <div class="col-lg-6" >

                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><img className="usericon" src={icon} /></span>
                            <input type="text" className="form-control type" placeholder="UserName" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setuserName(e.target.value)} />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><img className="usericon" src={msg} /></span>
                            <input type="Password" class="form-control type" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setpass(e.target.value)} />
                        </div>
                        <div className="bu">
                    <button className="normal" onClick={Singup}>Sing Up</button>
                </div>
                    </div>


                    <div className="di">
                        <p>Already have an account?
                            <NavLink to="/Loogin2">
                                <a className="href"> Sing in</a>
                            </NavLink>
                        </p>

                    </div>
                </div>
                
            </div>




        </div>
    )

}


const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    loading: state.userReducer.loader

})

const mapDispatchtToProps = {
    SingupAction
}

export default connect(mapStateToProps, mapDispatchtToProps)(Singup2)