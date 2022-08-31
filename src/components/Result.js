import ImageIcon from "./ImageIcon";
import { useState, useEffect } from 'react'

const Result = ({playerHand}) => {
    const hands = [
                    {'rock': 'red'},
                    {'lizard': 'purple'},
                    {'spock': 'lightblue'},
                    {'scissors': 'orange'},
                    {'paper': 'blue'}
                    ]
    const [cpu, setCpu] = useState(null)      
      
    useEffect(()=>{
     let timer = setTimeout(()=>{

      let rand = Math.floor(Math.random() * 5);

      setCpu(rand)
      
     },2000) 
     return ()=> {clearTimeout(timer)}
    },[])
    let key 
    let value
    if(cpu !== null){
    key = Object.keys(hands[cpu])[0]
    
    value = hands[cpu][key]
    console.log(key, value)
    }
    
    return (
        <div className='resultScreen'>
        <ImageIcon color={playerHand[1]} symbol={playerHand[0]} result='true' />
        {
          cpu !== null && <ImageIcon color={value} symbol={key} result='true' /> 
        }  
      </div>
    );
};

export default Result;