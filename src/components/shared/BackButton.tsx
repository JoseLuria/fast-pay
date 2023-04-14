import type { FC } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { ArrowDown } from '@/components/svg'
import { usePathStore } from '@/store'

interface Props {
  className?: string
}

export const BackButton: FC<Props> = ({ className }) => {
  const router = useRouter()
  const { previousPath: prevousPath } = usePathStore()

  const styles = clsx('flex gap-4 font-semibold text-sm', className)

  const back = () => (prevousPath ? router.back() : router.push('/'))

  return (
    <button className={styles} onClick={back} type='button'>
      <span className='rotate-90'>
        <ArrowDown width={22} height={22} />
      </span>
      Regresar
    </button>
  )
}
