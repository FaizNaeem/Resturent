import React, { useState } from 'react';
import '../Login/Login.css'
import picture from '../../component/assets/email.png'
import lockpicture from '../../component/assets/passward.png'
import { NavLink } from 'react-router-dom'
import fire from '../../fire'
import { useHistory } from 'react-router-dom'
import { LoginAction } from '../../Redux/Action/userAction'
import { connect } from 'react-redux';


function Loogin2({LoginAction, user, loading}) {
  let history = useHistory()
  const [emai, setemai] = useState('')
  const [password, setpas] = useState('')
  // const [user, setUser] = useState(null)

  const login = () => {
    console.log("data",emai , "pass",password)
      LoginAction(emai, password)
      
    fire.auth().signInWithEmailAndPassword(emai, password)
    
      .then(res => {
        // setUser(res.user.uid)
        // setUseremail(res.user.email)
        history.push("/home")
      })
      .catch((err => {
        alert(err.message)
      }))
  }



  console.log("reducer user", user, loading)

if(!user){

    return (
      <div className="main">
        <div className="block">

          <h2><b>Login</b></h2>
        </div>
        <div class="col-auto">
          <label class="visually-hidden" for="autoSizingInputGroup">Username</label>

        </div>
        <div className="input-group kl" >
          <div class="input-group-text"><img className="icon" src={picture} /></div>
          <input type="text" className="m1 form-control" id="autoSizingInputGroup" placeholder="Email"  onChange={(e) => setemai(e.target.value)} />
        </div>

        <div className="input-group kl" >
          <div class="input-group-text"><img className="icon" src={lockpicture} /></div>
          <input type="text" className="inp-con form-control" id="autoSizingInputGroup" placeholder="Passwor" onChange={(e) => setpas(e.target.value)}/>
        </div>
        <div className="form-check form-switch rememberme">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
          <label className="form-check-label " for="flexSwitchCheckChecked">Remember Me   </label>
        </div>
        <NavLink to="/forget">
          <div className="div-c">
            <a className="a" >Forgot Password?</a>
          </div>
        </NavLink>
        {/* <NavLink to="/home"> */}
          <div className="jsx">
            <button className="butto" onClick={login} > Login</button>
          </div>
        {/* </NavLink> */}
        <div>
          Do not have an account
  <NavLink to="/singup">
            <a className="href">Sing Up</a>
          </NavLink>
        </div>
      </div>
    );
  }
  
  else {
    return (
      <Loogin2 />
    )
  }
}

const mapStateToProps = (state) => ({
user: state.userReducer.user,
loading: state.userReducer.loader

})

const mapDispatchtToProps = {
LoginAction
}

export default connect(mapStateToProps, mapDispatchtToProps)(Loogin2);

