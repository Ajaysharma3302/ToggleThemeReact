import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleTheme from "../src/Component/Toggle.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleTheme />
  </StrictMode>,
)
