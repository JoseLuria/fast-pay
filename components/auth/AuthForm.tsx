import type { FC, FormEventHandler, ReactNode } from 'react'
import { GoogleColor } from '@/components/icons'
import { Button } from '@/components'

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>
  children?: ReactNode
  disableGoogle?: boolean
}

export const AuthForm: FC<Props> = ({ children, onSubmit, disableGoogle }) => {
  return (
    <form
      className='w-full flex items-center flex-col gap-6 max-w-auth md:gap-8'
      onSubmit={onSubmit}
    >
      <Button
        disabled={disableGoogle}
        type='button'
        className='flex justify-center items-center gap-2'
        full
      >
        <GoogleColor />
        Ingresar con Google
      </Button>

      <div className='relative w-full flex items-center'>
        <hr className='border-none w-full h-[2px] bg-dark-gray' />
        <p className='font-semibold bg-black absolute left-[50%] -translate-x-[50%] px-2'>O</p>
      </div>

      {children}
    </form>
  )
}
