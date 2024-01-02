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
    return orders
  } catch (error) {
    console.log(error)
  }
}

export async function getOrderById(id: string) {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { data: order }: { data: OrderDetails } = await response.json()
    return order
  } catch (error) {
    console.log(error)
  }
}

export async function updateOrderStatus(id: string, status: string) {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      },
      body: JSON.stringify({ status })
    })
    const { status: result }: { status: string } = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}