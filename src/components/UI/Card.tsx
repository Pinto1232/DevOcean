import classes from './Card';
import Wrapper from '../UI/TableCard'
interface Props {
  card: String;
}


const Card: React.FC = (props: any) => {
  return <Wrapper className={classes.card}>
    {props.children}
  </Wrapper>;
};

export default Card;