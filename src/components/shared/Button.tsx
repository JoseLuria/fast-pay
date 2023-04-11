import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  base: 'px-6 text-sm font-semibold h-12 flex text-center items-center rounded-3xl duration-200 disabled:bg-dark-gray disabled:text-white disabled:cursor-not-allowed',
  outline:
    'border-2 border-dark-gray text-white hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black'
}
interface StyleProps {
  full?: boolean
  variant?: 'outline'
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

export const Button: Overload = ({ className, variant = 'outline', full, ...props }) => {
  const btnStyles = clsx(styles.base, styles[variant], full ? 'w-full' : 'w-fit', className)

  const componentProps = { className: btnStyles, ...props }

  if (hasHref(componentProps)) {
    return <Link {...componentProps} href={componentProps.href} />
  }

  return <button {...componentProps} />
}
