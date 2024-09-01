import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Dashboard from './Dashboard'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import useAuth from './hooks/useAuth'

const Router = () => {
  const isAuthenitacted = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='login' element={<Login />} />

        <Route
          path='dashboard'
          element={
            <ProtectedRoute isAuthenitacted={isAuthenitacted}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
