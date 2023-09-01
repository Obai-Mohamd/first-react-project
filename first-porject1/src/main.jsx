import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './assets/componant/nav.jsx'
import Main from './assets/componant/mian.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/> 
    <Main />
  </React.StrictMode>,
)
