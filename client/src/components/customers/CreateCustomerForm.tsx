import { Button } from "../ui/button";

export default function CreateCustomerForm() {
  return (
    <form action='' className=''>

      <div className='h-[570px] overflow-auto'>
        {/* Personal Details */}
        <div className='flex space-x-10'>
          <div className='flex flex-col w-1/4 space-y-1'>
            <h2 className='font-bold text-slate-700'>Personal Details</h2>
            <p className='text-xs text-slate-500'>
              Please provide personal information to create a new customer profile.
            </p>
          </div>

          <div className='grid grid-cols-6 gap-x-4 gap-y-5 p-5 w-3/4 '>
            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='firstName'>First name</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='lastName'>Last name</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='email'>Email Address</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='phone'>Phone No.</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-2 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='city'>City</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-2 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='state'>State</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-2 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='postalCode'>Postal Code</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-6 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='address'>Address</label>
              <textarea
                rows={2} className='dashboard-form-input'
              ></textarea>
            </div>
          </div>
        </div>

        <hr className='my-6' />

        {/* Company Details */}
        <div className='flex space-x-10'>
          <div className='flex flex-col w-1/4 space-y-1'>
            <h2 className='font-bold text-slate-700'>Company Details</h2>
            <p className='text-xs text-slate-500'>
              Provide company details of the customer.
            </p>
          </div>

          <div className='grid grid-cols-6 gap-x-4 gap-y-5 p-5 w-3/4 '>
            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyName'>Company name</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyEmail'>Company Email Address</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyContact'>Contact No.</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='city'>Remark</label>
              <input type='text' className='dashboard-form-input' />
            </div>

            <div className='col-span-6 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyAddress'>Company Address</label>
              <textarea
                rows={2} className='dashboard-form-input'
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <Button type='submit' className='mr-5'>Add Customer</Button>
      </div>
    </form>
  )
}
