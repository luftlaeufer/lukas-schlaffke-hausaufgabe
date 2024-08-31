import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import { useAuth } from './components/hooks/useAuth.ts'
import SessionExpired from './components/SessionExpired.tsx'

const App = lazy(() => import('./App.tsx'))
const Login = lazy(() => import('./components/Login.tsx'))
const Dashboard = lazy(() => import('./components/Dashboard.tsx'))

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '*',
}

const isAuthenitacted = useAuth()

export const Router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: isAuthenitacted ? Dashboard : App,
  },
  {
    path: ROUTES.LOGIN,
    Component: Login,
  },
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute isAuthenitacted={isAuthenitacted}>
        <Dashboard />
      </ProtectedRoute>
    ),
    ErrorBoundary: () => <SessionExpired />,
  },
])
