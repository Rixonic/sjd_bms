import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/system";
import { DataProvider } from './context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <NextUIProvider>
  <DataProvider>
  <App />
  </DataProvider>
        
    </NextUIProvider>
    
  </React.StrictMode>,
)
