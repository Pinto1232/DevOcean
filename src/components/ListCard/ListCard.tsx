import React from 'react'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
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
                        <Paragraph >
                            {`${locateAddressInfo.StreetNum}, ${locateAddressInfo.StreeName} Street`}
                            <br />
                            {`${locateAddressInfo.City}, ${locateAddressInfo.ZipCode}`}
                        </Paragraph>
            </GridContent>
            <GridContent>
                <Typography>Contact</Typography>
                        <Paragraph >
                           {`${locateAddressInfo.compPhone}`}
                           <br />
                           {`${locateAddressInfo.Email}`}
                        </Paragraph>
            </GridContent>
            <PlaceCard>
                <GridContent>
                    <Typography>Nearby Places</Typography>
                    <Paragraph style={{background: '#f8f8fa', padding: '10px', marginTop: '10px'}}>
                        {`Caffe Nero   1st Floor, c/o Monleys, 472-488  ${locateAddressInfo.StreeName} Rd, ${locateAddressInfo.City} SW9 ${locateAddressInfo.ZipCode}`}
                    </Paragraph>
                    <Paragraph  style={{background: '#f8f8fa', padding: '10px', marginTop: '10px'}}>
                        {`EAT.   1st Floor, c/o Monleys, 472-488  ${locateAddressInfo.StreeName} Rd, ${locateAddressInfo.City} SW9 ${locateAddressInfo.ZipCode}`}
                    </Paragraph>
                    <Paragraph  style={{background: '#f8f8fa', padding: '10px', marginTop: '10px'}}>
                        {`Pret A Manger   1st Floor, c/o Monleys, 472-488  ${locateAddressInfo.StreeName} Rd, ${locateAddressInfo.City} SW9 ${locateAddressInfo.ZipCode}`}
                    </Paragraph>
                    <Paragraph  style={{background: '#f8f8fa', padding: '10px', marginTop: '10px'}}>
                        {`Caffe Republic 1st Floor, c/o Monleys, 472-488  ${locateAddressInfo.StreeName} Rd, ${locateAddressInfo.City} SW9 ${locateAddressInfo.ZipCode}`}
                    </Paragraph>
                </GridContent>
            </PlaceCard>
        </GridWrapper>
    )
}

export default ListCard