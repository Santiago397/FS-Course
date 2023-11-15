import { useState } from "react";
import personsServices from '../services/persons'
import Notification from "./Notification";


const NewPersonForm = ({ persons, setPersons, setMsgNotification }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleAddPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const personDuplicated = persons.find(person => person.name === newPerson.name)

    personDuplicated
    ? confirmUpdate(personDuplicated.id, newPerson)
    : createNewPerson(newPerson)

    setNewName('')
    setNewNumber('')

  }
    
  const confirmUpdate = (id, newPerson) => {
    if (confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`) && id) {
      personsServices
        .update(id, newPerson)
        .then(() => {
          personsServices
            .getAll()
            .then(res => setPersons([ ...res ]))
            .then(() => {
              setMsgNotification({
                text: `${newPerson.name}'s number was updated!`,
                type: 'succesful'
              })
              setTimeout(() => {
                setMsgNotification({
                  text: null
                })
              }, 5000)
            })
        })
        .catch(() => {
          setMsgNotification({
            text: `Information of '${newPerson.name}' has already been removed from server`,
            type: 'error'
          })
          setTimeout(() => {
            setMsgNotification({
              text: null
            })
          }, 5000)
        })
    }
  }

  const createNewPerson = (newPerson) => {
    personsServices
      .create(newPerson)
      .then(() => {
        personsServices
          .getAll()
          .then((persons) => {
            setPersons([...persons])
          })
      })
      .then(() => {
        setMsgNotification({
          text: `${newPerson.name} number was added!`,
          type: 'succesful'
        })
      })
      .catch(({ response }) => {
        setMsgNotification({
          text: response.data.error,
          type: 'error'
        })
      })
  }

  return (
    <>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button onClick={handleAddPerson} type="submit">
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPersonForm;
