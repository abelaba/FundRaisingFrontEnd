import {useState,useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import AdminFund from './AdminFund';
import {Redirect} from 'react-router-dom';
import AdminHeader from './AdminHeader';
const Admin = ()=>{
const [data, setData] = useState([]);
var isAdmin = false;
try{
     const token =  localStorage.getItem("token");
      isAdmin = jwt_decode(token).admin;
    }catch (e){

    }
    useEffect(()=>{
        const getFunds = async ()=>{
           
            const res = await dataFetch();
            setData(res);

        }  

        getFunds();
    },[]);
     const dataFetch = async ()=>{
        const res  =  await  fetch(
            "http://localhost:5000/getFunds",
            {
                method:"GET",
                
            }
            
         )
         const data = await res.json();
         return data
     }
  
        return (
            <>
            <AdminHeader/>
            <div className="funds">
            {isAdmin ? data.filter(x=>x.approved == false).map((fund)=>(<AdminFund key={fund.id} fund={fund}/>)): (<Redirect to="/login"/>)}
           </div>
        </>
        )
     
}
export default Admin