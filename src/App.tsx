import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '@/components/Layout'
import Dashboard from '@/components/Dashboard'
import useAuth from '@/hooks/useAuth'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import ProtectedRoute from '@/components/ProtectedRoute'
import { ROUTES } from '@/utils/router'
import Welcome from '@/components/Welcome'
import SessionExpired from '@/components/SessionExpired'

const App = () => {
  const isAuthenitacted = useAuth()

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: ROUTES.HOME,
          element: isAuthenitacted ? <Dashboard /> : <Welcome />,
        },
        { path: ROUTES.LOGIN, element: <Login /> },
        {
          path: ROUTES.DASHBOARD,
          element: (
            <ProtectedRoute isAuthenitacted={isAuthenitacted}>
              <Dashboard />
            </ProtectedRoute>
          ),
          ErrorBoundary: () => <SessionExpired />,
        },
        { path: ROUTES.NOT_FOUND, element: <NotFound /> },
      ],
      ErrorBoundary: () => <NotFound />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
