import {useRef} from 'react';

const AddFund = () => {

    const form = useRef(null);

    const submit = (e)=>{
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem("token")).token
        const data = new FormData(form.current) 
        data.append("token",token)
        fetch(
            "http://localhost:5000/addFund",
            {
                method:'POST',
                body:data
            }
        ).then(res=>alert(" fund raising campaign added successfully !!"))
    }

    return (
        <div class="addfundraise">
            <form ref={form} onSubmit={submit}>

                <h3>Add Fund Raising Campaign</h3>
                <input type="text" name="title" class="txt-input" placeholder="Enter title here" required/> 
                <input type="number" name="Goal" class="txt-input" placeholder="Enter goal amount here" required/> 
            
                <select name="category" class="txt-input">
                    <option value="Education">Education</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                </select>

                <textarea name="descr" id="descr" class="txt-input" placeholder="Enter Decription Here" ></textarea>
                <button type="submit" class="submit-btn">Add</button>

            </form>
        </div>
    )

}

export default AddFund
