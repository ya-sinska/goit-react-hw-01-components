import PropTypes from "prop-types";
import { Friend } from "components/FriendItem/Friend";
import { List } from "components/Friends/FriendsList.styled";
export const FriendsList = ({ friends }) => { 
    return (
        <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Friend
                    key={id }
                    avatar={avatar}
                    name = { name }
                    isOnline= {isOnline}
                />  
             ) )}
           
        </List>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired
  })),
}