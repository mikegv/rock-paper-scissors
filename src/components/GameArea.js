import "./gameArea.css";
import ImageIcon from "./ImageIcon";
import { useState } from 'react'
import Result from "./Result";

const GameArea = () => {
  const [playerHand, setPlayerHand] = useState(null)
  const imageClickHandler = (hand, color) => {
    setPlayerHand([hand, color])
  }
  if(!playerHand){
  return (
    <div className="startScreen">
      <ImageIcon color='red' symbol='rock' imageClickHandler={imageClickHandler} />
      <ImageIcon color='purple' symbol='lizard' imageClickHandler={imageClickHandler} />
      <ImageIcon color='lightblue' symbol='spock' imageClickHandler={imageClickHandler} />
      <ImageIcon color='orange' symbol='scissors' imageClickHandler={imageClickHandler} />
      <ImageIcon color='blue' symbol='paper' imageClickHandler={imageClickHandler} />
    </div>
  );
  }else{
    return(
      <Result playerHand={playerHand} />
    )
  }
};

export default GameArea;
