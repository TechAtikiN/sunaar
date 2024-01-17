'use client'

// named imports
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DownloadIcon } from 'lucide-react'
import { CSVLink } from 'react-csv'
import { formatDate } from '@/lib/utils'

// default imports
import Pagination from './Pagination'

interface Props {
  currentPage: number
  searchPlaceholder: string
  hasMore: boolean
  downloadAbleData: Customer[] | Order[] | undefined
}

export default function TableFilters({ searchPlaceholder, currentPage, hasMore, downloadAbleData }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // CSV Data for download
  const csvData = [
    pathname === '/customers' ?
      ['Customer ID', 'First Name', 'Last Name', 'Company', 'Email', 'Phone', 'City', 'State']
      : ['Order ID', 'Customer ID', 'Created At', 'Company', 'Order Weight', 'Order Value', 'Order Status']
    , ...(
      downloadAbleData?.map((item: Customer | Order) => {
        if (pathname.includes('customers') || pathname === '/customers') {
          const customer = item as Customer
          return [
            customer.ID,
            customer.FirstName,
            customer.LastName,
            customer.CompanyName,
            customer.Email,
            customer.Phone,
            customer.City,
            customer.State,
          ]
        } else {
          const order = item as OrderDetails
          return [
            order.ID,
            order.CustomerID,
            formatDate(order.CreatedAt),
            order.CompanyName,
            order.OrderWeight,
            order.OrderValue,
            order.Status,
          ]
        }
      }) || []
    )]

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
    replace(`${pathname}?${params.toString()}${searchParams.get('page') ? `&page=${searchParams.get('page')}` : ''}`)
  }, 600)

  return (
    <div className='flex justify-between items-center'>
      <Input
        placeholder={searchPlaceholder}
        onChange={(e) => { handleSearch(e.target.value) }}
        className='max-w-sm text-slate-800 placeholder:text-slate-700'
        defaultValue={searchParams.get('query')?.toString()}
      />
      <div className='flex items-center justify-center space-x-2'>
        <Pagination currentPage={currentPage} hasMore={hasMore} />
        <CSVLink filename="DATA.csv" data={csvData}>
          <Button className='mt-3'>
            <DownloadIcon className='h-4 w-4' />
          </Button>
        </CSVLink>
      </div>
    </div>
  )
}
