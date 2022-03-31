import React from 'react'
import Card from '../UI/Card'
import styled from 'styled-components'
import logo from '../assets/Logo.png'


const Navbar = () => {
  const Block = styled.h3`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;




  & img{
    max-width: 22%;
  }

  & p{
    margin-top: 9px;
    font-family: 'Arial', sans-serif;
    color: #94939e;
    font-size: 16px;
  }


  
  `


  return (
    <Card>
      <Block>
           <img src={logo} alt="" /> <p>Logo</p>
      </Block>
    </Card>
  )
}

export default Navbar