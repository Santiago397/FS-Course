import personsServices from '../services/persons'


const Person = ({ person }) => {
  const handleDelete = () => {
    
    if (confirm(`Do you want to delete: ${person.name}`)) {
      personsServices
      .remove(person.id)
    }
    
  }
  return (
    <li key={person.id}>
      {person.name} - {person.number}
      <button onClick={() => handleDelete()}>delete</button>
    </li>
  )
} 

export default Person
