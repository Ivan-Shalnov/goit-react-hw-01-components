import PropTypes from 'prop-types';
import Box from 'components/Box';
import {
  Avatar,
  Name,
  Tag,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled.';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      borderRadius={15}
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      fontSize={14}
      color="grey"
    >
      <Box p={20} textAlign="center" mb={15}>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        p={0}
        m={0}
        bg="WhiteSmoke"
        borderTop="1px solid Gainsboro"
        as="ul"
        style={{ listStyle: 'none' }}
      >
        <StatsItem>
          <StatsLabel className="label">Followers</StatsLabel>
          <StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel className="label">Views</StatsLabel>
          <StatsQuantity className="quantity">{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel className="label">Likes</StatsLabel>
          <StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
        </StatsItem>
      </Box>
    </Box>
  );
};
export default Profile;
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
