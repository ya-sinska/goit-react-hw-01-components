import user from '../../data_base/user.json'
import data from '../../data_base/data.json'
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
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
    </>
  );
};
