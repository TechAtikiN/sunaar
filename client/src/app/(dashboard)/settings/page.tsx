// named imports
import UserDetails from '@/components/settings/UserDetails'

export default function SettingsPage() {
  return (
    <div className='page'>
      <div className='section'>
        <h2 className='heading'>Account Settings</h2>

        <UserDetails />
      </div>
    </div>
  )
}
