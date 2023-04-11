import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  base: 'px-6 text-sm font-semibold h-12 flex text-center items-center justify-center rounded-3xl duration-200 disabled:bg-dark-gray disabled:text-white disabled:cursor-not-allowed',
  outline:
    'border-2 border-dark-gray text-white hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black',
  error: 'text-white bg-red hover:bg-low-red focus-visible:bg-low-red',
  warn: 'text-white bg-orange hover:bg-low-orange focus-visible:bg-low-orange',
  success: 'text-white bg-green hover:bg-low-green focus-visible:bg-low-green',
  default:
    'text-black bg-white hover:bg-low-gray hover:text-white focus-visible:bg-low-gray focus-visible:text-white'
}
interface StyleProps {
  full?: boolean
  variant?: 'default' | 'outline' | 'warn' | 'error' | 'success'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props

interface Overload {
  (props: ButtonProps & StyleProps): JSX.Element
  (props: AnchorProps & StyleProps): JSX.Element
}

export const Button: Overload = ({ className, variant = 'default', full, ...props }) => {
  const btnStyles = clsx(styles.base, styles[variant], full && 'w-full', className)

  const componentProps = { className: btnStyles, ...props }

  if (hasHref(componentProps)) {
    return <Link {...componentProps} href={componentProps.href} />
  }

  return <button {...componentProps} />
}
