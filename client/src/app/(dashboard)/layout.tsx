// named imports
import Sidebar from '@/components/globals/Sidebar'

const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2 bg-gray-100'>
        <Sidebar />
      </div>
      <main className='col-span-10 flex flex-col bg-gray-100'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
