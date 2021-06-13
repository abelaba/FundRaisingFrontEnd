import {useState,useEffect} from 'react';
import Transaction from './Transcation';
import jwt_decode from 'jwt-decode';
const Transactions = () => {
    const [Transactions,setTransactions] = useState([]);
    const token = localStorage.getItem("token")
    const decoded = jwt_decode(token)
    const userId = decoded.id 
    useEffect(()=>{
        const getTransactions = async ()=>{
         const transactionsFromDb = await transactionsFetch()
         setTransactions(transactionsFromDb)
        
       }
       getTransactions()
     },[]) 
     const  transactionsFetch = async ()=>{
        const res = await fetch(
          `http://localhost:5000/Transactions?userId=${userId}`,
          {
            method:'GET',
          }
        )
        const data = await res.json();
        return data
      }

    return (
     <div>
     
     <table className="transaction-view">
     <h2 className="center">Transactions</h2>
    <tr>
      <th>Type</th>
      <th>Account Number</th>
      <th>Amount</th>

    </tr>
            
        {Transactions.map((transaction)=> (<Transaction transaction={transaction}/>))}
        
    </table>

     </div>
    )
}

export default Transactions
