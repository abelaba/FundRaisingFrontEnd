import {useEffect} from 'react';

const ProfileHeader = () => {

    useEffect(() => {
        const button = document.getElementById("button");
        const menu = document.getElementById("mymenu");
        button.addEventListener("click",()=>{
          menu.classList.toggle("menu-header-profile"); 
        })
        console.log(button);
     }, [])

    return (
        <>
        <div className="header">
            
            <h2>Fund Me</h2>
            <div className="menu-bar" id="button">
                <i class="fas fa-bars"></i>
            </div>

            <div className="menu-profile" id="mymenu"  style={{ position: 'relative', zIndex: '1000' }}>
            <ul>
                <a href="/profile" >
                    <li className="target">Add</li>
                </a> 
                <a href="/editFunds">
                    <li>MyFundings</li>
                </a>
                <a href="/account">
                    <li>Bank</li>
                </a>
           
                <a href="/logout">
                    <li>Logout</li>
                </a>
            </ul>
            </div>

        </div>
        </>
    )

}

export default ProfileHeader
