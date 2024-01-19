'use server'

import { BASE_URL } from '@/constants/urls'
import { cookies } from 'next/headers'

export async function getDashboardData() {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/dashboard`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { totalCustomers, totalOrders, totalRevenue, recentOrders, topOrders } = await response.json()
    const data = { totalCustomers, totalOrders, totalRevenue, recentOrders, topOrders }
    return data
  } catch (error) {
    console.log(error)
  }
}