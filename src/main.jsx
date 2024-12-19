import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TelaRegistro from './pages/TelaRegistro/TelaRegistro'
import TelaLogin from './pages/TelaLogin/TelaLogin'
import TelaRecup from './pages/TelaRecup/TelaRecup'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <TelaLogin/>,
  },
  {
    path: '/registro',
    element: <TelaRegistro/>,
  },
  {
    path: '/recup',
    element: <TelaRecup/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
