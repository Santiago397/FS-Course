import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);


  const handleNextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleVoteAnecdote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  const getMostVotedAnecdote = () => {
    const updatedVotes = [...votes]
    const largest = Math.max(...updatedVotes)
    return anecdotes[updatedVotes.findIndex(e => e === largest)]
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]} has <b>{votes[selected]} votes</b>
      </p>
      <Button handleClick={() => handleVoteAnecdote()} text="Vote" />
      <Button handleClick={() => handleNextAnecdote()} text="Next anecdote" />
      <h2>Anecdote with most votes: {votes[0]}</h2>
      <p>{getMostVotedAnecdote()}</p>
    </>
  );
};

export default App;
