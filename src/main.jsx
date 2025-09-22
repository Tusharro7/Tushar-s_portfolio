import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider as Theamprovider } from './components/theme/ThemeContext'
import { MouseProvider } from './components/mouseMoveTracker/MouseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theamprovider>
      <MouseProvider>
        <App />
      </MouseProvider>
    </Theamprovider>
  </StrictMode>,
)
