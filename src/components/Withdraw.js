import {useRef,useState,useEffect} from 'react';
import jwt_decode from 'jwt-decode';
const Withdraw = () => {
    const [balance,setBalance] = useState([]);
  
    const form = useRef(null)
    const token = localStorage.getItem("token")
    const userId = jwt_decode(token).id
   
    console.log(userId)
    useEffect(()=>{
        const getBalance = async ()=>{
         const FundsFromDb = await balanceFetch()
         setBalance(FundsFromDb.balance)
        
       }
      getBalance()
     },[]) 
     //fetch  
     const  balanceFetch = async ()=>{
       const res = await fetch(
         "http://localhost:5000/getBalance",
         {
           method:'POST',
           body:JSON.stringify(`{"id":${userId}}`)
           ,headers: {
            'Content-Type': 'application/json'
           
          },
           
         }
       )
       const data = await res.json();
       return data
     }
 
    const submit = (e)=>{
        const data  = new FormData(form.current);
        data.append("id",userId); 
        e.preventDefault();
        fetch(
            "http://localhost:5000/withdraw",
            {
                method:"POST",
                body:data 
            }
        ).then(
            res=>res.text()
        ).then(
            res=>{
                if(JSON.parse(res).success == true){
                    alert("withdraw successful");
                    balanceFetch();
                    window.location.reload();
                }else{
                    alert(JSON.parse(res).success)
                }}
        )
    
    }
    return (
        <div className="donate">
        <form ref={form} onSubmit={submit}>
        <h3>Withdraw Balance: {balance}</h3>
            <input type="number" name="amount" placeholder="Enter amount in ETB " className="txt-input" />
            <input type="text" name="account" placeholder="account number" className="txt-input" />
            <button type="submit" class="submit-btn">Withdraw</button>

        </form>
    </div>
    )
}

export default Withdraw
