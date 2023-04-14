import type { FC, HTMLInputTypeAttribute } from 'react'
import type { UseFormRegister, FieldError } from 'react-hook-form'
import clsx from 'clsx'

interface Props {
  label: string
  name: string
  register?: UseFormRegister<any>
  type?: HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  error?: FieldError
}

export const Input: FC<Props> = ({
  name,
  register,
  className,
  placeholder,
  type = 'text',
  error,
  label
}) => {
  const labelStyles = clsx('flex justify-between mb-[10px]', error && 'text-red duration-200')

  const inputStyles = clsx(
    'w-full py-3 px-4 bg-dark-gray border-2 duration-200 rounded placeholder:text-gray',
    error ? 'border-red focus-visible:border-red' : 'border-dark-gray focus-visible:border-gray',
    className
  )

  const props = { className: inputStyles, name, type, placeholder, ...(register && register(name)) }

  return (
    <span className='text-sm w-full'>
      <label className={labelStyles} htmlFor='email'>
        {label}
        {error && <span>{error.message}</span>}
      </label>
      <input {...props} />
    </span>
  )
}
