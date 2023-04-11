import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthLayout, AuthForm, Input, Button } from '@/components'
import { loginSchema, type Login as LoginSchema } from '@/validations'

const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async ({ email, password }: LoginSchema) => {
    setIsLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    if (!res || res.error) {
      setIsLoading(false)
      toast.error('Credenciales incorrectas')
      return
    }
    router.reload()
  }

  return (
    <AuthLayout title='Login'>
      <AuthForm disableGoogle={isLoading} onSubmit={handleSubmit(handleLogin)}>
        <Input
          label='Correo electrónico'
          name='email'
          register={register}
          error={errors.email}
          placeholder='correo@mail.com'
        />
        <Input
          label='Contraseña'
          name='password'
          register={register}
          error={errors.password}
          placeholder='***************'
          type='password'
        />

        <Button disabled={isLoading} type='submit' variant='outline' full>
          Iniciar sesión
        </Button>

        <Link
          href='/register'
          className='text-sm font-semibold hover:underline focus-visible:underline'
        >
          ¿Aún no tienes cuenta? Crea una cuenta
        </Link>
      </AuthForm>
    </AuthLayout>
  )
}

export default Login
