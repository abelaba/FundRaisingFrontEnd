import ProfileHeader from './ProfileHeader';
import AddFund from './AddFund';
import {BrowserRouter as Router,Route} from 'react-router-dom';

const ProfileView = (props) => {
    return (
        <Router>
            <>
                <ProfileHeader />
                <AddFund />
            </>
        </Router>
    )
}

export default ProfileView
