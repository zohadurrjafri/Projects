import { useState } from 'react'
import './App.css'
// import Case from './components/case'
import Display from './components/Display'
import Heading from './components/Heading'
import Keys from './components/Keys'
// import style from "./App.module.css"

function App() {

  const [ calVal, setCalVal ] = useState("")

  const handleButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal(calVal.slice(0,-1));
    }
    else if(buttonText === 'AC'){
      setCalVal("");
    }
    else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newdisplayValue = calVal + buttonText;
      setCalVal(newdisplayValue);
    }
  }

  return (
    <>
      <Heading></Heading>
      <div id='calculator' className='calc'>
        <Display displayValue={calVal} ></Display>
        <Keys handleButtonClick={handleButtonClick} ></Keys>
      </div>
    </>
  )
}

export default App
