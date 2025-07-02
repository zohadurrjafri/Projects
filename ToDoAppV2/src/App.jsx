import './App.css'
import AppName from './componenets/AppName'
import AddTask from './componenets/AddTask'
import TaskItems from './componenets/TaskItems'

function App() {

  const todoItems = [
      {
        name: "Buy Milk",
        dueDate: "2345"
      },
      {
        name: "Go to College",
        dueDate: "23452"
      },
      {
        name: "Like",
        dueDate: "4325"
      }
  ]

  return (
    <>
      <AppName></AppName>
      <AddTask></AddTask>
      <TaskItems todoItems={todoItems} ></TaskItems>
    </>
  )
}

export default App
