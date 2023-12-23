import { useUserStore } from "@/store/useUserStore"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleCurrencyFormat = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(value)
}

export const getUser = () => {
  if (typeof window !== 'undefined') {
  // Perform localStorage action
    const user = localStorage.getItem('token')
    if (user) {
    return JSON.parse(user)
  }
  return null
}}