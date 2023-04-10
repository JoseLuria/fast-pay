import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  tag?: 'h1' | 'h2' | 'p'
  children?: ReactNode
  className?: string
}

const styles = {
  h1: 'text-2xl font-semibold md:text-3xl',
  h2: 'font-semibold text-xl',
  p: 'text-sm text-white text-opacity-50'
}

export const Text: FC<Props> = ({ tag: Tag = 'p', children, className }) => {
  return <Tag className={clsx(styles[Tag], className)}>{children}</Tag>
}
