import styled from 'styled-components'

const Button = styled.button`
  max-width: 100%;
  height: 100%;
  background-color: red;
  padding: 10px;
  border: none;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: blue;
  }
`


export default Button;