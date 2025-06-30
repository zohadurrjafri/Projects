function TaskItem1() {

  let taskName = 'Buy Milk';
  let taskDate = '22/04/2024';

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

export default TaskItem1;