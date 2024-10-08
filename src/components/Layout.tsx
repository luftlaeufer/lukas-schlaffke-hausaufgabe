import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div
      className='max-w-2xl mx-auto min-h-screen bg-slate-950 text-slate-50'
      id='Layout'
    >
      <Header />
      {/* <main className='flex flex-col gap-6 min-h-[calc(100vh-48px)] items-center justify-center'> */}
      <main className='min-h-[calc(100vh-64px)] min-h mx-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
