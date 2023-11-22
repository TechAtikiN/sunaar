// named imports
// default imports
import CustomerHeader from '@/components/customers/CustomerHeader'
import CustomerListing from '@/components/customers/CustomerListing'

function CustomersPage() {
  return (
    <div className='page h-screen'>

      {/* Header section */}
      <CustomerHeader />

      {/* Filters */}
      <div className='section my-5 p-5'>

        <div>
          hello
        </div>

        {/* Customer listing */}
        <CustomerListing />
      </div>
    </div>
  )
}

export default CustomersPage
