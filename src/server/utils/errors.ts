import type { NextApiRequest, NextApiResponse } from 'next'
import type { AsyncFunction, CatchError } from '@/server/types'
import type { ZodIssue } from 'zod'
import { errMsg, capitalize } from '@/utils'

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
    return fn(req, res).catch(({ message, stack, code }) => {
      const resJSON: CatchError = { message }

      if (process.env.NODE_ENV === 'development') {
        resJSON.stack = stack
      }

      return res.status(code ?? 500).json(resJSON)
    })
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
