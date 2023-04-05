import type { RequestSession } from '@/server/types'
import { type JWT, getToken } from 'next-auth/jwt'

export const getSession = async (req: RequestSession): Promise<JWT | null> => {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  return session
}

export const excludeFields = <T, Key extends keyof T>(model: T, keys: Key[]): Omit<T, Key> => {
  for (const key of keys) {
    delete model[key]
  }
  return model
}
