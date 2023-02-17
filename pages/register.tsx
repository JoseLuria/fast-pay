import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { AuthLayout, AuthForm, Input, Button } from '@/components'
import { registerSchema, type Register as RegisterSchema } from '@/validations'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) })
  const router = useRouter()

  const handleRegister = async ({ email, name, password }: RegisterSchema) => {
    setIsLoading(true)
    try {
      await axios.post('/api/user', { email, name, password })
      router.push('/login')
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout title='Registro'>
      <AuthForm disableGoogle={isLoading} onSubmit={handleSubmit(handleRegister)}>
        <Input
          label='Nombre completo'
          name='name'
          register={register}
          error={errors.name}
          placeholder='Alex Grim'
        />
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

        <Button type='submit' disabled={isLoading} full>
          Crear cuenta
        </Button>

        <Link
          href='/login'
          className='text-sm font-semibold hover:underline focus-visible:underline'
        >
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </AuthForm>
    </AuthLayout>
  )
}

export default Register
