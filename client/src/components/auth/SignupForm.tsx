'use client'
// named imports
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { Montserrat } from 'next/font/google'
import { register } from '@/actions/auth'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

// default imports
import Link from 'next/link'
import { useUserStore } from '@/store/useUserStore'

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

const SignupForm = () => {
  const token = useUserStore((state) => state.token)

  const { toast } = useToast()
  const router = useRouter()

  if (token) {
    router.push('/home')
  }

  const createUser = async (formData: FormData) => {
    try {
      const user = await register(formData)
      if (user) {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          duration: 3000
        })
        router.push('/home')
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to create your account.",
        duration: 3000,
      })
    }
  }

  return (
    <div className='grid grid-cols-2 mt-4'>
      <div className='border-r border-amber-500'>
        <div className={montserrat.className}>
          <h2 className='text-3xl font-semibold first-letter:text-amber-600 text-gray-300 first-letter:text-5xl first-letter:font-serif'>Sunaar</h2 >
        </div>

        {/* Feature Description */}
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

      <div className='text-gray-300 py-4'>
        <p className='text-2xl font-semibold px-5'>Create a new account</p>

        <form action={createUser} method='POST' className='my-8 flex flex-col space-y-5 px-5'>
          <div className='flex flex-col space-y-2' >
            <label className='text-xs font-semibold' htmlFor="name">Full name</label>
            <input required name="name" type="text" className='form-input' />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='text-xs font-semibold' htmlFor='email'>Email</label>
            <input required name="email" type='email' className='form-input'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='text-xs font-semibold' htmlFor='password'>Password</label>
            <input required name="password" type='password' className='form-input' />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='text-xs font-semibold' htmlFor='PasswordConfirm'>Confirm Password</label>
            <input required name="PasswordConfirm" type='password' className='form-input' />
          </div>

          <div className='w-full space-y-2 pt-3'>
            <button
              type='submit'
              className='w-full bg-amber-600 rounded-sm font-semibold hover:bg-amber-500 text-white px-3 py-2'
            >
              Continue
            </button>
            <div className='text-xs flex'>
              <p>Already have an account?</p>&nbsp;
              <Link
                href='/login'
                className='font-semibold hover:cursor-pointer text-amber-500'
              >
                Login
              </Link>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignupForm


