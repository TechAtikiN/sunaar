// default imports
import SignupForm from '@/components/auth/SignupForm'
import Image from 'next/image'

const Signup = () => {
  return (
    <div className='grid grid-cols-2 bg-gradient-to-tr from-amber-50 via-orange-100 to-sky-300'>
      <div className='h-screen'>
        <div className='relative h-full w-full  shadow-3xl overflow-hidden'>
          <Image
            fill
            className='object-cover'
            src='https://images.unsplash.com/photo-1535083252457-6080fe29be45?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='bg-image'
          />
          <div className={`absolute inset-0 z-10 bg-black bg-opacity-40`} />
        </div>
      </div>

      <div className='relative overflow-hidden px-6'>
        {/* <div className='w-full absolute -rotate-45 h-[30px] bottom-40 left-1/3 h- bg-sky-600/80 drop-shadow-2xl' /> */}

        <div className='py-8 text-gray-700 mx-auto h-[550px] my-12 glass-card shadow-lg max-w-[30rem] p-7'>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Signup
