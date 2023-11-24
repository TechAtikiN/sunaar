// named imports
import Sidebar from '@/components/globals/Sidebar'

const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='grid grid-cols-12'>
      {/* Sidebar */}
      <div className='col-span-2 bg-gray-100'>
        <Sidebar />
      </div>

      {/* Main */}
      <main className='col-span-10 flex flex-col bg-slate-200/50'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
