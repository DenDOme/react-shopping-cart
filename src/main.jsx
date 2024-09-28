import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
