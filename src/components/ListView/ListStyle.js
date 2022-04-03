import styled from 'styled-components'


export const WrapperImage = styled.div`
   display: flex;
        align-items: center;
        justify-content:center;
        margin: 4rem;
   

        & img{
          max-width: 100%;
              max-height: 100%;
              height: auto;
              width: auto;
              background: red;
        }
`

export const GridWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 7rem;

      @media(max-width: 768px){
        margin: 4rem;
        flex-wrap: wrap;
        text-align: start;
      }
`
export const GridContent = styled.div`
  padding: auto;
  margin: auto;
  border: 1px solid #fff;
    padding: 1em;
    margin: 1rem;

  
 

`
export const Typography = styled.h2`
    
`

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px
`

