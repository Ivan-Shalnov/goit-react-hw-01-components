// RESET CSS
import 'reset-css/reset.css';
// PROFILE
import Profile from './Profile/Profile';
import user from '../json/user.json';
// STATISTICS
import Statistics from './Statistics/Statistics';
import data from '../json/data.json';
// FRIENDSLIST
import FriendList from './FriendList/FriendList';
import friends from '../json/friends.json';
// TRANSACTIONS HISTORY
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 50,
        gap: 50,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
