import Part from "./Part"

const Content = (props) => {
  const parts = props.parts
  const exercises = props.exercises

  return (
    <>
      <Part name={parts[0]} number={exercises[0]} />
      <Part name={parts[1]} number={exercises[1]} />
      <Part name={parts[2]} number={exercises[2]} />
    </>
  )
}

export default Content
