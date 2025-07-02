import TaskItem from "./TaskItem";

const TaskItems = ({todoItems}) => {
  return(
    <>
      <div className="items-container" >
        {todoItems.map((item) => (<TaskItem todoName={item.name} todoDate={item.dueDate}></TaskItem>))}
      </div>
    </>
  )
}

export default TaskItems;