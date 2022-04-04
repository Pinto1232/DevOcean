import React, { useState } from 'react'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import ListCardModel from '../ListView/ListCardModel'
import {GridWrapper, GridContent, Typography, Paragraph} from '../ListView/ListStyle'
import PlaceCard from '../UI/PlaceCard'
import { useLocation} from 'react-router-dom'


const ListCard = (props) => {
    const { data: ListData, isFetching } = useGetDevOceanDataQuery()
    const locationData = useLocation()
    

    const locateAddressInfo = locationData?.state
 
    
    console.log(ListData); 

    console.log(locateAddressInfo);

    
    return (
        <GridWrapper>
            <GridContent>
                <Typography>Address</Typography>
                        <Paragraph  style={{color: '#adadad'}}>
                            {`${locateAddressInfo.StreetNum}, ${locateAddressInfo.StreeName} Street`}
                            <br />
                            {`${locateAddressInfo.City}, ${locateAddressInfo.ZipCode}`}
                        </Paragraph>
            </GridContent>
            <GridContent>
                <Typography>Contact</Typography>
                        <Paragraph style={{color: '#adadad'}}>
                           {`${locateAddressInfo.compPhone}`}
                           <br />
                           {`${locateAddressInfo.Email}`}
                        </Paragraph>
            </GridContent>
            <PlaceCard>
                <GridContent>
                    <Typography>Nearby Places</Typography>
                    <Paragraph style={{color: '#adadad'}}>
                       {`${locateAddressInfo.CompDesc}`}
                    </Paragraph>
                </GridContent>
            </PlaceCard>
        </GridWrapper>
    )
}

export default ListCard