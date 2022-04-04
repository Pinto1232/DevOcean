import React from 'react'
import styled from 'styled-components'
import classes from '../ListView/CardStyle'

const ListCardModel = (props: any) => {
  return (
      <Wrapper className={classes.MainCard}>
          {props.children}
      </Wrapper>
  )
}

export default ListCardModel
const Wrapper = styled.div``