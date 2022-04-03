import React from 'react'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import ListCardModel from '../ListView/ListCardModel'
import {GridWrapper, GridContent, Typography, Paragraph} from '../ListView/ListStyle'
import Card from '../UI/Card'
import PlaceCard from '../UI/PlaceCard'



const ListCard = () => {
const { data, isFetching } = useGetDevOceanDataQuery()
const globalData = data?.data?.globalData

console.log(data);
return (

<GridWrapper>
    <GridContent>
        <Typography>Address</Typography>
        <Paragraph style={{color: '#adadad'}}>
            Lorem ipsum dolor sit amet consectetur.
        </Paragraph>
    </GridContent>
    <GridContent>
        <Typography>Contact</Typography>
        <Paragraph style={{color: '#adadad'}}>
            Lorem ipsum dolor sit amet consectetur.
        </Paragraph>
    </GridContent>
    <PlaceCard>
        <GridContent>
            <Typography>Nearby Places</Typography>
            <Paragraph style={{color: '#adadad'}}>
                Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet officiis consequuntur fugiat.
            </Paragraph>
        </GridContent>
    </PlaceCard>
</GridWrapper>
)
}

export default ListCard