import { useEffect } from 'react'
import { useAppDispatch } from '@/store'
import { setUser } from '@/store/userReducer'
import Login from '@/components/Login'

const SessionExpired = () => {
  useEffect(() => localStorage.clear(), [])
  const dispatch = useAppDispatch()
  dispatch(setUser({ accounts: [], permissionsInAccounts: [] }))

  return (
    <div>
      <p className='text-center my-4 text-red-400'>
        Du warst schon lange nicht mehr da. Bitte führe den Login erneut durch.
      </p>
      <Login />
    </div>
  )
}

export default SessionExpired
