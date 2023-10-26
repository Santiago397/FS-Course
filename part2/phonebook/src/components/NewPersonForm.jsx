import { useState } from "react";

const NewPersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNewPhone = (e) => {
    setNewPhone(e.target.value)
  }

  const handleAddPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      id: Math.floor(Math.random()),
      name: newName,
      phone: newPhone
    }

    persons.find(person => person.name === newPerson.name)
    ? alert(`${newName} is already added to phonebook`)
    : setPersons([...persons, newPerson])

    setNewName('')
    setNewPhone('')
  }

  return (
    <>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handleNewPhone} />
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
