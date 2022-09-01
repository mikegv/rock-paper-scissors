import ScoreArea from './ScoreArea'
import './header.css'

const Header = ({score}) => {
    return (
        <div className='header'>
            <img src={process.env.PUBLIC_URL + '/images/logo-bonus.svg'} alt='title of game' />
            <ScoreArea score={score} />
        </div>
    );
};

export default Header;