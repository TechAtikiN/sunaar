'use server'

// named imports
import { BASE_URL } from '@/constants/urls'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function register(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')     
  const PasswordConfirm = formData.get('PasswordConfirm')

  try {
    const response = await fetch(`${BASE_URL}api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, email, password, PasswordConfirm
    })
  })

    const data = await response.json()
    if (data.status === 'fail') {
      return new Error(data.message)
    } else {
      return data
    }
  } catch (error) {
      console.error(error)
  }
}

export async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')     

  try {
    const response = await fetch(`${BASE_URL}api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email, password
    }),
      cache: 'no-store'
  })

    const data = await response.json()
    if (data.status === 'fail') {
      return new Error(data.message)
    } else {
      const { token } = data
      cookies().set('token', token)
      return token
    }
  } catch (error) {
      console.error(error)
  }
}

export async function authenticate() {
  const token = cookies().get('token')

  try {
    const response = await fetch(`${BASE_URL}api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.value}`
      }
    })
    const { status } = await response.json()
    return status
  } catch (error) {
    console.error(error)
  }
}
