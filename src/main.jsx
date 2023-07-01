import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './contexts/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavProvider } from './contexts/FavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ThemeProvider>
    <BrowserRouter>
    <FavProvider>
        <App />
      </FavProvider>
    </BrowserRouter>
  </ThemeProvider>
  
)
