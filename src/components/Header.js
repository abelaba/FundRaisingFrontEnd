import {useEffect} from 'react';
const Header = () => {
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
        <div class="menu" id="mymenu" style={{ position: 'relative', zIndex: '1000' }}>
            <ul>
                <a href="/signup#content" >
                    <li class="target">Start Now</li>
                </a>
                <a href="/funds">
                    <li>Fundraisings</li>
                </a>
              
                <a href="/login#content">
                    <li>Login</li>
                </a>
            </ul>
        </div>
    </div>
        </>
    )
}

export default Header
