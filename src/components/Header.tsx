import reactLogo from '../assets/react.svg'
import { ROUTES } from './utils/router'

const Header = () => {
  return (
    <header className='min-h-12 bg-slate-700 p-4'>
      <a href={ROUTES.HOME}>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </header>
  )
}

export default Header
