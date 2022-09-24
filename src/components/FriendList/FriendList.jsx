import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';
const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            ></FriendListItem>
          </li>
        );
      })}
    </List>
  );
};
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
