import classes from './PlaceCardStyle';
import styled from 'styled-components'
interface Props {
  PlaceCard: String;
}


const PlaceCard: React.FC = (props: any) => {
  return <Wrapper className={classes.pcard}>
    {props.children}
  </Wrapper>;
};

export default PlaceCard;

const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content:center;
        
        padding: 1rem;
        background-color: white;
`