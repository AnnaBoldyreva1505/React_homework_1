import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  ListStat,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, statistic }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <ListStat>
        {statistic.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}</Percentage>
          </Item>
        ))}
      </ListStat>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
