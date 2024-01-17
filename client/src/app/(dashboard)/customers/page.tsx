// named imports
import { Suspense } from 'react'
import { getAllCustomers } from '@/actions/customers'
import { formatQueryParam } from '@/lib/utils'

// default imports
import CustomerHeader from '@/components/customers/CustomerHeader'
import CustomersTable from '@/components/customers/CustomersTable'
import LoadingSpinner from '@/components/globals/LoadingSpinner'
import TableFilters from '@/components/globals/TableFilters'

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    limit?: string
  }
}) {
  let query = searchParams?.query || ''
  query = formatQueryParam(query)
  const currentPage = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 8

  const customerResponse: CustomerResponse = await getAllCustomers(query, currentPage, limit)

  return (
    <>
      <div className='page'>
        {/* Header section */}
        <CustomerHeader />
        <div className='section my-5'>

          {/* Filters and Pagination */}
          <TableFilters downloadAbleData={customerResponse?.customers} currentPage={currentPage} hasMore={customerResponse?.hasMore || false} searchPlaceholder='Filter using Name, Email or Company' />

          {/* Table */}
          <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
            <CustomersTable customers={customerResponse?.customers} />
          </Suspense>
        </div>
      </div>
    </>
  )
}
