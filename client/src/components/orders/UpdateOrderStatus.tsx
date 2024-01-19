'use client'

// named imports
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader, DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Button } from '../ui/button'
import { updateOrderStatus } from '@/actions/orders'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

export default function UpdateOrderStatus({ orderId }: { orderId: string | undefined }) {
  const { toast } = useToast()
  const router = useRouter()

  const updateStatus = async (formData: FormData) => {
    const status = formData.get('orderStatus')
    if (!orderId || !status) return alert('Please select a status')
    const result = await updateOrderStatus(orderId as string, status as string)
    if (result === 'success') {
      toast({
        title: "Order status updated!",
        description: "Order status has been updated successfully!",
        duration: 3000,
      })
      router.refresh()
    } else {
      toast({
        title: "An error occurred!",
        description: "Unable to update order status!",
        duration: 3000,
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='bg-slate-800 text-white' variant={'outline'}>Update Status</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Update Order Status</DialogTitle>
          <DialogDescription>
            Update the status of this order.
          </DialogDescription>
        </DialogHeader>
        <form action={updateStatus} className='space-y-5'>
          <select name="orderStatus" id="orderStatus" className='dashboard-form-input w-full py-3'>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <DialogFooter>
            <DialogClose asChild>
              <Button type='submit'>Update Status</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
