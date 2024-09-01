import { useEffect, useState } from 'react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { LoginAuthMutation } from './__generated__/LoginAuthMutation.graphql'
import { ROUTES } from '../Router.old'
import { useNavigate } from 'react-router-dom'
import { token } from './utils/helper'
import TextInput from './TextInput'
import { useAppDispatch } from './store'
import { setUser } from './store/userReducer'

const LoginAuthMutation = graphql`
  mutation LoginAuthMutation($email: String!, $password: String!) {
    Auth {
      loginJwt(input: { email: $email, password: $password }) {
        loginResult {
          jwtTokens {
            accessToken
            refreshToken
          }
        }
      }
      login(input: { email: $email, password: $password }) {
        accounts {
          id
          name
        }
        permissionsInAccounts {
          accountRef
          permissions
        }
      }
    }
  }
`

const Login = () => {
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidCredentials, setIsValidCredentials] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [commitMutation, isMutationInFlight] =
    useMutation<LoginAuthMutation>(LoginAuthMutation)

  useEffect(() => {
    if (!!email && !!password) {
      setIsValidCredentials(true)
    } else {
      setIsValidCredentials(false)
    }
  }, [email, password])

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    commitMutation({
      variables: {
        email,
        password,
      },
      onCompleted: (data) => {
        const tokens = data?.Auth?.loginJwt?.loginResult.jwtTokens
        sessionStorage.setItem(token.ACCESS_TOKEN, tokens?.accessToken || '')
        sessionStorage.setItem(token.REFRESH_TOKEN, tokens?.refreshToken || '')

        dispatch(
          setUser({
            accounts: data?.Auth?.login?.accounts || [],
            permissionsInAccounts:
              data?.Auth?.login?.permissionsInAccounts || [],
          })
        )
        navigate(ROUTES.DASHBOARD)
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <>
      <div className='p-4 m-10 bg-slate-400 text-slate-950 max-w-96 mx-auto rounded'>
        <h1 className='text-3xl font-bold mb-4'>Login</h1>
        <form onSubmit={submitLogin} className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <TextInput
              label='E-Mail'
              type='email'
              value={email}
              setValue={setMail}
            />
            <TextInput
              label='Password'
              type='password'
              value={password}
              setValue={setPassword}
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
