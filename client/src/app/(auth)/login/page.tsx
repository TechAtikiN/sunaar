// default imports
import LoginForm from '@/components/auth/LoginForm'
import Image from 'next/image'

const Login = () => {
  return (
    <div className=''>
      <div className='h-screen'>
        <div className='relative h-full w-full shadow-3xl overflow-hidden'>
          <Image
            fill
            className='object-cover'
            src='https://images.unsplash.com/photo-1535083252457-6080fe29be45?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='bg-image'
          />
          <div className={`absolute inset-0 z-10 bg-black bg-opacity-50`} />
        </div>
      </div>

      <div className='absolute z-20 top-0 right-[17%] w-2/3 overflow-hidden px-6'>
        {/* <div className='w-full absolute -rotate-45 h-[30px] bottom-40 left-1/3 h- bg-sky-600/80 drop-shadow-2xl' /> */}

        <div className='py-8 text-gray-700 h-[550px] my-12 glass-card shadow-lg p-7'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
