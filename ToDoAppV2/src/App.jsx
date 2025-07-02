import './App.css'
import AppName from './componenets/AppName'
import AddTask from './componenets/AddTask'
import TaskItem from './componenets/TaskItem'

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
  ]

  return (
    <>
      <AppName></AppName>
      <AddTask></AddTask>
      <TaskItem todoName="Buy Milk" todoDate="244" ></TaskItem>
    </>
  )
}

export default App
