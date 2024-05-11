// setItems(allTask, id:id, category:catogery)//

let allTasks = [{
    "id": 0,
    "category": "inTodo",
    "title": "[0] Putzen",
    "description": "nicht nur sauber, sondern rein",
    "priority": "urgent",
    "workers": [],
    "type": "User Story",
    "dueDate": "07.07.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 0, "title": "Subtask 1", "completed": false },
        { "id": 1, "title": "Subtask 2", "completed": true }
    ]
},
{
    "id": 1,
    "title": "[1] Omas über die Straße helfen",
    "category": "inProgress",
    "description": "auch wenn sie nicht wollen",
    "priority": "medium",
    "workers": [1, 2, 3, 4],
    "type": "User Story",
    "dueDate": "10.05.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 3, "title": "Subtask 3", "completed": false },
    ]},
{
    "id": 2,
    "title": "[2] Schokolade aufessen",
    "category": "inDone",
    "description": "... super task",
    "priority": "urgent",
    "workers": [1, 2, 3, 4],
    "type": "Technical Task",
    "dueDate": "22.05.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 4, "title": "Subtask 4", "completed": false },
        { "id": 5, "title": "Subtask 5", "completed": true }
    ]},
{
    "id": 3,
    "title": "[3] Hirn benutzen",
    "category": "inProgress",
    "description": "morgen vielleicht",
    "priority": "medium",
    "workers": [1, 2, 3],
    "type": "Technical Task",
    "dueDate": "28.08.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 6, "title": "Subtask 6", "completed": true }
    ]},
{
    "id": 4,
    "title": "[4] krasse Sachen machen",
    "category": "inDone",
    "description": "die Nachbarn gegrüßt",
    "priority": "low",
    "workers": [1, 2, 3],
    "type": "User Story",
    "dueDate": "14.10.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 7, "title": "Subtask 7", "completed": true }
    ]},
{
    "id": 5,
    "title": "[5] Schäfchen zählen",
    "category": "inProgress",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3],
    "type": "Technical Task",
    "dueDate": "01.04.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 8, "title": "Subtask 8", "completed": false },
        { "id": 9, "title": "Subtask 9", "completed": true },
        { "id": 10, "title": "Subtask 10", "completed": true }
    ]},
{
    "id": 6,
    "title": "[6] Schäfchen zählen",
    "category": "inDone",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3],
    "type": "User Story",
    "dueDate": "11.11.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 11, "title": "Subtask 11", "completed": true }
    ]},
{
    "id": 7,
    "title": "[7] Schäfchen zählen",
    "category": "inDone",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "medium",
    "workers": [1, 2, 3],
    "type": "Technical Task",
    "dueDate": "09.05.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 12, "title": "Subtask 12", "completed": true }
    ]},
{
    "id": 8,
    "title": "[8] Schäfchen zählen",
    "category": "awaitFeedback",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 3, 4],
    "type": "Technical Task",
    "dueDate": "11.05.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 13, "title": "Subtask 13", "completed": false },
    ]},
{
    "id": 9,
    "title": "[9] Schäfchen zählen",
    "category": "inProgress",
    "description":
        "Wenn Schäfchen Schäfchen zählen, zählen sie sich dann mit? ",
    "priority": "low",
    "workers": [1, 2, 4, 6],
    "type": "User Story",
    "dueDate": "11.05.2024",
    "assignedTo": "XYZ",
    "subtasks": [
        { "id": 14, "title": "Subtask 13", "completed": false },
        { "id": 15, "title": "Subtask 14", "completed": true }
    ]}];

async function allTasks() {
    // Assuming allTasks is an array of tasks
    const allTasks = JSON.stringify(allTasks);
    /* const response = await setItem('allTasks', JSON.stringify(allTasks)); */
 await setItem('allTasks', JSON.stringify(allTasks)); // Send to server
    if (response.status === 'success') {
      alert('All tasks are stored');
  
      storage();
  
      console.log(allTasks);
    } else {
      alert('Failed to store tasks');
    }
  }
