import React from 'react'
import Card from '../UI/Card'
import styled from 'styled-components'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const Block = styled.h3`
  display: flex;
  text-decoration: none;
  text-transform: uppercase;




  & img{
    max-width: 34%;
  }

  & p{
    margin-top: -33px;
    font-family: 'Arial',sans-serif;
    color: #94939e;
    font-size: 17px;
    margin-left: 26px;
  }


  
  `


  return (
    <Card>
      <Block>
           <Link style={{textDecoration: 'none'}} to="/" ><img src={logo} alt="" /> <p>Logo</p></Link>
      </Block>
    </Card>
  )
}

export default Navbar