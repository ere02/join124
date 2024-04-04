let todos = [{
    'id': 0,
    'title': 'Putzen',
    'category': 'toDo'
}, {
    'id': 1,
    'title': 'Kochen',
    'category': 'inProgress'
}, {
    'id': 2,
    'title': 'Einkaufen',
    'category': 'awaitFeedback'
}, {
    'id': 3,
    'title': 'Trainieren',
    'category': 'done'
}];

let currentDraggedElement;

function renderBoard(){
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
                                task</span><img src="../assets/svg/add.svg" alt=""></button>
                    </div>
                </div>
                <div class="board-task-main">

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">To do</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="toDo" ondrop="moveTo('toDo')"
                            ondragleave="removeHighlight('toDo')" ondragover="allowDrop(event); highlight('toDo')">
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
                        <div class="board-task-container drag-area" id="done" ondrop="moveTo('done')"
                            ondragleave="removeHighlight('done')" ondragover="allowDrop(event); highlight('done')">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    <!-- <script src="../js/board.js"></script> -->
    `;
}

function updateHTML() {
    let toDo = todos.filter(t => t['category'] == 'toDo');
    let inProgress = todos.filter(t => t['category'] == 'inProgress');
    let awaitFeedback = todos.filter(t => t['category'] == 'awaitFeedback');
    let done = todos.filter(t => t['category'] == 'done');

    document.getElementById('toDo').innerHTML = '';
    for (let index = 0; index < toDo.length; index++) {
        const element = toDo[index];
        document.getElementById('toDo').innerHTML += generateTodoHTML(element);
    }

    document.getElementById('inProgress').innerHTML = '';
    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(element);
    }

    document.getElementById('awaitFeedback').innerHTML = '';
    for (let index = 0; index < awaitFeedback.length; index++) {
        const element = awaitFeedback[index];
        document.getElementById('awaitFeedback').innerHTML += generateTodoHTML(element);
    }

    document.getElementById('done').innerHTML = '';
    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('done').innerHTML += generateTodoHTML(element);
    }
}


function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['title']}</div>`;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    console.log("Moving element to category:", category);
    console.log("Current dragged element:", currentDraggedElement);

    todos[currentDraggedElement]['category'] = category;
    updateHTML();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

