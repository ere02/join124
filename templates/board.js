

const title = allTasks.map(item => item.title);
const description = allTasks.map(item => item.description);
const category = allTasks.map(item => item.category);
const id = allTasks.map(item => item.id);

let currentUser = 1;
let currentTasks;

/**
 * Preparing Show all Task by Loading them
 */
async function loadAllTasks() {
    //  let userResponse = await fetch(loadUsers).catch(errorFunction);
    let taskResponse = await fetch(allTasks).catch(errorFunction);
    // currentUser = await userResponse.json();
    let todos = await taskResponse.json();

    console.log("loaded Tasks:", todos);
}
/**
 * Giving Feedback by Error
 */
function errorFunction() {
    console.log("Fehler aufgetreten");
}

let currentDraggedElement;

/**
 * The draggable Objects for all lanes are handled here
 */
async function updateBoardHTML() {

    let toDo = allTasks.filter(t => t['category'] == 'inTodo');
    let inProgress = allTasks.filter(t => t['category'] == 'inProgress');
    let awaitFeedback = allTasks.filter(t => t['category'] == 'awaitFeedback');
    let done = allTasks.filter(t => t['category'] == 'inDone');

    let laneTodo = document.getElementById('inTodo');
    laneTodo.innerHTML = renderEmptyLane();
    if (toDo.length !== 0) {
        laneTodo.innerHTML = '';
        for (let index = 0; index < toDo.length; index++) {
            const element = toDo[index];
            laneTodo.innerHTML += await renderTaskHTML(element);
            await backgroundType(element);
        }
    }

    let laneProgress = document.getElementById('inProgress');
    laneProgress.innerHTML = renderEmptyLane();
    if (inProgress.length !== 0) {
        laneProgress.innerHTML = '';
        for (let index = 0; index < inProgress.length; index++) {
            const element = inProgress[index];
            laneProgress.innerHTML += await renderTaskHTML(element);
            await backgroundType(element);
        }
    }

    let laneAwait = document.getElementById('awaitFeedback');
    laneAwait.innerHTML = renderEmptyLane();
    if (awaitFeedback.length !== 0) {
        laneAwait.innerHTML = '';
        for (let index = 0; index < awaitFeedback.length; index++) {
            const element = awaitFeedback[index];
            laneAwait.innerHTML += await renderTaskHTML(element);
            await backgroundType(element);
        }
    }

    let laneDone = document.getElementById('inDone');
    laneDone.innerHTML = renderEmptyLane();
    if (done.length !== 0) {
        laneDone.innerHTML = '';
        for (let index = 0; index < done.length; index++) {
            const element = done[index];
            laneDone.innerHTML += await renderTaskHTML(element);
            await backgroundType(element);
        }
    }
}
/**
 * EMPTY LANE rendering
 */
function renderEmptyLane() {
    return /*html*/ `
    <div class="emptylane"> No tasks yet.</div>
  `
}

/**
 * DRAGGING behavior 
 */
function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="task">${element['title']} </div>`;
}

<<<<<<< HEAD
function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="task">${element['title']} </div>`;
}

async function renderTaskHTML(element) {

=======
async function renderTaskHTML(element) {

>>>>>>> 18c35c24de24467554d7a6f4c15e4e3b8cc4dc8a
    return /*html*/ `
        <div draggable="true" ondragstart="startDragging(${element['id']})" class="task">
            <div id='type${element['id']}' class="task-type">${element['type']}</div>
                <div class="task-text">
                    <div class="task-title bold"> ${element['title']} </div>
                    <div class="task-description text-greyish">${element['description']}</div>
                </div>
            <div class="task-footer">
                <div class="task-worker"></div>
                <div class="task-prio"><img src="../assets/svg/${element['priority']}.svg" class="prioSVG"></div>
            </div>
        </div>
    `;
}
/**
 * Background-Color setting of "Technical Task" and "User story" inside the task
 */
async function backgroundType(element) {

    if (element['type'] == "Technical Task") {
        document.getElementById(`type${element['id']}`).classList.add("bg-technicaltask");
    } else {
        document.getElementById(`type${element['id']}`).classList.add("bg-userstory")
    };
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    console.log("Moving element to category:", category);
    console.log("Current dragged element:", currentDraggedElement);

<<<<<<< HEAD
    todos[currentDraggedElement]['category'] = category;
    removeHighlight(category);
    updateHTML();
=======
    allTasks[currentDraggedElement]['category'] = category;
    removeHighlight(category);
    updateBoardHTML();
>>>>>>> 18c35c24de24467554d7a6f4c15e4e3b8cc4dc8a
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}
/**
 * DESIGN OF the WHOLE BOARD
 */
function renderBoard() {

    return /*html*/ `
    
    <div class="main-container" id="container">
        <div class="main-container-body">

            <div class="board-main-container" id="overlay-container">
                <div class="board-headline">
                    <div class="board-headline-button">
                        <h1>Board</h1>
                        <button class="board-button-addTask-mobile"><img src="../assets/svg/add.svg" alt=""
                                onclick=""></button>
                    </div>
                    <div class="board-headline-container-search-add">
                        <div class="board-input-search-container">
                            <input id="" class="board-input-search" type="search" placeholder="Find Task"
                                autocomplete="off">
                            <div class="board-input-search-icons">
                                <img class="board-input-search-icons" src="../assets/svg/search.svg" alt="">
                            </div>
                        </div>
                        <button id="add_task_button" class="board-button-addTask" onclick="renderAddTaskCard()"><span class="board-text-addTask" >
                            Add task</span><img src="../assets/svg/add-white.svg" alt=""></button>
                    </div>
                </div>
                <div class="board-task-main">

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">To do</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="inTodo" ondrop="moveTo('inTodo')"
                            ondragleave="removeHighlight('inTodo')" ondragover="allowDrop(event); highlight('inTodo')">
                        </div>
                    </div>

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">In progress</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="inProgress" ondrop="moveTo('inProgress')"
                            ondragleave="removeHighlight('inProgress')" ondragover="allowDrop(event); highlight('inProgress')">
                        </div>
                    </div>

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">Await feedback</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="awaitFeedback" ondrop="moveTo('awaitFeedback')"
                            ondragleave="removeHighlight('awaitFeedback')" ondragover="allowDrop(event); highlight('awaitFeedback')">
                        </div>
                    </div>

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">Done</span>
                        </div>
                        <div class="board-task-container drag-area" id="inDone" ondrop="moveTo('inDone')"
                            ondragleave="removeHighlight('inDone')" ondragover="allowDrop(event); highlight('inDone')">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
}
<<<<<<< HEAD

function openAddTaskCard() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlay.innerHTML = /*html*/ `
    <div class="add-task-popup">
    <div id="overlay" class="overlay">
      <div class="add-task-popup">

<div class="add-task-header-container">
  <h1 class="add-task-headline">Add Task</h1>
</div>

<div class="add-task-content d-flex-ai-center-jc-center">
  <div class="add-task-container-left">
    <form>
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
        <img src="../assets/svg/arrow_drop_down-1.svg" onclick="" class="cursor-pointer margin-right"
          id="">
        <img src="../assets/svg/arrow_drop_down-2.svg" onclick="" class="cursor-pointer d-none"
          id="">
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
      <div id="" class="add-task-prio-high-popup" onclick="">
        Urgent
        <img id="" src="../assets/svg/high.svg">
      </div>
      <div id="" class="add-task-prio-medium-popup add-task-prio-medium-pressed-button" onclick="">
        Medium
        <img id="" src="../assets/svg/Medium.svg">
      </div>
      <div id="add_task_prio_low" class="add-task-prio-low-popup" onclick="">
        Low
        <img id="" src="../assets/svg/Low.svg">
      </div>
    </div>

    <h3 class="h3">Category<span class="required-star">*</span></h3>

    <label for="category" class="add-task-label bgC-white" id="">
      <div class="add-task-category-input" id="" onclick="">User Story</div>
    </label>

    <div class="d-none" id="">
      <div class="addTaskCategorySelect" onclick="">Technical Task</div>
      <div class="addTaskCategorySelect" onclick="">User Story</div>
    </div>

    <div class="extra-small d-none" id="">This field is required</div>

    <div class="d-none" id="" onclick=""></div>

    <h3 class="m-top-32 h3">Subtasks</h3>
    <label for="subtaskAddTask" class="add-task-label bgC-white">
      <input type="text" name="subtaskAddTask" class="add-task-title" id="add_task_subtask"
        placeholder="Add new Subtask" autocomplete="off" maxlength="20">
      <img src="../assets/svg/add.svg" class="add-subtask-img cursor-pointer" id="" onclick="">
    </label>

    <div id="outputSubtasks" class="outputSubtaskClass"></div>

    <div class="add-task-bottom-container">
      <div class="add-task-required-info-bottom">* This field is required</div>
      <div class="add-task-buttons-container">
        <button type="reset" class="add-task-clear-button-popup d-flex-ai-center-jc-center" onclick="closeAddTaskCard()">Cancel</button>
        <button class="add-task-add-button d-flex-ai-center-jc-center" id="">Create Task<img
            src="../assets/svg/check_white.svg"></button>
      </div>

    </div>
  </div>

  <div class="add-task-popup-container d-none" id="">
    <div class="add-task-popup-reg" id="">Task added to Board <img src="" alt="board picture"></div>
  </div>
</div>
</div>
</div>
</div>`

document.body.appendChild(overlay);
    // renderAddTaskCard(overlay);
}

function renderAddTaskCard(){
    document.getElementById('container').classList.add('add-task-popup');
    document.getElementById('overlay-container').classList.add('d-none');

    openAddTaskCard();

}

function closeAddTaskCard() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
        document.getElementById('container').classList.remove('add-task-popup');
        document.getElementById('overlay-container').classList.remove('d-none');
    }
}
=======
>>>>>>> 18c35c24de24467554d7a6f4c15e4e3b8cc4dc8a

