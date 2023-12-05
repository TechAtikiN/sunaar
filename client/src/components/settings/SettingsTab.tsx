// named imports
import { usePathname, useRouter } from 'next/navigation'

const tabs = [
  {
    name: 'Profile',
    tag: 'profile',
  },
  {
    name: 'Password',
    tag: 'password',
  },
  {
    name: 'Help',
    tag: 'help',
  }
]

interface Props {
  activeTab: string,
  setActiveTab: (tag: string) => void
}

export default function SettingsTab({ activeTab, setActiveTab }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const handleTabChange = (tag: string) => {
    setActiveTab(tag)
    router.replace(`${pathname}?tab=${tag}`)
  }

  return (
    <div className='mb-5 mt-8'>
      <ul className='flex py-2 form-border'>
        {tabs.map((tab, index) => (
          <li
            onClick={() => handleTabChange(tab.tag)}
            className={`mr-5 text-sm font-bold px-3 cursor-pointer ${activeTab === tab.tag ? 'text-amber-600 -mb-2 border-b-4 border-amber-600' : 'text-gray-500 font-semibold'}`}
            key={tab.name}>
            {tab.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
