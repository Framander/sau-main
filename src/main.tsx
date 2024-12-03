import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/main.css'

import { RouterProvider } from 'react-router-dom'
import router from './router/router'

import store from './store.ts'
import { Provider } from 'react-redux'

// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
)
