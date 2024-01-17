'use client'
// named imports
import { usePathname } from 'next/navigation'

// default imports
import Link from 'next/link'
import { Button } from '../ui/button'


export default function Pagination({ currentPage, hasMore }: { currentPage: number, hasMore: boolean }) {
  const pathname = usePathname()

  return (
    <div className='flex justify-end space-x-3 mt-3'>
      {currentPage > 1 && (
        <Button variant={'outline'}>
          <Link
            href={`${pathname}?page=${currentPage > 1 ? currentPage - 1 : 1}`}
            className=''
          >
            Previous
          </Link>
        </Button>
      )}

      {hasMore && (
        <Button variant={'outline'}>
          <Link
            href={`${pathname}?page=${currentPage + 1}`}
          >
            Next
          </Link>
        </Button>
      )}
    </div>
  )
}
