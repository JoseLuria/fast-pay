import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthLayout, Input, Button } from '@/components'
import { GoogleColor } from '@/components/icons'
import { loginSchema, type Login } from '@/validations'

const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<Login>({ resolver: zodResolver(loginSchema) })

  const handleLogin = async ({ email, password }: Login) => {
    console.log({ email, password })
  }

  return (
    <AuthLayout title='Login'>
      <form
        className='w-full flex items-center flex-col gap-6 max-w-auth md:gap-8'
        onSubmit={handleSubmit(handleLogin)}
      >
        <Button type='button' className='flex justify-center items-center gap-2' full>
          <GoogleColor />
          Iniciar sesión con Google
        </Button>

        <div className='relative w-full flex items-center'>
          <hr className='border-none w-full h-[2px] bg-dark-gray' />
          <p className='font-semibold bg-black absolute left-[50%] -translate-x-[50%] px-2'>O</p>
        </div>

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

        <Link
          href='/'
          className='text-xs ml-auto font-semibold hover:underline focus-visible:underline'
        >
          ¿Olvidaste tu contraseña?
        </Link>

        <Button type='submit' full>
          Iniciar sesión
        </Button>

        <Link href='/' className='text-xs font-semibold hover:underline focus-visible:underline'>
          ¿Aún no tienes cuenta? Crea una cuenta
        </Link>
      </form>
    </AuthLayout>
  )
}

export default Login
