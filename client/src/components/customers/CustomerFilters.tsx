'use client'

// named imports
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DownloadIcon } from 'lucide-react'

export default function CustomerFilters({ searchPlaceholder }: { searchPlaceholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Debounce the search term to avoid making too many requests
  const handleSearch = useDebouncedCallback((term: string) => {
    // Update the query param
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    // Update the URL
    replace(`${pathname}?${params.toString()}`)
  }, 300);

  return (
    <div className='flex justify-between items-center'>
      <Input
        placeholder={searchPlaceholder}
        onChange={(e) => { handleSearch(e.target.value) }}
        className='max-w-sm'
        defaultValue={searchParams.get('query')?.toString()}
      />
      <Button>
        <DownloadIcon className='h-4 w-4' />
      </Button>
    </div>
  )
}
