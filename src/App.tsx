import { Link } from 'react-router-dom'
import './App.css'
import { ROUTES } from './routes'

function App() {
  return (
    <>
      <h1 className='mb-4'>Start-Screen</h1>
      <Link to={ROUTES.LOGIN}>
        <button className='bg-slate-200 text-slate-950 px-8 py-2'>Login</button>
      </Link>
    </>
  )
}

export default App
