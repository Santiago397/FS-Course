import { useEffect, useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personsServices from './services/persons'

const App = () => {
  
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsServices
      .getAll()
      .then(initialValues => {
        setPersons(initialValues)
      })
  }, [])
  
  return (
    <div>
      <h1>Phonebook app</h1>
      <Filter persons={persons} />
      <h3>Add new person</h3>
      <NewPersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  )
}

export default App
