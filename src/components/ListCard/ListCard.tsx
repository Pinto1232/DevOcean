import React from 'react'
import {useGetDevOceanDataQuery} from '../../services/devOceanApi'
import {GridWrapper, GridContent, Typography, Paragraph} from '../ListView/ListStyle'
import TableCard from '../UI/TableCard'


const ListCard = () => {
    const { data, isFetching } = useGetDevOceanDataQuery()
    const globalData = data?.data?.globalData
    
    console.log(data);
  return (
            <TableCard> 
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
        </TableCard>   
  )
}

export default ListCard