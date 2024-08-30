import { useEffect, useState } from 'react'

const Login = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidCredentials, setIsValidCredentials] = useState(false)

  useEffect(() => {
    if (!!mail && !!password) {
      setIsValidCredentials(true)
    } else {
      setIsValidCredentials(false)
    }
  }, [mail, password])

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit', { mail, password })
  }

  return (
    <>
      <div className='p-4 m-10 bg-slate-200 text-slate-950 max-w-96 mx-auto rounded'>
        <h1 className='text-3xl font-bold mb-4'>Login</h1>
        <form onSubmit={submitLogin} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <label className='text-sm' htmlFor='name'>
              E-Mail
            </label>
            <input
              id='name'
              type='text'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className='h-10 p-2'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='h-10 p-2'
            />
          </div>
          <button
            disabled={!isValidCredentials}
            type='submit'
            className={`p-2 rounded text-white mt-4 ${
              isValidCredentials
                ? 'bg-green-500 text-black'
                : 'bg-slate-700 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
