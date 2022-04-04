import { useState } from 'react'

// @ts-ignore
import{Navbar, Item, Global} from './components/exports/Exports'
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import GlobalStyle  from './components/globals/Global'
import List from './components/ListView/List';


const App: React.FC = () => {
 

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={< Item />} />
        <Route  path="/list/:id" element={<List />} />
      </Routes>
      </>
  
  )
}

export default App
