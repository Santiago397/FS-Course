import { useEffect, useState } from "react"

const ListCountry = ({ countries, setCountry, search }) => {

  const [filterCountries, setFilterCountries] = useState([])

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })
    setFilterCountries([...result])
  }, [search])

  return (
    <>
      {
        filterCountries.length > 0 && filterCountries.length < 10
        ? filterCountries.map(country => {
          return <li key={country.cca2}>
            {country.name.common}
            <button onClick={() => setCountry(country)}>
              Show
            </button>
            </li>
        })
        : 'Too many matches, specify another filter'
      }
    </>
  )
}

export default ListCountry
