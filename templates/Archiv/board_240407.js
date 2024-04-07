let todos = [{
    "id": 0,
    "category": "inTodo",
    "title": "[0] Putzen",
    "description": "nicht nur sauber, sondern rein",
    "priority": "urgent",
    "workers": [4],
    "type": "User Story"
},
{
    "id": 1,
    "title": "[1] Omas über die Straße helfen",
    "category": "inProgress",
    "description": "auch wenn sie nicht wollen",
    "priority": "medium",
    "workers": [1, 2, 3,4],
    "type": "User Story"
   },
{
    "id": 2,
    "title": "[2] Schokolade aufessen",
    "category": "inDone",
    "description": "... super task",
    "priority": "urgent",
    "workers": [1, 2, 3,4],
    "type": "Technical Task"
},
{
   "id": 3,
    "title": "[3] Hirn benutzen",
    "category": "inProgress",
    "description": "morgen vielleicht",
    "priority": "medium",
    "workers": [1, 2, 3],
   "type": "Technical Task"
},
{
    "id": 4,
    "title": "[4] krasse Sachen machen",
    "category": "inDone",
    "description": "die Nachbarn gegrüßt",
    "priority": "low",
    "workers": [1, 2, 3],
    "type": "User Story"
},
{
    "id": 5,
    "title": "[5] Schäfchen zählen",
    "category": "inProgress",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3],
    "type": "Technical Task"
    },
{
    "id": 6,
    "title": "[6] Schäfchen zählen",
    "category": "inDone",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3],
    "type": "User Story"
},
{
    "id":7,
    "title": "[7] Schäfchen zählen",
    "category": "inDone",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "medium",
    "workers": [1, 2, 3],
    "type": "Technical Task"
},
{
    "id":8,
    "title": "[8] Schäfchen zählen",
    "category": "awaitFeedback",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3,4],
    "type": "Technical Task"
},
{
    "id": 9,
    "title": "[9] Schäfchen zählen",
    "category": "inProgress",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3,4],
    "type": "User Story"
}];

const loadUsers = "../users_storage.js";
//const loadTasks = "../tasks_storage.js";
let currentUser;
let currentTasks;


async function loadAllTasks() {
   let userResponse = await fetch(loadUsers).catch(errorFunction);
   //let taskResponse = await fetch(todos).catch(errorFunction);
   currentUser = await userResponse.json();
   //currentTasks = await taskResponse.json();

    console.log("loaded User:", currentUser);
    console.log("loaded Tasks:", currentTasks);

}

function errorFunction() {
    console.log("Fehler aufgetreten");
  }

let currentDraggedElement;

async function updateHTML() {
    await loadAllTasks();
  //  await loadTodoLane();
    let toDo = todos.filter(t => t['category'] == 'inTodo');
    let inProgress = todos.filter(t => t['category'] == 'inProgress');
    let awaitFeedback = todos.filter(t => t['category'] == 'awaitFeedback');
    let done = todos.filter(t => t['category'] == 'inDone');

    let laneTodo = document.getElementById('inTodo');
    laneTodo.innerHTML = '';
    for (let index = 0; index < toDo.length; index++) {
        const element = toDo[index];
        laneTodo.innerHTML += generateTodoHTML(element);
    }

    let laneProgress = document.getElementById('inProgress');
    laneProgress.innerHTML = '';
    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        laneProgress.innerHTML += generateTodoHTML(element);
    }

    let laneAwait = document.getElementById('awaitFeedback');
    laneAwait.innerHTML = '';
    for (let index = 0; index < awaitFeedback.length; index++) {
        const element = awaitFeedback[index];
        laneAwait.innerHTML += generateTodoHTML(element);
    }

    let laneDone = document.getElementById('inDone');
    laneDone.innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        laneDone.innerHTML += generateTodoHTML(element);
    }
}

async function loadTodoLane(){
 let todoTasks = currentUser[1].items.todos;
 let laneTodo = document.getElementById('inTodo');
for(let i = 0; i < todoTasks.length; i++){
    let todoId = currentTasks.todoTasks;
    laneTodo.innerHTML += generateTodoHTML(todoId);
}
}

function fillCard(id){
 let laneTodo = document.getElementById('inTodo');
 laneTodo.innerHTML = '';
 for (let i = 0; i < toDo.length; i++) {
     const element = toDo[i];
     laneTodo.innerHTML += generateTodoHTML(element);
 }

}

function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="task">${element['title']} </div>`;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    console.log("Moving element to category:", category);
    console.log("Current dragged element:", currentDraggedElement);

    todos[currentDraggedElement]['category'] = category;
    removeHighlight(category); // Hintergrundhervorhebung entfernen
    updateHTML();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

function renderBoard() {

    return /*html*/ `
    
    <div class="main-container">
        <div class="main-container-body">

            <div class="board-main-container">
                <div class="board-headline">
                    <div class="board-headline-button">
                        <h1>Board</h1>
                        <!-- <span class="board-headline-text h1">Board</span> -->
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
                        <button class="board-button-addTask" onclick=""><span class="board-text-addTask">Add
                                task</span><img src="../assets/svg/add-white.svg" alt=""></button>
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

