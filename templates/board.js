

const title = allTasks.map(item => item.title);
const description = allTasks.map(item => item.description);
const category = allTasks.map(item => item.category);
const id = allTasks.map(item => item.id);
let toDo = allTasks.filter(t => t['category'] == 'inTodo');
let inProgress = allTasks.filter(t => t['category'] == 'inProgress');
let awaitFeedback = allTasks.filter(t => t['category'] == 'awaitFeedback');
let done = allTasks.filter(t => t['category'] == 'inDone');

let currentUser = 1;
let currentTasks;

async function goToBoardHTML() {
    window.location.href = '../subpages/board.html';
}

async function startBoard(id) {
    await includeHTML();
    allNavButton(id);
    board.classList.remove("displaynone");
    board.innerHTML = renderBoard();
    updateBoardHTML()
}
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

function startApp() {
    updateBoardHTML();
    addSearchEventListener();
}

/**
 * The draggable Objects for all lanes are handled here
 */
async function updateBoardHTML() {

    // let toDo = allTasks.filter(t => t['category'] == 'inTodo');
    // let inProgress = allTasks.filter(t => t['category'] == 'inProgress');
    // let awaitFeedback = allTasks.filter(t => t['category'] == 'awaitFeedback');
    // let done = allTasks.filter(t => t['category'] == 'inDone');
    const lanes = ['inTodo', 'inProgress', 'awaitFeedback', 'inDone'];

    let laneTodo = document.getElementById('inTodo');
    laneTodo.innerHTML = renderEmptyLane();
    if (toDo.length !== 0) {
        laneTodo.innerHTML = '';
        for (let index = 0; index < toDo.length; index++) {
            const element = toDo[index];
            const taskElement = await renderTaskHTML(element);
            const taskDiv = document.createElement('div');
            taskDiv.innerHTML = taskElement;
            taskDiv.addEventListener('click', () => openTaskPopup(element));
            laneTodo.appendChild(taskDiv);
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

    for (let lane of lanes) {
        let tasksInLane = allTasks.filter(t => t.category === lane);
        let laneElement = document.getElementById(lane);
        laneElement.innerHTML = renderEmptyLane();
    
        if (tasksInLane.length !== 0) {
            laneElement.innerHTML = '';
            for (let task of tasksInLane) {
                const taskElement = await renderTaskHTML(task);
                const taskDiv = document.createElement('div');
                taskDiv.innerHTML = taskElement;
    
                // Hier setzen Sie die aktuelle Aufgabe für den Klick-Eventlistener
                let clickedTask = task;
    
                taskDiv.addEventListener('click', () => openTaskPopup(clickedTask));
                laneElement.appendChild(taskDiv);
                await backgroundType(task);
            }
        }
    }
    
    searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', search);
    } else {
        console.error('Das Suchfeld wurde nicht gefunden.');
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

// function generateTodoHTML(element) {
//     return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="task">${element['title']} </div>`;
// }

// function startDragging(id) {
//     currentDraggedElement = id;
// }

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="task">${element['title']} </div>`;
}

async function renderTaskHTML(element) {

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

    allTasks[currentDraggedElement]['category'] = category;
    removeHighlight(category);
    updateBoardHTML();
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
                            <input id="search" class="board-input-search" type="search" onkeyup="" placeholder="Find Task"
                                autocomplete="off">
                            <div class="board-input-search-icons">
                                <img class="board-input-search-icons" onclick="renderAddTaskCard()" src="../assets/svg/search.svg" alt="">
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
                            <img class="board-add-task-add-icon" onclick="renderAddTaskCard()" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="inTodo" ondrop="moveTo('inTodo')"
                            ondragleave="removeHighlight('inTodo')" ondragover="allowDrop(event); highlight('inTodo')">
                        </div>
                    </div>

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">In progress</span>
                            <img class="board-add-task-add-icon" onclick="renderAddTaskCard()" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="inProgress" ondrop="moveTo('inProgress')"
                            ondragleave="removeHighlight('inProgress')" ondragover="allowDrop(event); highlight('inProgress')">
                        </div>
                    </div>

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">Await feedback</span>
                            <img class="board-add-task-add-icon" onclick="renderAddTaskCard()" src="../assets/svg/add.svg" alt="">
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
            <div id="high_priority" class="add-task-prio-high" onclick="changePriority('high')">
                Urgent
                <img id="urgent_icon" src="../assets/svg/urgent.svg" class="prioSVG">
            </div>

            <div id="medium_priority" class="add-task-prio-medium add-task-prio-medium-pressed-button" onclick="changePriority('medium')">
                Medium
                <img id="medium_icon" src="../assets/svg/medium_white.svg" class="prioSVG">
            </div>

            <div id="low_priority" class="add-task-prio-low" onclick="changePriority('low')">
                Low
                <img id="low_icon" src="../assets/svg/low.svg" class="prioSVG">
            </div>
        </div>

    <h3 class="h3">Category<span class="required-star">*</span></h3>

    <label for="category" class="add-task-label bgC-white" id="">
          <!-- <div class="add-task-category-input" id="" onclick="">Select task category</div> -->
       
        <select required class="add-task-category-input">
              <option value="">Select task category</option>      
              <option value="Technical Task">Technical Task</option>
              <option value="User Story">User Story</option>
        </select>  
    </label>

<!-- 
    <label for="category" class="add-task-label bgC-white" id="">
      <div class="add-task-category-input" id="" onclick="">User Story</div>
    </label>

    <div class="d-none" id="">
      <div class="addTaskCategorySelect" onclick="">Technical Task</div>
      <div class="addTaskCategorySelect" onclick="">User Story</div>
    </div> -->

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
        <button onclick="createTask()" class="add-task-add-button d-flex-ai-center-jc-center" id="">Create Task<img
            src="../assets/svg/check_white.svg"></button>
      </div>

    </div>
  </div>

  <div class="add-task-popup-container d-none" id="">
    <div class="add-task-popup-reg" id="">Task added to Board <img src="../assets/svg/canban-1.svg" alt="board picture"></div>
  </div>
</div>
</div>
</div>
</div>`

    document.body.appendChild(overlay);
    // renderAddTaskCard(overlay);
}

function renderAddTaskCard() {
    document.getElementById('container').classList.add('add-task-popup');
    document.getElementById('overlay-container').classList.add('d-none');

    openAddTaskCard();

    const createTaskButton = document.querySelector('.add-task-add-button');
    createTaskButton.addEventListener('click', createTask);
}

function closeAddTaskCard() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
        document.getElementById('container').classList.remove('add-task-popup');
        document.getElementById('overlay-container').classList.remove('d-none');
    }
}

