import axios from "axios"

const base_url = 'https://api.openweathermap.org/data/3.0/onecall'
const api_key = import.meta.env.VITE_SOME_KEY
const temperature_unit = 'metric'

const getCountryWeather = (lat, lon) => {
  const request = axios
    .get(`${base_url}?lat=${lat}&lon=${lon}&units=${temperature_unit}&appid=${api_key}`)
  return request.then(res => res.data)
}

export default {
  getCountryWeather
}
