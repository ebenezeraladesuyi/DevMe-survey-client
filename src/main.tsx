import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import IsLoading from './pages/isLoading/IsLoading'
import { element } from './routes/Router'
import { ToastContainer } from 'react-toastify'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />}>
      <RouterProvider router={element} />
      <ToastContainer />
    </Suspense>
  </StrictMode>,
)
