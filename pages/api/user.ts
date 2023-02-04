import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { db } from '@/server'
import { registerSchema } from '@/validations'
import { invalidMethod, catchError, AppError, formatZodError } from '@/utils'

type Data = { message: string }

export default catchError(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case 'POST':
      return await createUser(req, res)
    default:
      return invalidMethod()
  }
})

const createUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
