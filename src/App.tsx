import { useState } from 'react'
import './App.css'
// @ts-ignore
import{Navbar,Footer, Item} from './components/exports/Exports'
import { Layout, Typography, Space } from 'antd'
import { Route, Routes, Navigate, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <div className="navbar">
             <Navbar />
       </div>
      <div className="itemView">
           <Item />
      </div>
      <div className="footer">
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
