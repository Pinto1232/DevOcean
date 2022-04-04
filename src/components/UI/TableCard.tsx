import Wrapper from './TableCard';
import classes from '../UI/TableCard.js';


interface Cardprops<Type> {
  cardtable: string;
}

declare const cardtable: Cardprops<string>;


const TableCard = (props) => {
  

  return (
    <Wrapper className={classes.cardtable}>
          {props.children}
      </Wrapper>
  )
}

export default TableCard