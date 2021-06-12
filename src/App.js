import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './components/Header';
import Floating from './components/Floating';
import Content from './components/Content';
import Footer from './components/Footer';
import Profile from './components/Profile';
import {useEffect,useState} from 'react';
import Funds from './components/Funds';
import FundsEdit from './components/FundsEdit';
import ProfileHeader from './components/ProfileHeader';
import jwt_decode from 'jwt-decode';
import Pay from './components/Pay';
import AccountRoute from './components/AccountRoute';
import Logout from './components/Logout';
import Admin from './components/Admin';

function App() {

    const [funds,setFunds] = useState([]);

    try{
        const token = localStorage.getItem("token")
        const decoded = jwt_decode(token)
        var userId = decoded.id 
    }catch{
    }
 
    useEffect(()=>{
        const getFunds = async ()=>{
            const FundsFromDb = await fundsFetch()
            setFunds(FundsFromDb)
        }
        getFunds()
    },[]) 
  
    const  fundsFetch = async ()=>{
        const res = await fetch(
        "http://localhost:5000/getFunds",
        {
            method:'GET',
        }
        )
        const data = await res.json();
        return data
    }
  
    return (
        <Router>
        <>
        <header className="App-header">

            <Route path="/" exact render={(props)=>(
                <>
                <Header />
                <Floating />
                <Content />
                </>
            )}/>

            <Route path="/logout" render={(props)=>(
                <>
                <Logout />
                </>
            )}/>

            <Route path="/account" exact render={(props)=>(
                <>
                <AccountRoute />
                </>
            )}/>

            <Route path="/login" exact render={(props)=>(
                <>
                <Header />
                <Floating />
                <Content />
                </>
            )}/>

            <Route path="/admin" exact render={(props)=>(
                <>
                <Admin/>
                </>
            )}/>

            <Route path="/signup" exact render={(props)=>(
                <>
                <Header />
                <Floating />
                <Content />
                </>
            )}/>

            <Route path="/profile" exact render={(props)=>(
                <Profile/>
            )}/>

            <Route path="/funds" exact render={(props)=>(
                <>
                <Header />
                <Funds funds={funds}/>            
                </>
            )}/>
            
            <Route path="/editFunds" exact render={(props)=>(
                <>
                <ProfileHeader />
                <FundsEdit funds={funds} userId={userId} />
                </>
            )}/>
                
            <Route path="/pay/:id" exact render={(props)=>( 
                <>
                <Pay/>
                </>
            )}/>
    
        </header>

        <footer></footer>

        </>
        </Router>
    );
}

export default App;
