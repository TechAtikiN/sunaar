// named imports
import { getAllCustomers } from '@/actions/customers'

// default imports
import ActionDetails from './ActionDetails'

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string,
  currentPage: number,
}) {
  // Fetch customers 
  const { data: customers }: { data: Customer[] } = await getAllCustomers(query, currentPage)

  return (
    <table className='w-full border border-gray-200 my-4 p-4 rounded-lg'>
      <thead className=''>
        <tr className='border-b border-slate-200'>
          <th className='text-center py-4 rounded-l-xl text-slate-500 font-semibold text-base'>Customer ID</th>
          <th className='text-center py-4 text-slate-500 font-semibold text-base'>Customer Name</th>
          <th className='text-center py-4 text-slate-500 font-semibold text-base'>Company</th>
          <th className='text-center py-4 text-slate-500 font-semibold text-base'>Email</th>
          <th className='text-center py-4 text-slate-500 font-semibold text-base'>Phone</th>
          <th className='text-center py-4 text-slate-500 font-semibold text-base'>Location</th>
          <th className='text-center py-4 text-slate-500 font-semibold text-base'>Actions</th>
        </tr>
      </thead>

      <tbody className=''>
        {customers?.map((customer: Customer) => (
          <tr key={customer.ID}>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300'>
              {`${customer.ID.slice(0, 4)}...${customer.ID.slice(-4)}`}
            </td>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300'>{`${customer.FirstName} ${customer.LastName}`}</td>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300'>{customer.CompanyName}</td>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300'>{customer.Email}</td>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300'>{customer.Phone}</td>
            <td className='text-center px-2 py-4 text-slate-600 text-sm border-b border-slate-300'>{customer.State}</td>
            <td className='text-center px-2 py-2 text-slate-600 text-sm border-b border-slate-300'>
              <ActionDetails customerID={customer.ID} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
