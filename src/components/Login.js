import {useRef} from 'react';
import {Redirect, Route,useHistory,useLocation} from 'react-router-dom';
import ProfileView from './ProfileView';
import jwt_decode from 'jwt-decode';
const Login = (props) => {
    const form = useRef(null);
    var response = null;
    const history = useHistory();
    const submit = e =>{
e.preventDefault();
const data = new FormData(form.current);
fetch("http://localhost:5000/auth" 
,{
    method:'POST',
    body:data
}).then(res=>res.json()).then(res=>response=res).then(res=>
    {
        if(res.token){
            localStorage.setItem("token",JSON.stringify(res));
            const admin = jwt_decode(res.token).admin;
            if(admin){
                window.location.replace('/admin')
            }else{
                window.location.replace('/profile')
            }
         
           
        }else{
            alert("wrong credentials try Again");
        }
    }
    )
 
    }
    const accessToken = localStorage.getItem("token");
    let loggedIn = false;
    let userId = null;
    return (
       
    <div className="login">
     <form ref={form} onSubmit={submit} id="content">

            <h3>
                Login
            </h3>
        <input type="email" name="email" placeholder="Enter Email" className="txt-input" />
        <input type="password" name="password" placeholder="password" className="txt-input" />
        <button type="submit" class="submit-btn">login</button>
    </form>
  
    </div>
   
    )
}

export default Login
