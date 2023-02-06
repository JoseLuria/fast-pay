import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextRequest } from 'next/server'
import { type JWT, getToken } from 'next-auth/jwt'
import type { ZodIssue } from 'zod'
import { errMsg, capitalize } from '@/utils'

type RequestSession = NextRequest | NextApiRequest

type AsyncFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<any>

export class AppError extends Error {
  public code: number
  public message: string

  constructor(code: number, message: string) {
    super()
    this.code = code
    this.message = message
  }
}

export const invalidMethod = () => {
  throw new AppError(400, 'Método incorrecto')
}

export const catchError = (fn: AsyncFunction) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    return fn(req, res).catch((error) =>
      res.status(error.code ? error.code : 500).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    )
  }
}

export const formatZodError = (issues: ZodIssue[]) => {
  const messages = Object.values(errMsg)
  const error = issues.map(
    ({ path, message }) =>
      ` ${path[0] ? capitalize(`${path[0]}`) : 'Campo desconocido'}: ${
        messages.includes(message) ? message : 'valor incorrecto'
      }`
  )

  return error.toString().trim()
}

export const getSession = async (req: RequestSession): Promise<JWT | null> => {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  return session
}

export const excludeFields = <T, Key extends keyof T>(model: T, keys: Key[]): Omit<T, Key> => {
  for (let key of keys) {
    delete model[key]
  }
  return model
}
