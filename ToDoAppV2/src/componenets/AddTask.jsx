import styles from "./AddTask.module.css"

const AddTask = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <input className={styles.todoInput} type="text" placeholder="Enter the task"/>
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">Add</button>
        </div>
      </div>
    </>
  )
}

export default AddTask;