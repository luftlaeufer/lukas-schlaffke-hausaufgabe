import Login from './Login'
import { token } from './utils/helper'

const SessionExpired = () => {
  localStorage.removeItem(token.ACCESS_TOKEN)

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
