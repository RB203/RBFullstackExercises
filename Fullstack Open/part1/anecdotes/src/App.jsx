import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const min = 0;
  const max = anecdotes.length;
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(10))
  const [highest, setHighest] = useState({highestPosition:0})

  const randomizer = () =>{
    return Math.floor(Math.random() * (max - min) + min)
  }
  const nextAnecdote = () => {
    const newOne = randomizer()
    setSelected(newOne)
  }

  const updateVotes = () =>{
    const newVotes = [...votes]
    newVotes[selected]+=1
    if(newVotes[selected] >= newVotes[highest.highestPosition]) setHighest({highestPosition:selected})
    setVotes(newVotes)
  }




  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={nextAnecdote}>next anecdote</button>
        <button onClick={updateVotes}>vote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[highest.highestPosition]}</p>
        <p>Votes: {votes[highest.highestPosition]}</p>
      </div>
    </div>
  )
}

export default App
