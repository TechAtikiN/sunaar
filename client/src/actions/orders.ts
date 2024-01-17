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
    const {orders, hasMore}: { orders: OrderDetails[], hasMore: boolean } = await response.json()
    return { orders, hasMore }
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

export async function createOrder(details: any, products: any) {
  const token = cookies().get('token')

  const data = {
    ...details,
    order_products: products
  }

  try {
    const response = await fetch(`${BASE_URL}api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      },
      body: JSON.stringify(data)
    })
    const { status } = await response.json()
    return status
  } catch (error) {
    console.log(error)
    return error
  }
}