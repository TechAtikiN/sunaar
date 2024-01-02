'use server'

import { BASE_URL } from '@/constants/urls'
import { cookies } from 'next/headers'

export async function getAllOrders(query: string, currentPage: number = 1, limit: number = 10) {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/orders?query=${query}&page=${currentPage}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const orders = await response.json()
    console.log(orders)
    return orders
  } catch (error) {
    console.log(error)
  }
}