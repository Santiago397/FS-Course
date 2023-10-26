const Person = ({ person }) => {
  return (
    <li key={person.id}>
      {person.name} - {person.phone}
    </li>
  )
} 

export default Person
