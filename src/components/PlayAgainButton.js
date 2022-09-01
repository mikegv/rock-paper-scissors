import './playAgainButton.css'

const PlayAgainButton = ({playAgain}) => {
    return (
        <button className='playAgainButton' onClick={()=>playAgain()}>Play Again</button>
    );
};

export default PlayAgainButton;