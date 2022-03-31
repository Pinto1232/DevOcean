import classes from './TableCard';

interface Props {
  cardtable: String;
}


const TableCard = (props: any) => {
  return (
      <div className={classes.cardtable}>
          {props.children}
      </div>
  )
}

export default TableCard