import { UseFormRegister, Path, FieldError } from 'react-hook-form'
import type { LoginFormInput } from './Login'

interface TextInputInterface {
  type?: 'text' | 'password' | 'email'
  name: Path<LoginFormInput>
  register: UseFormRegister<LoginFormInput>
  required?: boolean
  label: string
  error: FieldError | undefined
}

const TextInput = ({
  name,
  label,
  register,
  type = 'text',
  required = false,
  error,
}: TextInputInterface) => {
  return (
    <div className='flex flex-col gap-1 mb-4'>
      <label className='font-semibold' htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name, { required })}
        id={name}
        type={type}
        className='bg-slate-200 p-2 rounded'
      />
      {error && (
        <p className='font-light text-base text-red-800'>{error.message}</p>
      )}
    </div>
  )
}

export default TextInput
