
async function goToAddTaskHTML() {
  window.location.href = '../subpages/add_task.html';
}

async function startAddTask(id) {
  await includeHTML();
  addtask.classList.remove("displaynone");
  addtask.innerHTML = renderAddTask();
  allNavButton(id);
}

function renderAddTask() {
  generateHTMLaddTask();
}

function resetForm() {
  // Formular zurücksetzen
  document.getElementById("newTask").reset();

  // Due Date zurücksetzen
  document.querySelector('.add-task-due-date').value = '';

  // Subtasks zurücksetzen
  document.getElementById('outputSubtasks').innerHTML = '';

  // Category zurücksetzen
  document.querySelector('.add-task-category-input').selectedIndex = 0;
}


function validateForm() {
  // Lese die Werte der erforderlichen Felder aus
  const title = document.querySelector('.add-task-title').value;
  const dueDate = document.querySelector('.add-task-due-date').value;
  const category = document.querySelector('.add-task-category-input').value;

  // Überprüfe, ob die erforderlichen Felder ausgefüllt sind
  const isTitleValid = title.trim() !== ''; // Überprüfe, ob der Titel nicht leer ist
  const isDueDateValid = dueDate.trim() !== ''; // Überprüfe, ob das Fälligkeitsdatum nicht leer ist
  const isCategoryValid = category.trim() !== ''; // Überprüfe, ob die Kategorie ausgewählt wurde

  // Gib zurück, ob alle erforderlichen Felder ausgefüllt sind
  return isTitleValid && isDueDateValid && isCategoryValid;
}

function createFirstTask() {

  if (!validateForm()) {
      // Wenn das Formular nicht gültig ist, zeige eine Fehlermeldung an oder führe keine Aktion aus
      alert('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
  }
  // Lese die Daten aus den Eingabefeldern aus
  const title = document.querySelector('.add-task-title').value;
  const description = document.querySelector('.add-task-description').value;
  const dueDate = document.querySelector('.add-task-due-date').value;
  const priorityElement = document.querySelector('.add-task-prio-high-pressed-button');
  let priority;
  if (priorityElement) {
      priority = 'urgent';
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
      type: category, // Typ der Aufgabe entspricht der Kategorie
      subtasks: []
      // Füge weitere Eigenschaften hinzu, wie Assigned to
  };

  // Füge die neue Aufgabe dem allTasks Array hinzu
  allTasks.push(newTask);
// setItem hier rein 
  // Hier fügst du den Code für das Popup hinzu
  const popup = document.querySelector('.add-task-popup-container');
  popup.classList.remove('d-none');

  // Setze einen Timer, um das Popup nach 3 Sekunden auszublenden
  setTimeout(() => {
      popup.classList.add('d-none');
  }, 1500);

  return newTask.id;
}
