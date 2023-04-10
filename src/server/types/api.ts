import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextRequest } from 'next/server'

export type RequestSession = NextRequest | NextApiRequest

export type AsyncFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<any>

export interface CatchError {
  message: string
  stack?: string
}

export type ApiError = { message: string }
