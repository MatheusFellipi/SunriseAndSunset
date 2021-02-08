import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.sunrise-sunset.org/json'
})