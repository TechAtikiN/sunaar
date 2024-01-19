// named imports
import { Button } from '../ui/button'

export default function DetailsForm({ isEditing, activeTab }: { isEditing: boolean, activeTab: string }) {
  return (
    <form className='my-8'>
      {activeTab === 'profile' ? (
        // Profile tab
        <div className='flex flex-col space-y-7'>
          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='name'>Name</label>
            <input
              type='text'
              className='dashboard-form-input text-sm py-2'
              id='firstname'
              disabled={!isEditing}
              defaultValue={'Nikita'}
            />
            <input
              type='text'
              className='dashboard-form-input text-sm py-2'
              id='lastname'
              disabled={!isEditing}
              defaultValue={'Khabya'}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='email'>Email</label>
            <input
              type='text'
              className='dashboard-form-input text-sm py-2'
              id='email'
              disabled={!isEditing}
              defaultValue={'nikita@gmail.com'}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='website'>Website</label>
            <input
              type='text'
              className='dashboard-form-input text-sm py-2'
              id='website'
              disabled={!isEditing}
              defaultValue={'https://sunaar.vercel.app'}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='location'>Location</label>
            <input
              type='text'
              className='dashboard-form-input text-sm py-2'
              id='location'
              disabled={!isEditing}
              defaultValue={'Mumbai, India'}
            />
          </div>

          <div className='grid grid-cols-3 gap-x-10 items-center form-border pb-10'>
            <label className='dashboard-form-label' htmlFor='address'>Address</label>
            <textarea
              rows={2}
              className='dashboard-form-input col-span-2 text-sm py-2'
              id='address'
              disabled={!isEditing}
              defaultValue={'123, Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            ></textarea>
          </div>
        </div>
      ) : activeTab === 'password' ? (
        // Change Password tab
        <div className='flex flex-col space-y-7'>
          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='current-password'>Current Password</label>
            <input
              className='dashboard-form-input text-sm py-2'
              id='current-password'
              placeholder='Enter your current password'
            />
          </div>

          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='new-password'>New Password</label>
            <input
              className='dashboard-form-input text-sm py-2'
              id='new-password'
              placeholder='Enter your new password'
            />
          </div>

          <div className='grid grid-cols-3 gap-x-10 items-center'>
            <label className='dashboard-form-label' htmlFor='confirm-password'>Confirm Password</label>
            <input
              className='dashboard-form-input text-sm py-2'
              id='confirm-password'
              placeholder='Confirm your new password'
            />
          </div>
          <Button className='w-1/4'>Update Password</Button>
        </div>
      ) : (
        // Help tab
        <div className='p-5 rounded-md border border-blue-200 shadow-md h-[490px]'>
          <p>Welcome to the <span className='font-bold text-lg'>Sunaar</span> Gold Merchants Dashboard, your central hub for managing various aspects of your gold business. This help page is designed to guide you through the key features and functionalities of the dashboard.
          </p>
          <ul>
            <li className='mt-5'>
              <span className='font-bold'>Dashboard</span> - Gives you a quick overview of your business and its performance. Highlights the key business metrics, real-time Gold and Silver prices, visualizationd and much more.
            </li>
            <li className='mt-5'>
              <span className='font-bold'>Orders</span> - List of all the orders you have received from your customers. You can create new orders, view the details of each order and update the status of the order. Also, download the order invoice(PDF format) and order records(CSV format).
            </li>
            <li className='mt-5'>
              <span className='font-bold'>Customers</span> - List of all the customers who have placed orders with you. You can also view the details of each customer and update their details. Also, download the customer records(CSV format).
            </li>

            <p className='mt-5'>
              Customers and Orders feature have Pagination(Server-Side) and search options on the tables.
            </p>

            <li className='mt-5'>
              <span className='font-bold'>Product Catalogue</span> - List of all the products you have added to your inventory. You can also view the details of each product and update their details.
            </li>
            <li className='mt-5'>
              <span className='font-bold'>Settings</span> - Allows you to update your account details and change your password.
            </li>
          </ul>
        </div>
      )}
    </form >
  )
}
