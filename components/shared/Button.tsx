import type { FC, ButtonHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const styles = cva(
  'px-6 text-sm font-semibold h-12 rounded-3xl duration-200 disabled:bg-dark-gray disabled:text-white disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        outline:
          'border-2 border-dark-gray text-white hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black'
      },
      full: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'outline'
    }
  }
)

interface Props extends VariantProps<typeof styles>, ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<Props> = ({ className, children, variant, full, ...props }) => {
  return (
    <button {...props} className={styles({ className, variant, full })}>
      {children}
    </button>
  )
}
