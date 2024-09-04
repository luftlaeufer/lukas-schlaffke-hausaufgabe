import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import useAuth from './components/hooks/useAuth'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import Welcome from './components/Welcome'
import { ROUTES } from './components/utils/router'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import SessionExpired from './components/SessionExpired'

function App() {
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
        { path: ROUTES.NOT_FOUND, element: <NotFound /> },
        {
          path: ROUTES.DASHBOARD,
          ErrorBoundary: () => <SessionExpired />,
          element: (
            <ProtectedRoute isAuthenitacted={isAuthenitacted}>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
      ],
      ErrorBoundary: () => <NotFound />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
