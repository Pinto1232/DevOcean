import React from 'react'

import banner from '../assets/hover.jpg'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import { WrapperImage } from '../ListView/ListStyle'
import styled from 'styled-components'

const GRID = styled.div`
   
`


const Frame: React.FC = () => {
    const { data, isFetching } = useGetDevOceanDataQuery()
    const globalData = data?.data?.globalData
    
    /* console.log(data); */
  return (
       <WrapperImage>
            <GRID>
                  <img src={banner} alt="" />
            </GRID>
        </WrapperImage>
     )
}

export default Frame