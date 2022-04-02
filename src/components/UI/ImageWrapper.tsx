import classes from '../UI/ImageWrapperStyles';
import Wrapper from '../UI/TableCard'
interface Props {
  card: String;
}


const Card: React.FC = (props: any) => {
  return <Wrapper className={classes.ImageCard}>
    {props.children}
  </Wrapper>;
};

export default Card;