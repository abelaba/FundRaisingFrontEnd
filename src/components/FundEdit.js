import {useRef} from 'react';

const FundEdit = ({fund}) => {

    const form = useRef(null);
    
    const submit = (e)=>{
        e.preventDefault();
        const data = new FormData(form.current);
        const  accessToken = JSON.parse(localStorage.getItem("token")).token
        data.append("token",accessToken);
        fetch("http://localhost:5000/delete",
            {
                method:'POST',
                body:data
            }
        ).then(res=>{window.location.reload()})
    }

    return (
        <>
        <div className="fundraise">
            <form ref={form} onSubmit={submit}> 
                <h3>{fund.category}</h3>
                <h2>{fund.title}</h2>
                <p>{fund.description}</p>
                <input type="number" name="fundId" value={fund.id} hidden/>
                <button className="donate-btn stop">Stop</button>
            </form>
        </div>
        </>
    )

}

export default FundEdit
