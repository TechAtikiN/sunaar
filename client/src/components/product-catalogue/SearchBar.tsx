'use client'

// named imports
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function SearchBar() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const router = useRouter()
  const pathName = usePathname()

  const handleCategorySearch = () => {
    selectedCategory ? router.replace(`${pathName}?category=${selectedCategory}`) : router.replace(`${pathName}`)
  }

  return (
    <div>
      <form onSubmit={() => handleCategorySearch()}>
        <input
          value={selectedCategory}
          id='category'
          onChange={(e) => setSelectedCategory(e.target.value)}
          type='text'
          placeholder='Search for category'
          className='px-3 py-2 text-sm w-[30rem] dashboard-form-input'
        />
      </form>
    </div>
  )
}
