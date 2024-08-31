interface TextInputInterface {
  type?: 'text' | 'password' | 'email'
  label: string
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const TextInput = ({
  label,
  value,
  onChange,
  type = 'text',
}: TextInputInterface) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm' htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='bg-slate-200 p-2 rounded'
      />
    </div>
  )
}

export default TextInput
