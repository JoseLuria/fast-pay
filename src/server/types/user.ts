import type { User } from '@prisma/client'

type UserResponse = Omit<User, 'password'>
export type UserApi = { message: string } | { user: UserResponse }
