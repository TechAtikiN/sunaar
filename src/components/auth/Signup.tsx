interface Props {
  setAuthState: React.Dispatch<React.SetStateAction<'login' | 'signup'>>
}

const Signup = ({ setAuthState }: Props) => {
  return (
    <div className='text-gray-700'>
      <p className='font-semibold text-2xl px-5'>Create a new account</p>

      <form className='my-5 flex flex-col space-y-5 px-5'>
        <div className='flex flex-col space-y-2'>
          <label className='text-xs font-semibold' htmlFor="name">Full name</label>
          <input type="text" className='px-3 py-2 rounded-md transition-transform duration-200 focus:outline-none border border-gray-300 focus:ring-2 ring-blue-300/70'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='text-xs font-semibold' htmlFor="email">Email</label>
          <input type="email" className='px-3 py-2 rounded-md transition-transform duration-200 focus:outline-none border border-gray-300 focus:ring-2 ring-blue-300/70'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label className='text-xs font-semibold' htmlFor="password">Password</label>
          <input type="password" className='px-3 py-2 rounded-md transition-transform duration-200 focus:outline-none border border-gray-300 focus:ring-2 ring-blue-300/70'
          />
        </div>

        <div className='w-full space-y-2 pt-3'>
          <button
            className='w-full bg-sky-500 rounded-md font-semibold hover:bg-sky-400 text-white px-3 py-2'>
            Continue
          </button>
          <p className='text-xs'>Already have an account?
            <span
              onClick={() => setAuthState('login')}
              className='font-semibold hover:cursor-pointer text-sky-600'> Sign up</span>
          </p>
        </div>

      </form>
    </div>
  )

}

export default Signup
