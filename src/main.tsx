import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import GlobalStyle from './components/globals/Global'
import store from '../src/app/store'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
