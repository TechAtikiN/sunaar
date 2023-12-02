'use client'

// named imports
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Checkbox } from '../ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'

// default imports
import Link from 'next/link'
import { handleCurrencyFormat } from '@/lib/utils'

export const orderColumns: ColumnDef<Order>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Order ID',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('id')}</div>
    ),
  },
  {
    accessorKey: 'customerId',
    header: 'Customer ID',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('customerId')}</div>
    ),
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('customerName')}</div>
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => {
            // sort by date 
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('date')}</div>
    ),
  },
  {
    accessorKey: 'orderValue',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Order Value
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('orderValue'))

      // Format the amount as a RUPEE amount
      const formatted = handleCurrencyFormat(amount)
      return <div className='ml-6 font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: 'orderWeight',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Order Weight
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('orderWeight'))

      return <div className='ml-6 font-medium'>{row.getValue('orderWeight')}gm</div>
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const Order = row.original

      return (
        <div className='capitalize'>
          <span className={`capitalize px-2 py-1 rounded-full text-xs font-semibold ${Order.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' : Order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {row.getValue('status')}
          </span>
        </div>
      )
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const Order = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(Order.id)}
            >
              Copy Order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link className='hover:cursor-pointer' href={`/orders/${Order.id}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
