import { useState } from "react"
import weatherServices from "../services/weather"
import { useEffect } from "react"
import DetailCapital from "./DetailCapital"

const DetailCountry = ({ country }) => {
  const [weatherDetail, setWeatherDetail] = useState()
  const languages = Object.values(country.languages)
  const capital = {
    name: country.capital[0],
    info: {
      lat: country.capitalInfo.latlng[0],
      lon: country.capitalInfo.latlng[1]
    }
  }

  useEffect(() => {
    if (country) {
      weatherServices
        .getCountryWeather(capital.info.lat, capital.info.lon)
        .then(res => setWeatherDetail(res.current))
    }
  }, [country])

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <p>Languages:</p>
      <ul>
        {
          languages.map(lang => {
            return <li key={lang}>{lang}</li>
          })
        }
      </ul>
      <p>Official Flag:</p>
      <img src={country.flags.svg} width={300} />
      <h2>Weather in {capital.name}</h2>
      {
        weatherDetail
        ? <DetailCapital weather={weatherDetail} />
        : null
      }
    </>
  )
}

export default DetailCountry
