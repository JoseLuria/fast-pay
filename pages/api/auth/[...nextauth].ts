import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import { loginSchema } from '@/validations'
import { authUser } from '@/server'

declare module 'next-auth' {
  interface Session {
    accessToken?: any
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: any
  }
}

export default NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const validCredentials = loginSchema.safeParse(credentials)

        if (validCredentials.success) {
          return await authUser(validCredentials.data)
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
    newUser: '/register'
  },
  callbacks: {
    jwt: async ({ token, account, user }) => {
      if (account) {
        token.accessToken = account.access_token
        switch (account.type) {
          case 'credentials':
            token.user = user
            break
          default:
            break
        }
      }

      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken
      session.user = token.user

      return session
    }
  }
})
