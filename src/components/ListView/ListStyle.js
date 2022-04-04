import styled from 'styled-components'


export const WrapperImage = styled.div`
   display: flex;
        align-items: center;
        justify-content:center;
        margin-top: 350px;
         overflow: hidden;
        height: 36vh;
        margin-top: 40px;
        margin-bottom: 30px;
     
   

        & img{
           max-width: 100%;
           max-height: 100%;
              height: 595px;
              width: 1350px;
              object-fit: cover;
              object-position: center;
              background-repeat: no-repeat;
              background-size: cover;
        }

        @media(max-width: 768px){
         & img{
            max-width: 100%;
            max-height: 100%;
            margin-left: 2rem;
            margin-right: 2rem;
          }
        }
             
`

export const GridWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 7rem;
      align-items: baseline;
  
      @media(max-width: 768px){
        margin: 4rem;
        flex-wrap: wrap;
        text-align: start;
      }
`
export const GridContent = styled.div`
  padding: auto;
  margin: auto;
  padding: 1em;
  margin: 1rem;
`
export const Typography = styled.h2`
`

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  color: #adadad;
  line-height:1.5;
`

