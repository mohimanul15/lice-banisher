import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New from './New.jsx'
import New2 from './New2.jsx'
import New3 from './New3.jsx'
import New4 from './New4.jsx'
import Copilot from './copilot.jsx'
import Grok from './Grok.jsx'
import Deepseek from './Deepseek.jsx'
import Claude from './Claude.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Claude/>
  </StrictMode>,
)
