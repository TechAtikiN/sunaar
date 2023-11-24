// named imports
import { navLinks } from '@/constants/navLinks'

// default imports
import Image from 'next/image'
import Navlink from './Navlink'

const Sidebar = () => {

  return (
    <div
      className={`col-span-2 fixed flex flex-col overflow-hidden h-full shadow-xl p-4 bg-[#191825] transition-all duration-100 ease-in-out`}
    >
      {/* logo */}
      <div className={`flex items-center space-x-2 mx-9`}>
        <div className={`h-10 w-10 relative rounded-full`}>
          <Image
            className='hover:cursor-pointer' src='/logo.jpeg' alt='logo' fill
          />
        </div>
        <h2 className={`block text-2xl font-semibold text-amber-600`}>Sunaar.</h2>
      </div>

      <hr className='m-4 border-gray-700' />

      {/* top links */}
      <ul className={`px-3 space-y-4 mt-5`}>
        {navLinks.map((link, index) => (
          <Navlink key={index} link={link} index={index} />
        ))}
      </ul>

    </div>
  )
}

export default Sidebar