import Sidebar from '@/components/globals/Sidebar'

const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex flex-row h-screen'>
      <div className=''>
        <Sidebar />
      </div>
      <main className='flex flex-col w-full bg-gray-100'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
