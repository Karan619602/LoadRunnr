import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Register } from './user/users';
import { Login } from './user/login';

import Log from './user/logout';
import './App.css';

import Header from './header';
import { loaduser } from './actions/authactions';
import { useEffect } from 'react';
import store from './store'

import ProtectedRoute from './user/route.js'
import Profile from './user/profile';
import Dashboard from './user/dashboard';
import VerifyDocuments from "./user/VerifyDocuments"
import TrackDriver from './user/TrackDriver';
import WalletLogs from './user/WalletLogs'
import Updateprofile from './user/Updateprofile';
import ProfileDetails from './user/ProfileDetails';
function App() {

  useEffect(()=>{
    store.dispatch(loaduser())
  },[])   
 
  return (
   <Router> 
   
    
     <Header />
     {/* <Register/>  */}
 
        <Route path="/register"  component={Register}  /> 
         <Route path="/login"  component={Login}  /> 
      <Route path="/logout" component={Log} />


<ProtectedRoute path="/profile" component={Profile} exact/>
<ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact/>
<Route path="/admin/driver/details/:id"  component={ProfileDetails} exact/>
<Route path="/admin/driver/vehicledetails/:id"  component={VerifyDocuments} exact/>
{/* <Route path="/trackDriver" component={TrackDriver} exact></Route> */}
<Route path="/walletLogs/:id" component={WalletLogs} exact></Route>
{/* <Route path="/updateProfile/:id" component={Updateprofile} exact></Route> */}

      

   </Router>
  );
}

export default App;
