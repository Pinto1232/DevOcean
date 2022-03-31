import React from 'react';
// @ts-ignore
import Button from './Button'
import Wrapper from '../UI/TableCard'
import styled from 'styled-components'


const Item = () => {
    return (
        <Wrapper>
            <Table>
                <THead>
                    <TRow>
                      <TData>NAME</TData>
                        <TData>DESCRIPTION</TData>
                    </TRow>
                </THead>
                   <Body>
                <TRow>
                    <TData>Name of the product</TData>
                    <TData>Description of the product</TData>
                </TRow>
                 <TRow>
                    <TData>Name of the product</TData>
                    <TData>Description of the product</TData>
                </TRow>
            </Body>
            </Table>
         
        </Wrapper>
    );
};

export default Item;

const Table = styled.table`
  background-color: white;
  width: 100%;
  text-align: start;
  padding: 1rem;

   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
   border-radius: 6px;
`

const THead = styled.thead`
`

const TRow = styled.tr`
    margin-bottom: 10rem;
  border-bottom: 2px solid #000;
`

const TData = styled.th`
  text-align: start;
`

const Body = styled.tbody`
`
