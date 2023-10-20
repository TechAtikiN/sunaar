interface Props {
  setAuthState: React.Dispatch<React.SetStateAction<'login' | 'signup'>>
}

const Login = ({ setAuthState }: Props) => {
  return (
    <div className='text-gray-700'>
      <p className='font-semibold text-2xl px-5'>Sign in to your account</p>

      <form className='my-8 flex flex-col space-y-9 px-5'>
        <div className='flex flex-col space-y-2'>
          <label className='text-xs font-semibold' htmlFor="email">Email</label>
          <input type="email" className='px-3 py-2 rounded-md transition-transform duration-200 focus:outline-none border border-gray-300 focus:ring-2 ring-blue-300/70'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <div className='flex justify-between items-center'>
            <label className='text-xs font-semibold' htmlFor="password">Password</label>
            <p className='text-xs text-sky-700 font-semibold hover:text-gray-700 hover:cursor-pointer'>Forgot your password?</p>
          </div>
          <input type="password" className='px-3 py-2 rounded-md transition-transform duration-200 focus:outline-none border border-gray-300 focus:ring-2 ring-blue-300/70'
          />
        </div>

        <div className='w-full space-y-2 pt-3'>
          <button
            className='w-full bg-sky-500 rounded-md font-semibold hover:bg-sky-400 text-white px-3 py-2'>
            Continue
          </button>
          <p className='text-xs'>Don&apos;t have an account?
            <span
              onClick={() => setAuthState('signup')}
              className='font-semibold hover:cursor-pointer text-sky-600'> Sign up</span>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Login
