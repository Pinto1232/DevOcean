import React from 'react';
import Frame from '../Banner/Frame';
import ListCard from '../ListCard/ListCard';
import styled from 'styled-components'

const List: React.FC  = () => {

    return (
        <Layout>
            <Frame />
           <ListCard /> 
        </Layout>
    );
};

export default List;
const Layout = styled.div`
       display: flex;
       flex-direction: column;
       align-items: center;
`
