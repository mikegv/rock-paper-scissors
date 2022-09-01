import ImageIcon from "./ImageIcon";
import { useState, useEffect } from "react";
import "./result.css";
import PlayAgainButton from "./PlayAgainButton";

const Result = ({ playerHand, updateScore, reset }) => {
  const hands = [
    { rock: "red" },
    { lizard: "purple" },
    { spock: "lightblue" },
    { scissors: "orange" },
    { paper: "blue" },
  ];
  const [cpu, setCpu] = useState(null);
  const [result, setResult] = useState('');
  let key;
  let value;
  useEffect(() => {
    let timer = setTimeout(() => {
      let rand = Math.floor(Math.random() * 5);
      setCpu(rand);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (cpu === null) {
      return;
    } else {
      let resultTimer = setTimeout(() => {
        let outcome = "win";
        switch (playerHand[0]) {
          case "rock":
            if (cpu === 4 || cpu === 2) {
              outcome = "lose";
            }
            break;
          case "paper":
            if (cpu === 3 || cpu === 1) {
              outcome = "lose";
            }
            break;
          case "scissors":
            if (cpu === 0 || cpu === 2) {
              outcome = "lose";
            }
            break;
          case "lizard":
            if (cpu === 0 || cpu === 3) {
              outcome = "lose";
            }
            break;
          case "spock":
            if (cpu === 1 || cpu === 4) {
              outcome = "lose";
            }
            break;
          default:
            break;
        }
        setResult(`You ${outcome}`);
        if(outcome === 'win'){
          updateScore(true)
        }else{
          updateScore(false)
        }
      }, 2000);
      return () => {
        clearTimeout(resultTimer);
      };
    }
  }, [cpu, playerHand]);
  if (cpu !== null) {
    key = Object.keys(hands[cpu])[0];
    value = hands[cpu][key];
  }
  const playAgain = () => {
    setCpu(null)
    setResult('')
    reset()
  }

  return (
    <div className="resultScreen">
      <div>
        <h3>You Picked</h3>
      <ImageIcon color={playerHand[1]} symbol={playerHand[0]} result="true" />
      </div>
      <div>
      <p>{result}</p>
      {result !== '' && <PlayAgainButton playAgain={playAgain} />}
      </div>
      <div>
        <h3>House Picked</h3>
      {cpu !== null ? (
        <ImageIcon color={value} symbol={key} result="true" />
      ) : (
        <span></span>
      )}
      </div>
    </div>
  );
};

export default Result;
