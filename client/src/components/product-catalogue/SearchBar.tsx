'use client'

// named imports
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '../ui/input'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Debounce the search term to avoid making too many requests
  const handleSearch = useDebouncedCallback((term: string) => {
    // Update the query param
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('category', term)
    } else {
      params.delete('category')
    }
    // Update the URL
    replace(`${pathname}?${params.toString()}${searchParams.get('page') ? `&page=${searchParams.get('page')}` : ''}`)
  }, 600)


  return (
    <div>
      <Input
        id='category'
        onChange={(e) => { handleSearch(e.target.value) }}
        type='text'
        placeholder='Search for category'
        className='px-3 py-2 text-sm w-[30rem] dashboard-form-input'
      />
    </div>
  )
}
