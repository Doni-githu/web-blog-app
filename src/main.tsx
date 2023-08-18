import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { BlogProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <BlogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogProvider>
)
