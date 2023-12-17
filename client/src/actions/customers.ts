import axios from 'axios'

export async function getAllCustomers() {
  try {
    const response = await axios.get('http://localhost:8000/api/customers')
    const customers = response.data
    console.log('Fetching Customers', customers)
    return customers
  } catch (error) {
    console.log(error);
  }
}