import { useState } from "react";
import personsServices from '../services/persons'


const NewPersonForm = ({ persons, setPersons }) => {
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

  }
    
  const confirmUpdate = (id, newPerson) => {
    if (confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
      personsServices
        .update(id, newPerson)
        .then(() => {
          personsServices
            .getAll()
            .then(res => setPersons([ ...res ]))
        })
    }
  }

  const createNewPerson = (newPerson) => {
    personsServices
      .create(newPerson)
      .then(personCreated => {
        setPersons([...persons, personCreated])
        setNewName('')
        setNewNumber('')
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
