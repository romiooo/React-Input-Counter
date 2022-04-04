import React,{useState} from "react"; 
import './App.css'; 


function App() {
  const[counterValue, setCounterValue] = useState(0);
 
  const decreaseValue = () => {
          if (counterValue > 0){
            setCounterValue(parseInt(counterValue) - 1);
          }
  }
  const increaseValue = () => {
        if (counterValue < 10){
          setCounterValue(parseInt(counterValue) + 1);
        }
  }

  const handleChange =(e) =>{
    console.log(e);
    setCounterValue(e.target.value)
  }
  return (
    <>
    <h1>React Input Counter</h1>
    <div className="App">
      <div className="counter-container">
        <button onClick={decreaseValue}>-</button>
        <input type="number" onChange={(e)=>handleChange(e)} value = {counterValue} max={10} min={0}/>
        <button onClick={increaseValue}>+</button>
      </div>
    </div>
    </>
  );
}

export default App;
