import type { User } from '@prisma/client'
import type { CatchError } from '@/server/types'

type UserResponse = Omit<User, 'password'>

export type UserApi = CatchError | { user: UserResponse }
