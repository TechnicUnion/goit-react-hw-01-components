import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendLit from 'components/FriendList';
import user from './user';
import data from './data';
import friends from './friends';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" items={data} />
      <FriendLit items={friends} />
    </div>
  );
};
