import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useEffect} from 'react'; 
import Fund from './Fund';
import FundEdit from './FundEdit'
import ProfileHeader from './ProfileHeader';

const Funds = ({funds}) => {

    return (
        <Router>
            <div className="funds">
                {funds.filter(x=>x.approved == true).map((fund)=>(<Fund key={fund.id} fund={fund}/>))}
            </div>
        </Router>
    )

}

export default Funds
