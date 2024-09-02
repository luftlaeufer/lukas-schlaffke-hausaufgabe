import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { setUser } from './store/userReducer'
import useAuth from './hooks/useAuth'

const HeaderProfile = () => {
  const isAuthenitacted = useAuth()
  const user = useAppSelector((state) => state.app.user.accounts[0] ?? null)
  const dispatch = useAppDispatch()
  const [openUserMenu, setOpenUserMenu] = useState(false)

  const logout = () => {
    dispatch(setUser({ accounts: [], permissionsInAccounts: [] }))
    setOpenUserMenu(false)
    sessionStorage.clear()
  }

  return (
    <div>
      {isAuthenitacted && (
        <span
          className='uppercase cursor-pointer hover:text-slate-400'
          onClick={() => setOpenUserMenu((prev) => !prev)}
        >
          {`Hello ${user.name}`}
        </span>
      )}
      {openUserMenu && (
        <div className='absolute top-16 right-0'>
          <ul className='w-40 bg-slate-200'>
            <li
              className='p-2 text-slate-950 text-center hover:bg-slate-400 cursor-pointer'
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default HeaderProfile
