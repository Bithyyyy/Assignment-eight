import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import { ToastContainer, toast } from 'react-toastify';
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer />
    <RouterProvider router={router}/>
  </StrictMode>,
)
