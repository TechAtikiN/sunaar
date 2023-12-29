'use client'
// named imports
import { usePathname } from 'next/navigation'

// default imports
import Link from 'next/link'


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
