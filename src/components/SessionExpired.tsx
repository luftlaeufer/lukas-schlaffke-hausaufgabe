import { useEffect } from 'react'
import Login from './Login'

const SessionExpired = () => {
  useEffect(() => localStorage.clear(), [])
  return (
    <div>
      <p className='text-center my-4 text-red-400'>
        Du warst schon lange nicht mehr da. Bitte führe den Login erneut durch
      </p>
      <Login />
    </div>
  )
}

export default SessionExpired
