import './App.css'
// import Case from './components/case'
import Display from './components/Display'
import Heading from './components/Heading'
import Keys from './components/Keys'
// import style from "./App.module.css"

function App() {

  return (
    <>
      <Heading></Heading>
      <div id='calculator' className='calc'>
        <Display></Display>
        <Keys></Keys>
      </div>
    </>
  )
}

export default App
