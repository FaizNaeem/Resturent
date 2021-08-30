import React from 'react';
import Signup from './Screen/singup'
import Login from './Screen/login'
import Forgot from './Screen/forget'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './config/history'
import Varification from '../src/Screen/verification'
import Home from './Screen/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Loogin from './Screen/Login/Login';
import Loogin2 from './Screen/Login/Login';
import AuthRoutes from './utils/AuthRoutes'
import PrivateRoute from './utils/PrivateRoute';
import Forget2 from './Screen/Forget/Forget';
import Singup2 from './Screen/singup2/Singup2';
import Sidebar from './component/sidebar';
import Varification2 from './Screen/Varification/Varificatin';
import Location from './Screen/Location and bank info/location';
import Menu from './Screen/Menu Management/Menu';
import Item from './Screen/Item info/Item';
import Menucatogery from './Screen/Menu manegment2/menu';
import MenuC from './Screen/Menu category/MenuC';
import Menu1 from './Screen/menu/menu';
import Index from './Screen/Change Password/index'
import Poppins from './Screen/popins/Poppins';

function App(){
  return(
   <div>
     <Provider store={store}> 
     
   <Router history={history}>

       <Switch> 
       <AuthRoutes exact={true} path="/">
                <Poppins />
              </AuthRoutes>

              <AuthRoutes exact={true} path="/loogin2">
                <Loogin2 />
              </AuthRoutes>
           
              <AuthRoutes exact={true} path="/Singup">
                <Singup2 />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/forgetpassword">
                <Forget2 />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/newpassword">
                <Index />
              </AuthRoutes>
              <AuthRoutes exact={true} path="/verification">
                <Varification2 />
              </AuthRoutes>
              {/* <AuthRoutes exact={true} path="/menumenegment">
                <Menucotogery />
              </AuthRoutes> */}








              <PrivateRoute exact={true} path="/home">
                <Home />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/location">
                <Location />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/Menucotogry">
                <Menucatogery />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/menunew">
                <Menu />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/menu1">
                <Menu1 />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/Item">
                <Item />
              </PrivateRoute>
              
              
               <PrivateRoute exact={true} path="/MenuC">
                <MenuC />
              </PrivateRoute> 



            {/* <Route exact render={(props) =>  <Login {...props} />} path="/login" /> */}
            {/* <Route render={(props) =>  <Signup {...props} />} path="/signup" /> */}
            {/* <Route render={(props) =>  <Home {...props} />} path="/home" /> */}
            {/* <Route render={(props) =>  <Varification {...props} />} path="/varification" /> */}
            {/* <Route render={(props) =>  <Forgot {...props} />} path="/forgot" /> */}
            {/* extra */}
           {/* <Route render={(props) =>  <Home {...props} />} path="/home" />
            <Route exact render={(props) =>  <Loogin2 {...props} />} path="/Loogin2" />
            <Route exact render={(props) =>  <Singup2 {...props} />} path="/singup" /> 
            <Route exact render={(props) =>  <Forget2 {...props} />} path="/forget" /> 
            <Route exact render={(props) =>  <Varification2 {...props} />} path="/varification" />
            <Route exact render={(props) =>  <Location {...props} />} path="/Location" />  
            <Route exact render={(props) =>  <Menu {...props} />} path="/Menu" />  
            <Route exact render={(props) =>  <Item {...props} />} path="/Item" />  
            <Route exact render={(props) =>  <Menu2 {...props} />} path="/Menu2" />
            <Route exact render={(props) =>  <MenuC {...props} />} path="/MenuC" />
            <Route exact render={(props) =>  <Menu1 {...props} />} path="/Menu1" />  
            <Route exact render={(props) =>  <Index {...props} />} path="/Index" />  
            <Route exact render={(props) =>  <Poppins {...props} />} path="/" />   */}
            {/* extra */}
            {/* <Route render={(props) =>  <Sidebar {...props} />} path="/" />  */}

         </Switch>
       </Router>
       
     </Provider> 
       {/* <Varification /> */}
       {/* <Sidebar />/ */}
    </div>

  )
}

export default App;