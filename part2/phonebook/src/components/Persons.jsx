import Person from "./Person";

const Persons = ({ persons, setPersons, setMsgNotification }) => {
  return (
    <>
      <ul>
        {
          persons.map(person =>
            <Person
              key={ person.id } 
              person={ person } 
              setPersons={setPersons} 
              setMsgNotification={setMsgNotification} 
            />
          )
        }
      </ul>
    </>
  );
};

export default Persons
