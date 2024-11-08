import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './components/Router';
import AuthProvider from './components/Context/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl mx-auto'>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    </div>
   
    
  </StrictMode>,
)
