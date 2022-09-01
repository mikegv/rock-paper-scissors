import './scoreArea.css'
const ScoreArea = ({score}) => {
    return (
        <div className='scoreArea'>
            <p>Score</p>
            <span>{score}</span>
        </div>
    );
};

export default ScoreArea;