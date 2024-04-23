import type { ICurrency } from '@/types/currency'
import axios from 'axios'

export async function getCurrencyValue(
  from: string,
  to: string,
): Promise<ICurrency> {
  const response = await axios.get(
    'https://api.freecurrencyapi.com/v1/latest',
    {
      params: {
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        base_currency: from,
        currencies: to,
      },
    },
  )
  return response.data.data
}
