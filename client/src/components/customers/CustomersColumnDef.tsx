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

export const customerColumns: ColumnDef<Customer>[] = [
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
    accessorKey: 'customerName',
    header: 'Customer Name',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('customerName')}</div>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'phone',
    header: 'Phone No.',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('phone')}</div>
    ),
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('location')}</div>
    ),
  },
  {
    accessorKey: 'averageOrderValue',
    header: 'Avg. Order Val.',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('averageOrderValue')}</div>
    ),
  },
  {
    accessorKey: 'revenue',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Revenue
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('revenue'))

      // Format the amount as a RUPEE amount
      const formatted = handleCurrencyFormat(amount)
      return <div className='text-left font-medium'>{formatted}</div>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const Customer = row.original

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
              onClick={() => navigator.clipboard.writeText(Customer.id)}
            >
              Copy Customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link className='hover:cursor-pointer' href={`/customers/${Customer.id}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
