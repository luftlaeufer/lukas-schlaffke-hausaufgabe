import { Link } from 'react-router-dom'
import { ROUTES } from './utils/router'

const Welcome = () => (
  <div>
    <h1 className='text-center p-8 text-3xl'>Welcome</h1>
    <Link to={ROUTES.LOGIN} className='block w-fit mx-auto'>
      <button className='bg-slate-200 text-slate-950 px-8 py-2 rounded hover:bg-slate-300'>
        Login
      </button>
    </Link>
  </div>
)

export default Welcome
