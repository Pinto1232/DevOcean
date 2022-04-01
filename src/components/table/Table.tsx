import React from 'react'
import styled from 'styled-components';


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
`

const TDATA = styled.td`
  border-spacing:1rem 0.1rem;
  table-layout:fixed;/*auto viene por defecto*/
  empty-cells: hide;
  padding: 10px;
  border-top: 4px solid #f8f8fa;
`


const Table: React.FC = () => {
  return (
      <>
      <TABLE>
        <THEAD>
          <TROW>
            <TH>Name</TH>
            <TH>Description</TH>
          </TROW>
        </THEAD>
        <TBODY>
          <TROW>
              <TDATA>Pinto Manuel</TDATA>
              <TDATA>Software Developer</TDATA>
          </TROW>
        </TBODY>
      </TABLE>
      </>
  )
}

export default Table