import {useEffect} from 'react'

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("token");
        window.location.replace("/");
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Logout
