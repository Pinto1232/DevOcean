import {classes, Wrapper} from './TableCard';


interface Props {
  cardtable: String;
}


const TableCard: React.FC = (props: any) => {
  return (
      <Wrapper className={classes.cardtable}>
          {props.children}
      </Wrapper>
  )
}

export default TableCard