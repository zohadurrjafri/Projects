import AppName from "./components/AppName"
import AddTask from "./components/AddTask"
import TaskItem1 from "./components/TaskItem1"
import TaskItem2 from "./components/TaskItem2"
import "./App.css"

function App() {

  return (
    <center className="task-container" >
      <AppName></AppName>
      <AddTask></AddTask>
      <div className="items-container" >
        <TaskItem1></TaskItem1>
        <TaskItem2></TaskItem2>
      </div>
    </center> 
  )
}

export default App
