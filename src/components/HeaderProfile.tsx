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
  }, [dispatch, navigate])

  return (
    <div className='relative'>
      {isAuthenitacted && (
        <div
          className='cursor-pointer hover:text-slate-400 flex gap-2'
          onClick={() => setOpenUserMenu((prev) => !prev)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
            />
          </svg>

          <span className='whitespace-nowrap'>
            {`Hallo ${user?.toUpperCase() ?? ''}`}
          </span>
        </div>
      )}
      {openUserMenu && (
        <div className='absolute top-12 -right-4'>
          <ul className='min-w-28 bg-slate-200'>
            <li
              className='p-3 text-slate-950 text-center hover:bg-slate-400 cursor-pointer flex gap-2 justify-between'
              onClick={logout}
            >
              <span>Ausloggen</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
                />
              </svg>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default HeaderProfile
