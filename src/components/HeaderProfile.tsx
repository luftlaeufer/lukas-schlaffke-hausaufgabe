import { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { setUser } from './store/userReducer'
import useAuth from './hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from './utils/router'
import { localState } from './utils/helper'

const HeaderProfile = () => {
  const isAuthenitacted = useAuth()
  const user =
    useAppSelector((state) => state.app.user.accounts[0]?.name) ??
    localStorage.getItem(localState.USER)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [openUserMenu, setOpenUserMenu] = useState(false)

  const logout = useCallback(() => {
    dispatch(setUser({ accounts: [], permissionsInAccounts: [] }))
    setOpenUserMenu(false)
    localStorage.clear()
    navigate(`${ROUTES.LOGIN}`)
  }, [])

  return (
    <div>
      {isAuthenitacted && (
        <span
          className='cursor-pointer hover:text-slate-400'
          onClick={() => setOpenUserMenu((prev) => !prev)}
        >
          {`Hello ${user?.toUpperCase() ?? ''}`}
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
