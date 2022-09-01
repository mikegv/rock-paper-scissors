import './App.css';
import Header from './components/Header';
import GameArea from './components/GameArea';
import { useState, useEffect } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const updateScore = (win) => {
    if(win){
      setScore(prev => prev + 1)
    }else if(score > 0){
      setScore(prev => prev - 1)
    }
  }

  return (
    <div className="App">
      <Header score={score} />
      <GameArea score={score} updateScore={updateScore} />
    </div>
  );
}

export default App;
