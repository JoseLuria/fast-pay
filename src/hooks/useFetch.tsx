import type { FetchStatus } from '@/types'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>()
  const [status, setStatus] = useState<FetchStatus>('loading')

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get<T>(url)
      setData(data)
      setStatus('loaded')
    } catch (error) {
      setStatus('error')
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, status }
}
