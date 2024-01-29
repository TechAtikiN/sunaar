// named imports
import { authenticate } from '@/actions/auth'
import { redirect } from 'next/navigation'
import UserDetails from '@/components/settings/UserDetails'

export default async function SettingsPage() {
  const status = await authenticate()
  if (status === 'fail') {
    redirect('/login')
  }

  return (
    <div className='page'>
      <div className='section'>
        <h2 className='heading'>Account Settings</h2>

        <UserDetails />
      </div>
    </div>
  )
}
