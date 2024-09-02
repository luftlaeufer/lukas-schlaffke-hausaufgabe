import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={isAuthenitacted ? <Dashboard /> : <Welcome />}
          />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute isAuthenitacted={isAuthenitacted}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
