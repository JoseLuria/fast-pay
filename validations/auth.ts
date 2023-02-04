import { z } from 'zod'
import { errMsg } from '@/utils'

export const loginSchema = z.object({
  email: z.string().min(1, errMsg.empty).email(errMsg.email),
  password: z.string().min(6, errMsg.password)
})

export type Login = z.infer<typeof loginSchema>
