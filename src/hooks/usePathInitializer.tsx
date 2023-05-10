import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePathStore } from '@/store'

export const usePathInitializer = () => {
  const { asPath, events } = useRouter()
  const { setPreviousPath } = usePathStore()

  useEffect(() => {
    const historyChange = () => setPreviousPath(asPath)

    events.on('beforeHistoryChange', historyChange)

    return () => events.off('beforeHistoryChange', historyChange)
  }, [events, asPath, setPreviousPath])
}
