import { useEffect, useState } from "react"
import countryServices from "./services/countries"
import SearchCountry from "./components/SearchCountry"
import ListCountry from "./components/ListCountry"
import DetailCountry from "./components/DetailCountry"

const App = () => {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState()

  useEffect(() => {
    countryServices
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])
  
  return (
    <div>
      <h1>Countries app</h1>
      <SearchCountry search={search} setSearch={setSearch}/>
      <ListCountry countries={countries} setCountry={setCountry} search={search} />
      {
        country
        ? <DetailCountry country={country} />
        : null
      }
    </div>
  )
}

export default App
