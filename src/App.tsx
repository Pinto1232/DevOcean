import { useState } from 'react'

// @ts-ignore
import{Navbar,Footer, Item, Global} from './components/exports/Exports'
import { Layout, Typography, Space } from 'antd'
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import GlobalStyle  from './components/globals/Global'


const App: React.FC = () => {
 

  return (
    <>
          <GlobalStyle />
          <Navbar />
          < Item/>
      </>
  
  )
}

export default App
