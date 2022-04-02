import React from 'react'
import ImageWrapper from '../UI/ImageWrapper';
import banner from '../assets/hover.jpg'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import {WrapperImage} from '../ListView/ListStyle'
const Frame: React.FC = () => {
    const { data, isFetching } = useGetDevOceanDataQuery()
    const globalData = data?.data?.globalData
    
    /* console.log(data); */
  return (
        <WrapperImage>
                {data?.map((imgList, id) =>
                    {
                        return (
                            <ImageWrapper key={id}>
                              <img src={banner} alt="" />
                            </ImageWrapper>
                        )
                    })}
        </WrapperImage>
     )
}

export default Frame