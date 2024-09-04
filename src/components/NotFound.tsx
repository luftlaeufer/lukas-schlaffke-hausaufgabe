import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../store"
import { setUser } from "../store/userReducer"
import { ROUTES } from "../utils/router"

const NotFound = () => {
  useEffect(() => localStorage.clear(), [])
  const dispatch = useAppDispatch()
  dispatch(setUser({ accounts: [], permissionsInAccounts: [] }))

  return (
    <div className='flex flex-col items-center justify-center mt-24'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='text-2xl mb-4'>Page not found</p>
      <Link to={ROUTES.LOGIN} className='block w-fit mx-auto'>
        <button className='bg-slate-200 text-slate-950 px-8 py-2 rounded hover:bg-slate-300'>
          Back to Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound
