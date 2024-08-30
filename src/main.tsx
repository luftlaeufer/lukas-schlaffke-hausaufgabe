import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Login from './components/Login.tsx'
import Layout from './components/Layout.tsx'
import { ROUTES } from './routes.ts'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
])

createRoot(document.getElementById('root')!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <StrictMode>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StrictMode>
  </RelayEnvironmentProvider>
)
