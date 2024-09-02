import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-50'>
      <Header />
      {/* <main className='flex flex-col gap-6 min-h-[calc(100vh-48px)] items-center justify-center'> */}
      <main className='max-w-7xl min-h-[calc(100vh-48px)] min-h mx-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
