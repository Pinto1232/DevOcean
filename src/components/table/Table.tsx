import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import LightTheme from '../table/theme.js'
import { useGetDevOceanDataQuery } from '../../services/devOceanApi';



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

    &:hover{
     background:#f8f8fa;
  }
   @media(max-width: 768px){
    font-size: 13px;
    text-align: start;
  }
`

const TDATA = styled.td`
  border-spacing:1rem 0.1rem;
  table-layout:fixed;/*auto viene por defecto*/
  empty-cells: hide;
  padding: 10px;
  border-top: 4px solid #f8f8fa;
`

const LinkData = styled.p`
    color: black;
`



const Table: React.FC = (props) => {
  const { data, isFetching } = useGetDevOceanDataQuery()
  const globalData = data?.data?.globalData; 
 
  /* console.log(data); */

  if(isFetching) return <p style={{textAlign: 'center'}}>Loading data...</p>
  
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
          {data?.map((dataDescription, id) =>
          {
            return (
                 <TROW key={id}>
            <TDATA>{dataDescription.name}</TDATA>
            <TDATA>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/list">
  
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