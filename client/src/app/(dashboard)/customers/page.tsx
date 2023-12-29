// named imports
import { Suspense } from 'react'

// default imports
import CustomerHeader from '@/components/customers/CustomerHeader'
import CustomerFilters from '@/components/customers/CustomerFilters'
import CustomersTable from '@/components/customers/CustomersTable'
import LoadingSpinner from '@/components/globals/LoadingSpinner'
import Pagination from '@/components/globals/Pagination'

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    limit?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 8

  return (
    <>
      <div className='page'>
        {/* Header section */}
        <CustomerHeader />
        <div className='section my-5'>

          {/* Filters */}
          <CustomerFilters searchPlaceholder='Filter using Name, Email or Company' />

          {/* Table */}
          <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
            <CustomersTable query={query} currentPage={currentPage} limit={limit} />
          </Suspense>

          {/* Pagination  */}
          <Pagination currentPage={currentPage} />
        </div>
      </div>
    </>
  )
}
