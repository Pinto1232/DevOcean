import React from 'react'

import banner from '../assets/hover.jpg'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import { WrapperImage } from '../ListView/ListStyle'


const Frame: React.FC = () => {
    const { data, isFetching } = useGetDevOceanDataQuery()
    const globalData = data?.data?.globalData
    
    /* console.log(data); */
  return (
        <WrapperImage>
             <img src={banner} alt="" />
        </WrapperImage>
     )
}

export default Frame