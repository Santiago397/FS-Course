import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const allResults = good + neutral + bad;
  const positiveResults = (good * 100) / allResults;

  if (good || neutral || bad) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All results" value={allResults} />
            <StatisticLine text="Average" value={0} />
            <StatisticLine text="Positive results" value={positiveResults} />
          </tbody>
        </table>
      </>
    );
  }
  return <h3>No feedback given</h3>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBadFeedback = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h2>Give us a feedback!</h2>
      <Button handleClick={handleGoodFeedback} text="Good" />
      <Button handleClick={handleNeutralFeedback} text="Neutral" />
      <Button handleClick={handleBadFeedback} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

/**
 
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    console.log('left before', left)
    setLeft(updatedLeft)
    console.log('left after', left)
    setTotal(updatedLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const handleLeftClick1 = () => setClicks({ ...clicks, left: clicks.left + 1 })
  const handleRightClick1 = () => setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </>
  );

 */
