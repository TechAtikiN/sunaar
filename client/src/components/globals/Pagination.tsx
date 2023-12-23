'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Pagination({ currentPage }: { currentPage: number }) {
  const pathname = usePathname()

  return (
    <div className='flex justify-center space-x-3 mt-3'>
      <Link
        href={`${pathname}?page=${currentPage > 1 ? currentPage - 1 : 1}`}
        className='dashboard-btn'
      >
        Previous
      </Link>

      <Link
        href={`${pathname}?page=${currentPage + 1}`}
        className='dashboard-btn'
      >
        Next
      </Link>
    </div>
  )
}
