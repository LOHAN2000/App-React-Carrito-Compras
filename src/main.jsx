import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/card.css"
import "./styles/lista.css"
import { CarritoApp } from './CarritoApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <StrictMode>
      <CarritoApp/>
    </StrictMode>
  </BrowserRouter>
)
