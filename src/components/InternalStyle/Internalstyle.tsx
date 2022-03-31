import React from 'react';
import styled from 'styled-components'


const FormControl = styled.div`
    margin: 0.5em 0;

    & label {
        font-weight: bold;
        display:block;
        margin-bottom:0.5rem;
    }

    & input{
        display:block;
        width:100%;
        border: 1p solid #ccc;
        font: inherit;
        line-height:1.5rem;
        padding:0 0.25rem;
    }
`

const Internalstyle = () => {
    return (
        <FormControl>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="name"/>
        </FormControl>
    );
};

export default Internalstyle;