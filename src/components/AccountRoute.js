import jwt_decode from 'jwt-decode';
import {Redirect} from 'react-router-dom';
import AccountView from './AccountView';
const AccountRoute = () => {
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token)
    const userId = decoded.id 
    var loggedIn = false;
    if(userId){
        loggedIn = true;
    }
    return (
    <>
    {loggedIn?(<AccountView />):(<Redirect to="/login"/>)}
    </>
    )
}

export default AccountRoute