async function search(e) {
    const tasks = document.querySelectorAll('.task');
    const searchTerm = e.target.value.trim().toLowerCase();

    // Warte darauf, dass die Task-Elemente vollständig geladen sind
    await new Promise((resolve) => setTimeout(resolve, 0));

    tasks.forEach((task) => {
        const titleElement = task.querySelector('.task-title');
        const descriptionElement = task.querySelector('.task-description');
        const categoryElement = task.querySelector('.task-type');

        // Überprüfen, ob die Elemente vorhanden sind, bevor auf ihre Eigenschaften zugegriffen wird
        if (titleElement && descriptionElement && categoryElement) {
            const title = titleElement.textContent.toLowerCase();
            const description = descriptionElement.textContent.toLowerCase();
            const category = categoryElement.textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        } else {
            console.error('Ein oder mehrere Elemente fehlen.');
        }
    });
}

function addSearchEventListener() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', search);
    } else {
        console.error('Das Suchfeld wurde nicht gefunden.');
    }
}

function changePriority(priority) {
    const highPriority = document.getElementById('high_priority');
    const mediumPriority = document.getElementById('medium_priority');
    const lowPriority = document.getElementById('low_priority');

    // Setze Hintergrundfarbe und Textfarbe basierend auf der ausgewählten Priorität
    if (priority === 'high') {
        highPriority.classList.add('add-task-prio-high-pressed-button');
        highPriority.style.color = 'white';
        mediumPriority.classList.remove('add-task-prio-medium-pressed-button');
        mediumPriority.style.color = 'black';
        lowPriority.classList.remove('add-task-prio-low-pressed-button');
        lowPriority.style.color = 'black';
    } else if (priority === 'medium') {
        mediumPriority.classList.add('add-task-prio-medium-pressed-button');
        mediumPriority.style.color = 'white';
        highPriority.classList.remove('add-task-prio-high-pressed-button');
        highPriority.style.color = 'black';
        lowPriority.classList.remove('add-task-prio-low-pressed-button');
        lowPriority.style.color = 'black';
    } else if (priority === 'low') {
        lowPriority.classList.add('add-task-prio-low-pressed-button');
        lowPriority.style.color = 'white';
        highPriority.classList.remove('add-task-prio-high-pressed-button');
        highPriority.style.color = 'black';
        mediumPriority.classList.remove('add-task-prio-medium-pressed-button');
        mediumPriority.style.color = 'black';
    }

    if (priority === 'high') {
        urgent_icon.src = '../assets/svg/urgent_white.svg';
        medium_icon.src = '../assets/svg/medium.svg';
        low_icon.src = '../assets/svg/low.svg';
    } else if (priority === 'medium') {
        urgent_icon.src = '../assets/svg/urgent.svg';
        medium_icon.src = '../assets/svg/medium_white.svg';
        low_icon.src = '../assets/svg/low.svg';
    } else if (priority === 'low') {
        urgent_icon.src = '../assets/svg/urgent.svg';
        medium_icon.src = '../assets/svg/medium.svg';
        low_icon.src = '../assets/svg/low_white.svg';
    }
}

function createTask() {
    // Lese die Daten aus den Eingabefeldern aus
    const title = document.querySelector('.add-task-title').value;
    const description = document.querySelector('.add-task-description').value;
    const dueDate = document.querySelector('.add-task-due-date').value;
    const priorityElement = document.querySelector('.add-task-prio-high-pressed-button');
    let priority;
    if (priorityElement) {
        priority = 'high';
    } else {
        const mediumPriorityElement = document.querySelector('.add-task-prio-medium-pressed-button');
        if (mediumPriorityElement) {
            priority = 'medium';
        } else {
            priority = 'low';
        }
    }
    const category = document.querySelector('.add-task-category-input').value; // Lese die ausgewählte Kategorie aus

    // Überprüfe, ob die Aufgabe bereits existiert (basierend auf dem Titel)
    const existingTask = allTasks.find(task => task.title === title);
    if (existingTask) {
        // Wenn die Aufgabe bereits existiert, breche ab und zeige eine Meldung an
        // alert('Die Aufgabe existiert bereits.');
        return;
    }

    // Erstelle eine neue Aufgabe
    const newTask = {
        id: allTasks.length, // Neue ID basierend auf der Anzahl der vorhandenen Aufgaben
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        category: 'inTodo', // Setze die Kategorie auf die ausgewählte Kategorie
        workers: [], // Leeres Array für Arbeitskräfte
        type: category // Typ der Aufgabe entspricht der Kategorie
        // Füge weitere Eigenschaften hinzu, wie Assigned to und Subtasks
    };

    // Füge die neue Aufgabe dem allTasks Array hinzu
    allTasks.push(newTask);

    // Aktualisiere das Board, um die neue Aufgabe anzuzeigen
    updateBoardHTML();

    // Hier fügst du den Code für das Popup hinzu
    const popup = document.querySelector('.add-task-popup-container');
    popup.classList.remove('d-none');

    // Setze einen Timer, um das Popup nach 3 Sekunden auszublenden
    setTimeout(() => {
        popup.classList.add('d-none');
        closeAddTaskCard(); // Schließe das Add Task-Popup
    }, 1500);
}

async function openTaskPopup(task) {
    // Prioritätsbild entsprechend der Task-Priorität
    let priorityImage = '';
    if (task.priority === 'urgent') {
        priorityImage = '<img class="prioSVG" src="../assets/svg/urgent.svg" alt="Urgent Priority">';
    } else if (task.priority === 'medium') {
        priorityImage = '<img class="prioSVG" src="../assets/svg/medium.svg" alt="Medium Priority">';
    } else if (task.priority === 'low') {
        priorityImage = '<img class="prioSVG" src="../assets/svg/low.svg" alt="Low Priority">';
    }

    const taskTypeClass = task.type === 'User Story' ? 'bg-userstory' : 'bg-technicaltask';

    // Popup-Inhalt mit dynamisch generiertem Prioritätsbild
    const popupContent = /*html*/ `
        <div class="board-task-detail-main jc-center ai-center d-flex">  
            <div class="task-popup add-task-popup board-task-detail-card d-flex flex-d-col board-task-detail-card-in">
                <div class="m-bottom-32 task-popup-type-close">
                    <div class="task-type ${taskTypeClass} font32">${task.type}</div>
                    <button class="close-button">Close</button>
                </div>
                <h3 class="m-bottom-20">${task.title}</h3>
                <div class="m-bottom-20">${task.description}</div>
                <div class="m-bottom-20">Due Date: ${task.dueDate}</div>
                <div class="m-bottom-20 d-flex ai-center">Priority: ${task.priority} ${priorityImage}</div>
                
                <!-- Weitere Informationen hier einfügen -->
            </div>
        </div>
    `;

    // Overlay erstellen und Inhalt einfügen
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = popupContent;

    // Schließen-Button hinzufügen und Event-Listener setzen
    const closeButton = overlay.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        overlay.remove();
    });

    // Overlay zum Body hinzufügen
    document.body.appendChild(overlay);
}