import "./App.css";
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import { useState, useEffect } from "react";
import RulesButton from "./components/RulesButton";
import Backdrop from "./components/Backdrop";

function App() {
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false)
  const updateScore = (win) => {
    if (win) {
      setScore((prev) => prev + 1);
    } else if (score > 0) {
      setScore((prev) => prev - 1);
    }
  };
  const showRules = () => {
    setShow(!show)
  }
  return (
    <div className="App">
      <Header score={score} />
      <GameArea score={score} updateScore={updateScore} />
      <div className="rules">
        <RulesButton showRules={showRules} />
      </div>
      {show && <Backdrop showRules={showRules} />}
    </div>
  );
}

export default App;
