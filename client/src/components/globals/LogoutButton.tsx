'use client'

export default function LogoutButton() {
  const logout = () => {
    // getting the token from cookies
    const token = document.cookie.split('=')[1]
    // removing the token from cookies
    document.cookie = `token=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    // redirecting to login page
    window.location.href = '/login'
  }
  return (
    <button onClick={() => logout()} className='bg-amber-600 hover:bg-amber-500 text-center px-3 py-2 rounded-md text-white'>Logout</button>
  )
}
