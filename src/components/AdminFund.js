import React from 'react'

const AdminFund = ({fund}) => {
    const token = localStorage.getItem("token");
    const tokenM = JSON.parse(token).token
    const decline= (e)=>{
        var obj ={}
        obj.id = `${e.target.name}`
        obj.token = `${tokenM}`
        fetch(
           "http://localhost:5000/decline",{
               method:"POST",
               body:JSON.stringify(obj)
               ,headers: {
                'Content-Type': 'application/json'
              },
           }
    );} 
    const approve = (e)=>{
        console.log(`{"id":${e.target.name},"token":'${tokenM}'}`);
        var obj ={}
        obj.id = `${e.target.name}`
        obj.token = `${tokenM}`

        fetch(
            "http://localhost:5000/approve",
            {
                method:"POST",
                body:JSON.stringify(obj)
                ,headers: {
                    'Content-Type': 'application/json'
                  },
            }
        )
    }   
    
    return (
        <>
    <div className="fundraise">
       <div> 
        <h3>{fund.category}</h3>
        <h2>{fund.title}</h2>
        <p>{fund.description}</p>
        <p>Goal:{fund.goal}</p>
        <input type="number" name="fundId" value={fund.id} hidden/>
        <button onClick={decline} name={fund.id} className="donate-btn stop">Decline</button>
        <button onClick={approve} name={fund.id} className="donate-btn approve">Approve</button>
       </div>
       </div>
    </>
    )
}

export default AdminFund
