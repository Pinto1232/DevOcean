import React from 'react'
import styled from 'styled-components'
import classes from '../ListView/CardStyle'

const ListCardModel = (props: any) => {
    
  const Wrapper = styled.div``
    
  return (
      <Wrapper className={classes.MainCard}>
          {props.children}
      </Wrapper>
  )
}

export default ListCardModel