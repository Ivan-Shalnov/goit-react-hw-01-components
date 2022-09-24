import PropTypes from 'prop-types';
import Box from 'components/Box';
import { Title, StatList } from './Statistics.styled';
const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);
const Statistics = ({ title, stats }) => {
  return (
    <Box
      borderRadius={15}
      overflow="hidden"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      fontSize={14}
      color="grey"
      as="section"
    >
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Box
            key={id}
            as="li"
            display="flex"
            flexDirection="column"
            p={10}
            bg={randomColor()}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </Box>
        ))}
      </StatList>
    </Box>
  );
};
export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
