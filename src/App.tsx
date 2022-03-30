import { useState } from 'react'

import './App.css'
import Item from './components/ItemView/Item'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
       <Navbar />
       <Item />
    </div>
  )
}

export default App
