import {useEffect} from 'react';

const AdminHeader = () => {
    useEffect(() => {
        const button = document.getElementById("button");
        const menu = document.getElementById("mymenu");
        button.addEventListener("click",()=>{
          menu.classList.toggle("menu-header");
          console.log(menu);
           
        })
        console.log(button);
     }, [])
    return (
        <>
        <div class="header">
            <h2>Fund Me</h2>
            <div className="menu-bar" id="button">
            <i class="fas fa-bars"></i>
            </div>
        <div class="menu admin-header" id="mymenu" style={{ position: 'relative', zIndex: '1000' }}>
            <ul>
                
              
                <a href="/logout">
                    <li>Logout</li>
                </a>
            </ul>
        </div>
    </div>
        </>
    )
}

export default AdminHeader
