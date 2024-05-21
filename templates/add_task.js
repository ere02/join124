
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
  return /*html*/  `
    <!-- <div class="add-task-container"> -->
    <div class="add-task-header-container">
      <h1 class="add-task-headline">Add Task</h1>
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
            <button onclick="createFirstTask()" class="add-task-add-button d-flex-ai-center-jc-center" id="">Create Task<img
                src="../assets/svg/check_white.svg"></button>
          </div>

        </div>
      </div>

      <div class="add-task-popup-container d-none" id="">
        <div class="add-task-popup-reg" id="">Task added to Board<img src="../assets/svg/canban-1.svg" alt="board picture"></div>
      </div>
    </div>
  </div>
`;
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
