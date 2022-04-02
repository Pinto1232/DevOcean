import React from 'react'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import ListCardModel from '../ListView/ListCardModel'
import {GridWrapper, GridContent, Typography, Paragraph} from '../ListView/ListStyle'



const ListCard = () => {
    const { data, isFetching } = useGetDevOceanDataQuery()
    const globalData = data?.data?.globalData
    
    console.log(data);
    return (
            <ListCardModel>  
                <GridWrapper>
                        <GridContent>
                            <Typography>Address</Typography>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur.
                            </Paragraph>
                        </GridContent>
                        <GridContent>
                            <Typography>Contact</Typography>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur.
                            </Paragraph>
                        </GridContent>
                        <GridContent>
                            <Typography>Nearby Places</Typography>
             
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur.
                            </Paragraph>
                        </GridContent>
                </GridWrapper> 
        </ListCardModel>
  )
}

export default ListCard