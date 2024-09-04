import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { LoginAuthMutation } from './__generated__/LoginAuthMutation.graphql'
import { useNavigate } from 'react-router-dom'
import { errorMessages, localState } from './utils/helper'
import TextInput from './TextInput'
import { useAppDispatch } from './store'
import { setUser } from './store/userReducer'
import { ROUTES } from './utils/router'
import { type SubmitHandler, useForm } from 'react-hook-form'

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

export type LoginInput = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit, formState, setError } = useForm<LoginInput>()
  const { isValid, errors: formErrors } = formState
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [commitMutation, isMutationInFlight] =
    useMutation<LoginAuthMutation>(LoginAuthMutation)

  const onSubmit: SubmitHandler<LoginInput> = ({ email, password }) => {
    commitMutation({
      variables: {
        email,
        password,
      },
      onCompleted: ({ Auth: data }, errors) => {
        if (errors) {
          const hasInvalidAuth = errors.find(
            (error) =>
              error.message === errorMessages.INVALID_CREDENTIALS.serverError
          )

          if (hasInvalidAuth) {
            setError('email', {
              message: errorMessages.INVALID_CREDENTIALS.niceName,
            })
          }
          return
        }

        const tokens = data.loginJwt?.loginResult.jwtTokens
        localStorage.setItem(localState.ACCESS_TOKEN, tokens?.accessToken || '')

        // @ts-ignore
        dispatch(setUser(data.login))
        localStorage.setItem(
          localState.USER,
          data.login?.accounts[0].name || ''
        )

        navigate(ROUTES.DASHBOARD)
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <div className='p-4 m-10 bg-slate-400 text-slate-950 max-w-md mx-auto rounded'>
      <h1 className='text-4xl font-bold mb-4'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <TextInput
            label='E-Mail'
            name='email'
            type='email'
            register={register}
            required
            error={formErrors.email}
          />
          <TextInput
            label='Passwort'
            name='password'
            type='password'
            register={register}
            required
            error={formErrors.password}
          />
        </div>
        <button
          disabled={isMutationInFlight}
          type='submit'
          // className={`p-2 rounded text-white mt-4 bg-blue-500 `}
          className={`p-2 rounded text-white mt-4 ${
            isValid
              ? 'bg-blue-500 text-black'
              : 'bg-slate-700 cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
