import React , {useState} from 'react';

const InputCounter = () => {
    const[counterValue, setCounterValue] = useState('');

    const getValue =(e)=>{

        // setCounterValue(val.target.value);
        console.log("e : " , e.target.getValue);
    }
    const increaseValue = () => {
        if (counterValue < 10)
        {
            setCounterValue(counterValue + 1);
        }
    }

    const decreaseValue = () => {
        if (counterValue > 0)
        {
            setCounterValue(counterValue - 1);
        }
    }
    return(
        <div>
            Radhe Radhe bolo chale aayenge bihari ..
            <input type = "number" onChange = {getValue} />
            <button onClick={() => increaseValue()}>+</button>
            <button onClick={() => decreaseValue()}>-</button>
        </div>
    )
}

export default InputCounter;