const Part = (props) => {
  const name = props.name
  const number = props.number

  return (
    <>
      <p> {name} {number} </p>
    </>
  )
}

export default Part
