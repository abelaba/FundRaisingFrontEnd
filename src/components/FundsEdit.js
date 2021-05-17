import React from 'react'
import FundEdit from './FundEdit'
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';

const FundsEdit = ({funds,userId}) => {

    try {
        var token = localStorage.getItem("token")
        var id =  jwt_decode(token).id
        var loggedIn = false;
        if((id==userId)){
            loggedIn =  true;
        }
    } catch (error) {
        console.log(error)
    }
    
    return (
        <div className="funds">
            {loggedIn ? funds.filter(x=>x.userid ==userId).map((fund)=>(<FundEdit key={fund.id} fund={fund}/>)): (<Redirect to="/login"/>)}
        </div>
    )

}

export default FundsEdit
