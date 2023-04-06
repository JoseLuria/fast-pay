import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { db } from '@/server'
import { registerSchema } from '@/validations'
import {
  invalidMethod,
  catchError,
  AppError,
  getSession,
  formatZodError,
  excludeFields
} from '@/server/utils'
import type { UserApi } from '@/server/types'

export default catchError(async (req: NextApiRequest, res: NextApiResponse<UserApi>) => {
  switch (req.method) {
    case 'GET':
      return await getUser(req, res)
    case 'POST':
      return await createUser(req, res)
    default:
      return invalidMethod()
  }
})

const getUser = async (req: NextApiRequest, res: NextApiResponse<UserApi>) => {
  const session = await getSession(req)

  if (!session) {
    throw new AppError(401, 'No estás autenticado')
  }

  const id = session.user.id

  const dbUser = await db.user.findFirst({ where: { id } })

  if (!dbUser) {
    throw new AppError(401, 'No se encontró el usuario')
  }

  const user = excludeFields(dbUser, ['password'])

  res.status(200).json({ user })
}

const createUser = async (req: NextApiRequest, res: NextApiResponse<UserApi>) => {
  const userData = registerSchema.safeParse(req.body)

  if (!userData.success) {
    const error = formatZodError(userData.error.issues)
    throw new AppError(400, error)
  }

  const { data } = userData

  const userExist = await db.user.findFirst({ where: { email: data.email } })

  if (userExist) {
    throw new AppError(400, 'Ese correo ya está en uso')
  }

  data.password = bcrypt.hashSync(data.password)

  const { id } = await db.user.create({ data })

  res.status(200).json({ message: `Usuario ${id} creado` })
}
