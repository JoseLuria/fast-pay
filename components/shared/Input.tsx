import type { FC, HTMLInputTypeAttribute } from 'react'
import type { UseFormRegister, FieldError } from 'react-hook-form'
import clsx from 'clsx'

interface Props {
  register: UseFormRegister<any>
  label: string
  name: string
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
  const styles = clsx(
    'w-full py-4 px-5 bg-dark-gray border-2 duration-200 rounded placeholder:text-gray',
    error ? 'border-red focus-visible:border-red' : 'border-dark-gray focus-visible:border-gray',
    className
  )

  return (
    <span className='text-sm'>
      <label className='block mb-[10px]' htmlFor='email'>
        {label}
      </label>
      <input
        {...register(name)}
        className={styles}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </span>
  )
}
