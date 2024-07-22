import { useState } from "react";

function App() {
  
  let [counter,setCounter]= useState(0)

  // let counter = 0;

  const addValue = ()=>{
    if(counter<20){
      setCounter(counter+1);
    }
    console.log(counter);
  }
  const subtractValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    console.log(counter);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Couter value:{counter}</h2>

      <button onClick={addValue}>Add Value:{counter}</button>
      <br/>
      <button onClick={subtractValue}>Sub Value:{counter}</button>
    </>
  )
}

export default App
