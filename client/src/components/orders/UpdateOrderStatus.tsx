import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader, DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Button } from '../ui/button'

export default function UpdateOrderStatus() {
  return (
    <Dialog>
      <DialogTrigger className='dashboard-btn py-2 font-normal text-sm'>
        Change Status
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Update Order Status</DialogTitle>
          <DialogDescription>
            Update the status of this order.
          </DialogDescription>
        </DialogHeader>
        <select name="orderStatus" id="orderStatus" className='dashboard-form-input w-full py-3'>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <DialogFooter>
          <Button type='submit'>Update Status</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
