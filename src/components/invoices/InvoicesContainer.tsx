import type { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const InvoicesContainer: FC<Props> = ({ children }) => {
  return <ul className='flex w-full flex-col gap-4'>{children}</ul>
}
