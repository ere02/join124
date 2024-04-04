// let todos = [{
//     'id': 0,
//     'title': 'Putzen',
//     'category': 'toDo'
// }, {
//     'id': 1,
//     'title': 'Kochen',
//     'category': 'inProgress'
// }, {
//     'id': 2,
//     'title': 'Einkaufen',
//     'category': 'awaitFeedback'
// }, {
//     'id': 3,
//     'title': 'Trainieren',
//     'category': 'done'
// }];

// let currentDraggedElement;


// function updateHTML() {
//     let toDo = todos.filter(t => t['category'] == 'toDo');
//     let inProgress = todos.filter(t => t['category'] == 'inProgress');
//     let awaitFeedback = todos.filter(t => t['category'] == 'awaitFeedback');
//     let done = todos.filter(t => t['category'] == 'done');

//     document.getElementById('toDo').innerHTML = '';
//     for (let index = 0; index < toDo.length; index++) {
//         const element = toDo[index];
//         document.getElementById('toDo').innerHTML += generateTodoHTML(element);
//     }

//     document.getElementById('inProgress').innerHTML = '';
//     for (let index = 0; index < inProgress.length; index++) {
//         const element = inProgress[index];
//         document.getElementById('inProgress').innerHTML += generateTodoHTML(element);
//     }

//     document.getElementById('awaitFeedback').innerHTML = '';
//     for (let index = 0; index < awaitFeedback.length; index++) {
//         const element = awaitFeedback[index];
//         document.getElementById('awaitFeedback').innerHTML += generateTodoHTML(element);
//     }

//     document.getElementById('done').innerHTML = '';
//     for (let index = 0; index < done.length; index++) {
//         const element = done[index];
//         document.getElementById('done').innerHTML += generateTodoHTML(element);
//     }
// }


// function startDragging(id) {
//     currentDraggedElement = id;
// }

// function generateTodoHTML(element) {
//     return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['title']}</div>`;
// }

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function moveTo(category) {
//     console.log("Moving element to category:", category);
//     console.log("Current dragged element:", currentDraggedElement);

//     todos[currentDraggedElement]['category'] = category;
//     updateHTML();
// }

// function highlight(id) {
//     document.getElementById(id).classList.add('drag-area-highlight');
// }

// function removeHighlight(id) {
//     document.getElementById(id).classList.remove('drag-area-highlight');
// }
