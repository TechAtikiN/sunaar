// named imports
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

export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return formattedDate
}

export const formatId = (id: string) => {
  const formattedId = id.slice(0, 4) + '...' + id.slice(-4)
  return formattedId
}

export const formatQueryParam = (query: string) => {
  const formattedQuery = query?.split(' ').map(word => word?.charAt(0).toUpperCase() + word?.slice(1)).join(' ')
  return formattedQuery
}