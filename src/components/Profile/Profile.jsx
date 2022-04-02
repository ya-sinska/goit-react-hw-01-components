import PropTypes from 'prop-types';
import { ProfileCard, ProfileImage, UserName, UserTag, UserLocation, Description, Stats, StatItem, Label, Quantity } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => { 
    return (
        <ProfileCard>
            <Description>
                <ProfileImage src={avatar}
                    alt={username}
                    
                />
                <UserName>{ username}</UserName>
                <UserTag>@{tag }</UserTag>
                <UserLocation>{ location}</UserLocation>
            </Description>

        <Stats>
            <StatItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers }</Quantity>
            </StatItem>
            <StatItem>
                <Label>Views</Label>
                <Quantity>{stats.views }</Quantity>
            </StatItem>
            <StatItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatItem>
        </Stats>
    </ProfileCard>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
