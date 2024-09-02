import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import HeaderProfile from './HeaderProfile'
import { ROUTES } from './utils/router'

const Header = () => {
  return (
    <header className='min-h-12 bg-slate-700 p-4 flex items-center justify-between max-w-7xl mx-auto relative'>
      <a href={ROUTES.HOME}>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
      <HeaderProfile />
    </header>
  )
}

export default Header
