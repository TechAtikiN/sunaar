'use client'

// named imports
import { useRouter } from 'next/navigation'
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Montserrat } from 'next/font/google'

// default imports
import Link from 'next/link'

const features = [
  {
    title: 'Get started for free',
    description: 'Getting started is easy. Sign up for free and start building your business today.',
  },
  {
    title: 'Sales and customer service',
    description: 'Sunaar helps you to manage your sales and customer service in one place.',
  },
  {
    title: 'Manage your business',
    description: 'Organize your business with Sunaar. Manage your customers, sales, and customer service with ease',
  }
]

const montserrat = Montserrat({ subsets: ['latin'] })

const LoginForm = () => {
  const router = useRouter()

  return (
    <div className='grid grid-cols-2 mt-10'>
      <div>
        <div className={montserrat.className}>
          <h2 className='text-3xl font-semibold first-letter:text-amber-600 text-gray-300 first-letter:text-5xl first-letter:font-serif'>Sunaar</h2 >
        </div>

        <div>
          {features.map((feature, index) => (
            <div key={index} className='flex items-start space-x-2 my-8'>
              <div>
                <CheckCircleIcon className='w-5 h-5 mt-[2px] text-amber-500' />
              </div>
              <div className='group'>
                <p className='font-semibold text-gray-200 group-hover:text-amber-600 group-hover:cursor-pointer'>{feature.title}</p>
                <p className='text-xs text-gray-300'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='text-gray-300 border-l py-4 border-amber-500'>
        <p className='text-2xl font-semibold px-5'>Sign in to your account</p>


        <form className='my-8 flex flex-col space-y-5 px-5'>
          <div className='flex flex-col space-y-2'>
            <label className='text-xs font-semibold' htmlFor='email'>Email</label>
            <input type='email' className='form-input'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='flex justify-between items-center'>
              <label className='text-xs font-semibold' htmlFor='password'>Password</label>
              <p className='text-xs text-amber-500 font-semibold hover:text-gray-200 hover:cursor-pointer'>Forgot your password?</p>
            </div>
            <input type='password' className='form-input'
            />
          </div>

          <div className='w-full space-y-2 pt-3'>
            <button
              type='button'
              onClick={() => router.push('/home')}
              className='w-full bg-amber-600 rounded-sm font-semibold hover:bg-amber-500 text-white px-3 py-2'
            >
              Continue
            </button>
            <div className='text-xs flex'>
              <p>Don&apos;t have an account?</p>&nbsp;
              <Link
                href='/register'
                className='font-semibold hover:cursor-pointer text-amber-500'
              >
                Sign up
              </Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginForm
