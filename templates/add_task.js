
function renderAddTask(){
    return /*html*/  `
    <!-- <div class="add-task-container"> -->
    <div class="add-task-header-container">
      <h1 class="add-task-headline" onclick="openAddTaskCard()">Add Task</h1>
    </div>

    <div class="add-task-content d-flex-ai-center-jc-center">
      <div class="add-task-container-left">
        <form id="newTask">
          <h3 class="h3">Title <span class="required-star">*</span></h3>
          <label for="title" class="add-task-label" id="">
            <input type="text" name="title" class="add-task-title" id="" minlength="3" maxlength="20"
              placeholder="Enter a Title" required="">
          </label>

          <div class="extra-small d-none" id="">This field is required</div>

          <h3 class="m-top-32 h3">Description</h3>
          <label for="description" class="add-task-label m-bottom-32">
            <textarea name="description" id="" placeholder="Enter a Description"
              class="add-task-description"></textarea>
          </label>

          <h3 class="h3">Assigned to:</h3>
          <label for="assigned" class="add-task-label bgC-white" onclick="">
            <input type="text" name="assigned" id="" class="add-task-title add-task-assigned-to"
              placeholder="Choose contacts" autocomplete="off" onclick="">
            <img src="../assets/svg/arrow_drop_down-1.svg" onclick="" class="cursor-pointer margin-right" id="">
            <img src="../assets/svg/arrow_drop_down-2.svg" onclick="" class="cursor-pointer d-none" id="">
          </label>

          <div class="m-top-20 assignedToOutput" id="">
            <div class="container initialsOverview">
              <span onclick="">AQ</span>
            </div>
          </div>

          <div class="add-task-required-info">* This field is required</div>

        </form>
      </div>

      <div class="add-task-seperator"></div>

      <div class="add-task-container-right" id="">

        <h3 class="h3">Due date <span class="required-star">*</span></h3>
        <label for="dueDate" class="add-task-label" id="">
          <input type="date" name="dueDate" class="add-task-due-date" id="" required="">
        </label>

        <div class="extra-small d-none" id="">This field is required</div>

        <h3 class="m-top-32 h3">Prio</h3>
        <div class="add-task-prio">
          <div id="" class="add-task-prio-high" onclick="">
            Urgent
            <img id="" src="../assets/svg/high.svg">
          </div>
          <div id="" class="add-task-prio-medium add-task-prio-medium-pressed-button" onclick="">
            Medium
            <img id="" src="../assets/svg/Medium.svg">
          </div>
          <div id="add_task_prio_low" class="add-task-prio-low" onclick="">
            Low
            <img id="" src="../assets/svg/Low.svg">
          </div>
        </div>

        <h3 class="h3">Category<span class="required-star">*</span></h3>

        <label for="category" class="add-task-label bgC-white" id="">
          <!-- <div class="add-task-category-input" id="" onclick="">Select task category</div> -->
       
        <select placeholder="Select task category" class="add-task-category-input">
              <option>Select task category</option>      
              <option>Technical Task</option>
              <option>User Story</option>
            </select>  
        </label>

        <!-- <div class="d-none" id="">
          <div class="addTaskCategorySelect" onclick="">Technical Task</div>
          <div class="addTaskCategorySelect" onclick="">User Story</div>
        </div> -->

        <div class="extra-small d-none" id="">This field is required</div>

        <div class="d-none" id="" onclick=""></div>

        <h3 class="m-top-32 h3">Subtasks</h3>
        <label for="subtaskAddTask" class="add-task-label bgC-white">
          <input type="text" name="subtaskAddTask" class="add-task-title" id="add_task_subtask"
            placeholder="Add new Subtask" autocomplete="off" maxlength="20">
          <!-- <img src="cross.svg" class="add-subtask-img cursor-pointer" onclick="">
          <img src="seperator_subtasks.svg" class="seperator_subtasks"> -->
          <img src="../assets/svg/add.svg" class="add-subtask-img cursor-pointer" id="" onclick="">
        </label>

        <div id="outputSubtasks" class="outputSubtaskClass"></div>

        <div class="add-task-bottom-container">
          <div class="add-task-required-info-bottom">* This field is required</div>
          <div class="add-task-buttons-container">
            <button type="reset" class="add-task-clear-button d-flex-ai-center-jc-center" onclick="resetForm()">Clear</button>
            <button class="add-task-add-button d-flex-ai-center-jc-center" id="">Create Task<img
                src="../assets/svg/check_white.svg"></button>
          </div>

        </div>
      </div>

      <div class="add-task-popup-container d-none" id="">
        <div class="add-task-popup-reg" id="">Task added to Board<img src="" alt="board picture"></div>
      </div>
    </div>
  </div>


`;

}

function resetForm() {
  document.getElementById("newTask").reset();
}