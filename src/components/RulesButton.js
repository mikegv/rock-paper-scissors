import './rulesButton.css'
import { useState } from 'react'

const RulesButton = ({showRules}) => {
    return (
        <button className='rulesButton' onClick={()=>showRules()}>Rules</button>
    );
};

export default RulesButton;