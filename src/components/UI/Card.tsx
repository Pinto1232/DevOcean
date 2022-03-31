import classes from './Card';
interface Props {
  card: String;
}


const Card = (props: any) => {
  return <div className={classes.card}>
    {props.children}
  </div>;
};

export default Card;