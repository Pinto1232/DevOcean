import React, {useEffect} from 'react'

import banner from '../assets/hover.jpg'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import { WrapperImage } from '../ListView/ListStyle'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'




const Frame: React.FC = (props) => {
    const { data, isFetching, error } = useGetDevOceanDataQuery()
     const globalData = data?.data?.globalData
     const locateImage = useLocation()
     const dataImg = locateImage?.state
     
    
     if (isFetching) return <p>Loading data...</p>
     
     if (error) return <p>{ error.message}</p>

     /* console.log('Data image',dataImg) */
  
    
  return (
       <WrapperImage>
                    <GRID >
                        <img src={`${dataImg?.Picture}`} alt="" />
                    </GRID>
        </WrapperImage>
     )
}

export default Frame
const GRID = styled.div``