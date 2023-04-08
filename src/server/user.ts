import bycript from 'bcryptjs'
import { db } from '@/server'
import { Login } from '@/validations'

export const authUser = async ({ email, password }: Login) => {
  const user = await db.user.findFirst({ where: { email } })

  if (!user) return null

  const isValidPassword = bycript.compareSync(password, user.password)

  if (!isValidPassword) return null

  const { id, name, image, type } = user

  return { id, email, name, image, type }
}
