'use client'
// named imports
import { useState } from 'react'
import { navLinks } from '@/constants/navLinks'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, UserIcon } from '@heroicons/react/20/solid'
// default imports
import Image from 'next/image'
import Navlink from './Navlink'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`${collapsed ? 'w-[77px]' : 'w-64'} rounded-r-xl shadow-xl p-4 h-screen bg-[#191825] transition-all duration-100 ease-in-out`}
    >
      {/* logo */}
      <div className='flex justify-start items-center'>
        <div className={`flex items-center space-x-2 ${!collapsed ? 'mx-4' : 'mx-0'} `}>
          <div className={`h-10 w-10 relative rounded-full`}>
            <Image
              onClick={() => setCollapsed(false)}
              className='hover:cursor-pointer' src='/logo.jpeg' alt='logo' fill
            />
          </div>
          <h2 className={`${collapsed ? 'hidden' : 'block'} text-2xl font-semibold text-amber-600`}>Sunaar.</h2>
        </div>

        <ChevronLeftIcon
          onClick={() => setCollapsed(true)}
          className='h-6 w-6 text-gray-400 mr-3 hover:cursor-pointer'
        />
      </div>

      <hr className='m-4 border-gray-700' />

      {/* top links */}
      <ul className={`${!collapsed ? 'px-3 space-y-4 mt-5' : 'px-1 space-y-3 mt-5'}`}>
        {navLinks.map((link, index) => (
          <Navlink key={index} collapsed={collapsed} link={link} index={index} />
        ))}
      </ul>

    </div>
  )
}

export default Sidebar