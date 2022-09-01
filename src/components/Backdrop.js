import './backdrop.css'

const Backdrop = ({showRules}) => {
    return (
        <div className='backdrop' onClick={()=>showRules()}>
            <img src={process.env.PUBLIC_URL + '/images/image-rules-bonus.svg'} alt='game rules' />
        </div>
    );
};

export default Backdrop;