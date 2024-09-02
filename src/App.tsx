import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useAuth from './components/hooks/useAuth'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
import Welcome from './components/Welcome'
import { ROUTES } from './components/utils/router'

function App() {
  const isAuthenitacted = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.DASHBOARD}
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

export default App
