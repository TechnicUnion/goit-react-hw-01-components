import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendLit from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './user';
import data from './data';
import friends from './friends';
import transactions from './transactions';

export const App = () => {
  return (
    <div>
      <p>Task 1</p>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <p>Task 2</p>
      <Statistics title="Upload stats" items={data} />
      <p>Task 3</p>
      <FriendLit items={friends} />
      <p>Task 4</p>
      <TransactionHistory items={transactions} />
    </div>
  );
};
