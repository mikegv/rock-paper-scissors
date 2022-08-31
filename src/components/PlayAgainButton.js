import './playAgainButton.css'

const PlayAgainButton = () => {
    return (
        <button className='playAgainButton' onClick={()=>window.location.reload(false)}>Play Again</button>
    );
};

export default PlayAgainButton;