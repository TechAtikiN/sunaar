'use server'

import { BASE_URL } from '@/constants/urls'
import { cookies } from 'next/headers'

// getting all customers
export async function getAllCustomers(query: string, currentPage: number = 1, limit: number = 10) {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/customers?query=${query}&page=${currentPage}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const customers = await response.json()
    return customers
  } catch (error) {
    console.log(error)
  }
}

// creating a customer
export async function createCustomer(data: any) {
  const token = cookies().get('token')
  
  try {
    const response = await fetch(`${BASE_URL}api/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      },
      body: data
    })

    const { status } = await response.json()
    return status
  } catch (error) {
    console.log(error)
    return error
  }
}

export async function getCustomerById(id: string) {
  const token = cookies().get('token')

  try {
    // get customer details
    const response = await fetch(`${BASE_URL}api/customers/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { customer }  : {customer: Customer } = await response.json()
    
    //get the orders associated with the customer
    const customerOrders = await fetch(`${BASE_URL}api/orders?customer_id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { orders }: { orders: Order[] } = await customerOrders.json()
    const customerDetails = { customer, orders }
    return customerDetails
  } catch (error) {
    console.log(error)
  }
}