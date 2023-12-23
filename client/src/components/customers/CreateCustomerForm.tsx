import { addCustomer } from "@/actions/customers";
import { Button } from "../ui/button";

export default async function CreateCustomerForm() {
  const addCustomer = async (formData: FormData) => {
    'use server'
    let formDataObject = Object.fromEntries(formData.entries())
    // remove the action id from the form data
    formDataObject = Object.fromEntries(
      Object.entries(formDataObject).filter(([key, value]) => key !== 'action')
    )
    // console.log(formDataObject)
  }

  return (
    <form action={addCustomer} method='POST'>

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
              <input name='first_name' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='lastName'>Last name</label>
              <input name='last_name' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='email'>Email Address</label>
              <input name='email' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='phone'>Phone No.</label>
              <input name='phone' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-2 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='city'>City</label>
              <input name='city' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-2 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='state'>State</label>
              <input name='state' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-2 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='postalCode'>Postal Code</label>
              <input name='postal_code' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-6 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='address'>Address</label>
              <textarea
                required
                name="address"
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
              <input name='company_name' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyEmail'>Company Email Address</label>
              <input name='company_email' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyContact'>Contact No.</label>
              <input name='company_phone' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-3 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='city'>Remark</label>
              <input name='remark' type='text' required className='dashboard-form-input' />
            </div>

            <div className='col-span-6 flex flex-col space-y-2'>
              <label className='dashboard-form-label' htmlFor='companyAddress'>Company Address</label>
              <textarea
                name="company_address"
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
