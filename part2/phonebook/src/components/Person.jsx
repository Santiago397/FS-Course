import personsServices from '../services/persons'


const Person = ({ person, setPersons, setMsgNotification }) => {
  const handleDelete = () => {
    if (confirm(`Do you want to delete: ${person.name}`)) {
      personsServices
        .remove(person.id)
        .then(() => {
          personsServices
            .getAll()
            .then((persons) => {
              setPersons([...persons])
            })
          setMsgNotification({
            text: 'Deleted succesfully!'
          })
        })
    }
    
  }
  return (
    <li>
      {person.name} - {person.number}
      <button onClick={() => handleDelete()}>delete</button>
    </li>
  )
} 

export default Person
