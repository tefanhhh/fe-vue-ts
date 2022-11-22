import { default as axios } from 'axios'

const BASE_URL = 'https://restcountries.com/v3.1'

export async function query() {
  return axios.get(`${BASE_URL}/all`)
}

export default {
  query,
}
