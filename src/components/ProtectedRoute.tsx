import { Navigate } from 'react-router-dom'
import { ROUTES } from './utils/router'

interface ProtectedRouteInterface {
  isAuthenitacted: boolean
  children: React.ReactNode
}

const ProtectedRoute = ({
  isAuthenitacted,
  children,
}: ProtectedRouteInterface) => {
  if (!isAuthenitacted) {
    return <Navigate to={ROUTES.LOGIN} replace />
  }

  return children
}

export default ProtectedRoute
