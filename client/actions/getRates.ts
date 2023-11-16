'use server'

const METAL_RATES_BASE_URL = `https://www.goldapi.io/api/`

const DOLLAR_CONVERSION_BASE_URL = `https://api.metalpriceapi.com/v1/latest`

export async function getRates() {

  const response = await fetch(`${DOLLAR_CONVERSION_BASE_URL}?api_key=${process.env.DOLLAR_CONVERSION_API_KEY}&base=INR&currencies=USD`)

  let { rates: { USD: usdRate }} = await response.json()
  usdRate = 1/Number(usdRate)
  
  const date = new Date()
  const formattedDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() - 1}`
  
  const GOLD = 'XAU'
  const SILVER = 'XAG'

  const fetchRates = async (metal: string) => {
    const response = await fetch(`${METAL_RATES_BASE_URL}/${metal}/USD/${formattedDate}`, {
      headers: {
        'x-access-token': process.env.GOLD_PRICE_API_KEY?.toString() || '',
        'Content-Type': 'application/json'
      }
    })

    let { price } = await response.json()
    price = ((Number(price) * usdRate) / 2.8).toFixed(2)
    
    return price
  }

  // const gold = await fetchRates(GOLD)
  // const silver = await fetchRates(SILVER)
  
  // return [ 
  //   {
  //     name: 'Gold',
  //     price: gold
  //   },
  //   {
  //     name: 'Silver',
  //     price: silver
  //   }
  //  ]
}