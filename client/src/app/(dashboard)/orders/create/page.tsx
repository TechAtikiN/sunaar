import CreateOrder from "@/components/orders/CreateOrder";

export default function CreateOrderPage() {


  return (
    <div className='page'>
      <div>
        <h2 className='heading'>Create Order</h2>

        {/* Add customer form */}
        <div className='section my-5'>
          <CreateOrder />
        </div>
      </div>
    </div>
  )
}
