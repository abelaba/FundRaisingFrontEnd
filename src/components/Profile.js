import {useState,useEffect} from 'react';
import {Redirect, Route,BrowserRouter as Router} from 'react-router-dom';
import ProfileView from './ProfileView';
import jwt_decode from 'jwt-decode';

const Profile = (props) => {
  
    try {
        var accessToken = localStorage.getItem("token");
        var decodedToken = jwt_decode(accessToken);
    } catch (error) {
        window.location.replace("/login");
    }
    
    if(decodedToken.id){
        var loggedIn = true;
        var userId = decodedToken.id;
    }
   
   
    return(
        <Router>
            <Route path="/profile" exact render={
                (props)=>{
                    return loggedIn ? (<ProfileView userId={userId} />):(<Redirect to="/login" />)
                }
            } />
        </Router>

    )
      
}

export default Profile
