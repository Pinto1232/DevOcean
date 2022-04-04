import classes from './Card';
import Wrapper from '../UI/TableCard'
interface PropsCard {
  card: String;
}


const Card = (card: PropsCard, props) => {
  return <Wrapper className={classes.card}>
    {props.children}
  </Wrapper>;
};

export default Card;