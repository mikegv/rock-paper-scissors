import './imageIcon.css'
const ImageIcon = ({color, symbol, imageClickHandler, result}) => {
    const borderStyle={
        border: `solid 15px ${color}`

    }
    let classes = result ? 'imageIcon' : 'imageIcon selectingHand';
    return (
        <div className={classes} style={borderStyle} onClick={()=>imageClickHandler(symbol, color)}>
        <img src={process.env.PUBLIC_URL + `/images/icon-${symbol}.svg`}  alt={`hand move ${symbol}`} />
        </div>
    );
};

export default ImageIcon;