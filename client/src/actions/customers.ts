'use server'

import { BASE_URL } from '@/constants/urls'
import { cookies } from 'next/headers'

export async function getAllCustomers(query: string, currentPage: number = 1, limit: number = 10) {
  // getting token from cookies
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
    console.log(error);
  }
}

export async function addCustomer(data: any) {
  console.log('Adding Customer', data)
}