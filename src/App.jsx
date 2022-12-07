import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './user';
import data from './data';

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
    </div>
  );
};
