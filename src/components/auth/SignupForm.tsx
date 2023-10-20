// named imports
import { Montserrat } from 'next/font/google'

// default imports
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

const SignupForm = () => {
  return (
    <div className='text-gray-700'>
      <div className='text-center'>
        <div className={montserrat.className}>
          <h2 className='text-3xl font-semibold pt-1 pb-2 first-letter:text-sky-500 first-letter:text-5xl first-letter:font-serif'>Sunaar</h2 >
        </div>
        <p className='text-lg'>Create a new account</p>
      </div>

      <form className='my-8 flex flex-col space-y-5 px-5'>
        <div className='flex flex-col space-y-2' >
          <label className='text-xs font-semibold' htmlFor="name">Full name</label>
          <input type="text" className='form-input' />
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='text-xs font-semibold' htmlFor='email'>Email</label>
          <input type='email' className='form-input' />
        </div>

        <div className='flex flex-col space-y-2'>
          <div className='flex justify-between items-center'>
            <label className='text-xs font-semibold' htmlFor='password'>Password</label>
            <p className='text-xs text-sky-700 font-semibold hover:text-gray-700 hover:cursor-pointer'>Forgot your password?</p>
          </div>
          <input type='password' className='form-input' />
        </div>

        <div className='w-full space-y-2 pt-3'>
          <button
            className='w-full bg-sky-500 rounded-md font-semibold hover:bg-sky-400 text-white px-3 py-2'
          >
            Continue
          </button>
          <div className='text-xs flex'>
            <p>Already have an account?</p>&nbsp;
            <Link
              href='/login'
              className='font-semibold hover:cursor-pointer text-sky-600'
            >
              Login
            </Link>
          </div>
        </div>

      </form>
    </div >
  )
}

export default SignupForm
