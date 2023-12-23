// named imports
import { getAllCustomers } from '@/actions/customers'

// default imports
import CustomerHeader from '@/components/customers/CustomerHeader'
import CustomerFilters from '@/components/customers/CustomerFilters'

import { Suspense } from 'react'
import CustomersTable from '@/components/customers/CustomersTable'
import LoadingSpinner from '@/components/globals/LoadingSpinner'

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1

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
            <CustomersTable query={query} currentPage={currentPage} />
          </Suspense>

        </div>
      </div>
    </>
  )
}
