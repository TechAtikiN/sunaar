'use server'
// named imports
import { BASE_URL } from '@/constants/urls'
import { cookies } from 'next/headers'

export async function getAllProducts(page: number = 1, limit: number = 10, category: string) {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/products?page=${page}&limit=${limit}&category=${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { products } = await response.json()
    return products
  } catch (error) {
    console.log(error)
  }
}

export async function getProductById(id: string) {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { product } = await response.json()
    return product
  } catch (error) {
    console.log(error)
  }
}