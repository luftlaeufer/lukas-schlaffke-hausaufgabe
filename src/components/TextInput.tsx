interface TextInputInterface {
  type?: 'text' | 'password' | 'email'
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextInput = ({
  label,
  value,
  setValue,
  type = 'text',
}: TextInputInterface) => {
  return (
    <div className='flex flex-col gap-1 mb-2'>
      <label className='text-sm' htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='bg-slate-200 p-2 rounded'
      />
    </div>
  )
}

export default TextInput
