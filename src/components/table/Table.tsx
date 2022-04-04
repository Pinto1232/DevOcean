import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import LightTheme from '../table/theme.js'
import { useGetDevOceanDataQuery } from '../../services/devOceanApi';



const Table: React.FC = (props) => {
  const {data: tableData, id, isFetching } = useGetDevOceanDataQuery()
  const globalData = tableData?.tableData?.globalData; 

  const navigate = useNavigate();
 
  /* console.log(tableData);  */

  if (isFetching) return <p>Loading data...</p>


  const myData = { 
    
  }
  

  
  return (
    <>
      <TABLE className={LightTheme.bg}>
        <THEAD>
          <TROW>
            <TH>Name</TH>
            <TH>Description</TH>
          </TROW>
        </THEAD>
        <TBODY>
          {tableData?.map((dataDescription, id) =>
          {
            return (
                 <TROW key={id}>
            <TDATA style={{ color: '#adadad'}}>{dataDescription.name}</TDATA>
            <TDATA>
                  <Link 
                    style={{ textDecoration: "none" }}
                    state={{ 
                      Email: dataDescription.email,
                      CompDesc: dataDescription.description,
                      compPhone: dataDescription.phone,
                      Picture: dataDescription.image,
                      StreetNum: dataDescription.address.number,
                      StreeName: dataDescription.address.street,
                      City: dataDescription.address.city,
                      ZipCode: dataDescription.address.zip,
                    }}
                    to={`/list/${dataDescription.id}`}>

                    <LinkData>{dataDescription.description}</LinkData>
                  </Link>
                </TDATA>
          </TROW>
            )
          })}
        </TBODY>
      </TABLE>
      </>
  )
}

export default Table
const TABLE = styled.table`
  table-layout: fixed;
  width: 100%;
  empty-cells: hide;
  background-color: #fff;
  cursor: pointer;
`
const THEAD = styled.thead`
  text-align:start;
  font-size: 18px;
  text-transform: uppercase;
  color: #de007e;
  font-weight: 900;
  height:3em;

  @media(max-width: 768px){
    font-size: 13px;
    text-align: center;
  }
`
const TROW = styled.tr`
   padding: 10px;
`
const TH = styled.th`
  text-align:left;
  padding: 10px;
`
const TBODY = styled.tbody`
   height:3em;
   font-size: 15px;
   


  
   @media(max-width: 768px){
    font-size: 14px;
    text-align: start;
  }
`
const TDATA = styled.td`
  border-spacing:1rem 0.1rem;
  table-layout:fixed;
  empty-cells: hide;
  padding: 10px;
  border-top: 4px solid #f8f8fa;

    &:hover{
     background:#f8f8fa;
  }
`
const LinkData = styled.p`
    color: #adadad;
`