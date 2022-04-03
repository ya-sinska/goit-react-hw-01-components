import { Item, Avatar,Name,Status } from "./Friend.styled";
import PropTypes from "prop-types";
export const Friend = ({ avatar, name, isOnline }) => { 
    return (
        <Item>
            <Status
            chack={isOnline}
            />
        <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name }</Name>
        </Item>
    )
};

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired  
}