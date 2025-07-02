import './App.css'
// import Case from './components/case'
import Display from './components/Display'
import Heading from './components/Heading'
import Keys from './components/Keys'

function App() {

  return (
    <>
      <div id='calculator'>
        <Heading></Heading>
        <Display></Display>
        <Keys></Keys>
      </div>
    </>
  )
}

export default App
