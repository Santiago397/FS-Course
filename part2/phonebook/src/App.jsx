import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  
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
