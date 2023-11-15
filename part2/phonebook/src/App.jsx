import { useEffect, useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personsServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [msgNotification, setMsgNotification] = useState({text: null, type: 'succesful'})

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
      <Notification message={msgNotification} setMsgNotification={setMsgNotification} />
      <Filter persons={persons} setPersons={setPersons} />
      <h3>Add new person</h3>
      <NewPersonForm persons={persons} setPersons={setPersons} setMsgNotification={setMsgNotification} />
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} setMsgNotification={setMsgNotification} />
    </div>
  )
}

export default App
