function TaskItem2() {

  let taskName = 'Go to college';
  let taskDate = '07/01/2025';

  return (
    <div>
      <div class="row row-two">
          <div class="col-6">
            {taskName}
          </div>
          <div class="col-4">
            {taskDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
    </div>
  )
}

export default TaskItem2;