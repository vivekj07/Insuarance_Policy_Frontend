import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import {Provider} from "react-redux"
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>

  </StrictMode>,
)
