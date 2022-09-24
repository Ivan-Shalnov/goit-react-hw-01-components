import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <Avatar class="avatar" src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
