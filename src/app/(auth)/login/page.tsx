'use client'
// named imports
import { useState } from 'react'
// default imports
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import Image from 'next/image'

const LoginPage = () => {
  const [authState, setAuthState] = useState<'login' | 'signup'>('login')

  return (
    <div className='grid grid-cols-2 bg-gray-100'>
      <div className='h-screen'>
        <div className='relative h-full w-full  shadow-3xl overflow-hidden'>
          <Image
            fill
            className='object-cover'
            // className='rounded-br-[2000px] rounded-tl-[600px]'
            src='https://images.unsplash.com/photo-1535083252457-6080fe29be45?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='bg-image'
          />
          <div className={`absolute inset-0 z-10 bg-black bg-opacity-30`} />
        </div>
      </div>

      <div className='relative overflow-hidden px-6'>
        <div className='w-full absolute -rotate-45 bottom-40 left-1/3 h- bg-sky-600/80 drop-shadow-2xl' />

        <div className='py-8 text-gray-700 px-20'>
          <h2 className='text-2xl font-bold my-4'>sunaar</h2>
          <div className='glass-card h-full w-full p-7'>
            {
              authState === 'login' ?
                <Login setAuthState={setAuthState} />
                : <Signup setAuthState={setAuthState} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
