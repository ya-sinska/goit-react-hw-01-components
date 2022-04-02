import PropTypes from 'prop-types';
import { Container, Title, List, Item, Label, Percentage  } from './Statistic.styled';
import { getRandom } from 'utils/colorMaker';
export const Statistic = ({ title, stats }) => { 
    return (
        <Container>
            {title && <Title >{title}</Title >}
            <List>
               {stats.map(({ id, label, percentage }) => (
                   <Item backgroundColor={ getRandom()} key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </Item>
             ))} 
            </List>
        </Container>
    )
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    
  })),
};