import {BrowserRouter as Router} from 'react-router-dom';
import {useRef} from 'react';
const Pay = (props) => {
    const form = useRef(null);
   const str = window.location.pathname;
   const id = parseInt(str.split('/')[2])
   console.log(id)
    const submit= (e)=>{
        const data = new FormData(form.current)
        data.append("cid",id);
        e.preventDefault();
        fetch("http://localhost:5000/pay",
        {
        method:'POST',
        body:data
}
        ).then(
            res=>res.text()
        ).then(
            res=>{
                if(JSON.parse(res).success == true){
                    alert("thank you for your generosity")
                }else{
                    alert(JSON.parse(res).success)
                }}
        )
    }
    return (
        <Router>
        <div className="donate">
        <form ref={form} onSubmit={submit}>
            <h3>Donate</h3>
            <input type="hidden" value={props.campaignId} />          
            <input type="number" name="amount" placeholder="Enter amount in ETB " className="txt-input" />
            <input type="text" name="name" placeholder="Name on card " className="txt-input" />
            <input type="text" name="card" placeholder="Card Number" className="txt-input" />
            <input type="text" name="expiry" placeholder="02/11/2020" className="txt-new" />
            <input type="number" name="cvv" placeholder="cvv" className="txt-new" />
            <button type="submit" className="donate-btn">Donate</button>
            
            
        </form>
    </div>
    </Router>
    )
}

export default Pay
