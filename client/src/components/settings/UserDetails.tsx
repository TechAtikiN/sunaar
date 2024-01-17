'use client'
// named imports
import { useState } from 'react'
import { Edit2Icon } from 'lucide-react'
import { Button } from '../ui/button'

// default imports
import SettingsTab from './SettingsTab'
import DetailsForm from './DetailsForm'

export default function UserDetails() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className='mx-3 h-[580px]'>
      {/* Settings tab section */}
      <SettingsTab activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Edit buttons */}
      {activeTab === 'profile' && (
        <div className='form-border py-2'>
          <h2 className='font-semibold my-1'>Personal Info</h2>
          <div className='flex justify-between items-center'>
            <p className='text-sm text-gray-400'>Update your personal details here</p>

            <div className='flex'>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center space-x-1 ${isEditing ? 'hidden' : 'visible'}`}
              >
                <Edit2Icon className='' size={14} />
                <p>Edit</p>
              </Button>

              {isEditing && (
                <div className='flex space-x-2'>
                  <Button onClick={() => setIsEditing(!isEditing)} variant={'outline'}>
                    Cancel
                  </Button>
                  <Button>Save</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <DetailsForm activeTab={activeTab} isEditing={isEditing} />
    </div>
  )
}
