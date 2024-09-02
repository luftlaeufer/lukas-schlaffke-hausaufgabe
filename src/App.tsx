import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import useAuth from './components/hooks/useAuth'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import Welcome from './components/Welcome'
import { ROUTES } from './components/utils/router'
import NotFound from './components/NotFound'
import Layout from './components/Layout'

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
          element: (
            <ProtectedRoute isAuthenitacted={isAuthenitacted}>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
