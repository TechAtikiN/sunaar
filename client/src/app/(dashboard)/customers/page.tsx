// named imports
import { formatQueryParam } from '@/lib/utils'

// default imports
import CustomerHeader from '@/components/customers/CustomerHeader'
import CustomersSection from '@/components/customers/CustomersSection'

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

  return (
    <>
      <div className='page'>
        {/* Header section */}
        <CustomerHeader />

        <CustomersSection limit={limit} currentPage={currentPage} query={query} />
      </div>
    </>
  )
}
