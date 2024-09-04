import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import Welcome from './components/Welcome'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import SessionExpired from './components/SessionExpired'
import useAuth from './hooks/useAuth'
import { ROUTES } from './utils/router'

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
