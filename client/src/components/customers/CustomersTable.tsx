// named imports
import { getAllCustomers } from '@/actions/customers'

// default imports
import ActionDetails from '../globals/ActionDetails'

export default async function CustomersTable({
  query,
  currentPage,
  limit = 10
}: {
  query: string,
  currentPage: number,
  limit?: number
}) {
  // Fetch customers 
  const { customers }: { customers: Customer[] } = await getAllCustomers(query, currentPage, limit)

  return (
    <table className='w-full border border-gray-200 my-4 p-4 rounded-lg'>
      <thead className=''>
        <tr className='border-b border-slate-200'>
          <th className='text-center py-4 rounded-l-xl text-slate-500 font-semibold text-base'>Customer ID</th>
          <th className='table-header-data'>Customer Name</th>
          <th className='table-header-data'>Company</th>
          <th className='table-header-data'>Email</th>
          <th className='table-header-data'>Phone</th>
          <th className='table-header-data'>Location</th>
          <th className='table-header-data'>Actions</th>
        </tr>
      </thead>

      <tbody className=''>
        {customers?.length > 0 ? customers?.map((customer: Customer) => (
          <tr key={customer?.ID}>
            <td className='px-2 py-4 table-data'>
              {`${customer?.ID.slice(0, 4)}...${customer?.ID.slice(-4)}`}
            </td>
            <td className='table-data'>{`${customer?.FirstName} ${customer?.LastName}`}</td>
            <td className='table-data'>{customer?.CompanyName}</td>
            <td className='table-data'>{customer?.Email}</td>
            <td className='table-data'>{customer?.Phone}</td>
            <td className='table-data'>{customer?.State}</td>
            <td className='text-center px-2 py-2 text-slate-600 text-sm border-b border-slate-300'>
              <ActionDetails customerID={customer?.ID} />
            </td>
          </tr>
        )) : (
          <tr>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300' colSpan={7}>No customers found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
