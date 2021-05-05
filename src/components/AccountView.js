import ProfileHeader from './ProfileHeader';
import Withdraw from './Withdraw';
import Transactions from './Transactions';

const AccountView = () => {
    return (
      <>
      <ProfileHeader />
      <div className="trs">
      
      <Transactions />
      <Withdraw />
      </div>
      </>
    )
}

export default AccountView