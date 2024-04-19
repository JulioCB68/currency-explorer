import axios from 'axios'

export async function getConutries(): Promise<ICountry[]> {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  return response.data
}
