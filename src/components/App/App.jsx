import user from '../../data_base/user.json'
import data from '../../data_base/data.json'
import friends from '../../data_base/friends.json'
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { FriendsList } from 'components/Friends/FriendsList';
export const App = () => {
  const {username, tag, location, avatar, stats} = user;
  return (
    <>
      <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      />
      <Statistic 
        title="Upload stats"
        stats={data}
      />
      <FriendsList
        friends={friends}
      />
    </>
  );
};
