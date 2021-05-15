import {BrowserRouter as Router, Route} from 'react-router-dom';
import Info from './Info';
import Login from './Login';
import Signup from './Signup';

const Menu = () => {
    return (
        <Router>
        <div>
         
            <Route path='/' exact component={Info} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />

        </div>
        </Router>
    )
}

export default Menu