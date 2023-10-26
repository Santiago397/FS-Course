import { useState } from "react"
import Persons from "./Persons"

const Filter = ({ persons }) => {

  const [filter, setFilter] = useState('')

  const [listFiltered, setListFiltered] = useState([])

  const handleFilter = (e) => {
    setFilter(e.target.value)

    if (e.target.value.length > 0) {
      setListFiltered(persons.filter(person => {
        return person.name.toLowerCase().includes(e.target.value.toLowerCase())
      }))
    } else {
      setListFiltered([])
    }
  }

  return (
    <>
      <div>
        <label>Filter by name: </label>
        <input value={filter} onChange={handleFilter} />
      </div>
      <div>
        <Persons persons={listFiltered} />
      </div>
    </>
  )
}

export default Filter
