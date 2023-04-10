import type { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const TicketsContainer: FC<Props> = ({ children }) => {
  return <ul className='flex w-full flex-col gap-4'>{children}</ul>
}
