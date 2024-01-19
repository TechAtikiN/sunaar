// named imports
import { Suspense } from 'react'
import { getAllCustomers } from '@/actions/customers'

// default imports
import TableFilters from '../globals/TableFilters'
import CustomersTable from './CustomersTable'
import LoadingSpinner from '../globals/LoadingSpinner'

export default async function CustomersSection({
  query, limit, currentPage
}: {
  query: string
  limit: number
  currentPage: number
}) {
  const customerResponse: CustomerResponse = await getAllCustomers(query, currentPage, limit)

  return (
    <div className='section my-5'>

      {/* Filters and Pagination */}
      <TableFilters downloadAbleData={customerResponse?.customers} currentPage={currentPage} hasMore={customerResponse?.hasMore || false} searchPlaceholder='Filter using Name, Email or Company' />

      {/* Table */}
      <Suspense key={query + currentPage} fallback={<LoadingSpinner />}>
        <CustomersTable customers={customerResponse?.customers} />
      </Suspense>
    </div>
  )
}
