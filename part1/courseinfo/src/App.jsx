import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <Header name={course} />

      <Content parts={parts} exercises={exercises} />

      <Total allExercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
