import {useState,useRef} from 'react';
const Signup = (props) => {
     
    const form = useRef(null)

    const submit = e=> {
        e.preventDefault();
        const data =  new FormData(form.current);
        fetch('http://127.0.0.1:5000/Newuser',{
            method:'POST',
            body:data,
            
        }).then(
            res=>res.text()
        ).then(
            res=>{
                if(JSON.parse(res).success == true){
                        alert("Sign up success login to your account")
                        window.location.replace("/login");
                }else{
                    alert(JSON.parse(res).success)
                }}
        )
    }

    return (
        <div className="signup" onSubmit={submit} id="content">
        <form ref={form} method="POST" >
            <h3>
                signup
            </h3>
        <input type="email" name="email" defaultValue="" className="txt-input" 
        placeholder="Enter Email "   /> 
      
        <input type="text" id="username" name="username"  defaultValue="" placeholder="Enter username" className="txt-input"/>
    

        <input type="password" id="password" name="password" defaultValue="" placeholder="password" class="txt-input" />
        <button type="submit" class="submit-btn">signup</button>
    </form>
    </div>
    )
}

export default Signup
