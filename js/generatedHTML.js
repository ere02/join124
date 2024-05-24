//Signup 
function generateSignUpHTML() {
  
    return /*html*/ `
    <div class="input-container-signUp">
    <div class="signup-wrapper">
        <div class="input-container-signup">
            <div class="headline-wrapper-signup">
                <div onclick="renderLogin()">
                    <img src="/assets/svg/arrow-left-line.svg" alt="" class="arrow-icon" />
                </div>
                <div class="headline-wrapper">
                    <p class="headline">Sign up</p>
                    <hr class="underline" />
                </div>
            </div>
            <div class="inpnput-container">
                <form onsubmit="register(); return false;" class="formRegister">
                    <div class="input-wrapper">
                        <input id="name_reg" class="input-field" type="text" name="name" placeholder="Name" required />
                        <img src="/assets/svg/person.svg" alt="lock icon" class="icon" />
                    </div>
                    <div class="input-wrapper">
                        <input id="email_reg" class="input-field" type="email" name="email" placeholder="email"
                            required />
                        <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
                    </div>
                    <div class="input-wrapper">
                        <input id="password_reg" class="input-field" type="password" minlength="7" name="password"
                            placeholder="Password" required />
                        <img src="/assets/svg/visibility_off.svg" id="lockpic" alt="lock icon" class="icon"
                            onclick="togglePw('password_reg','lockpic')" />
                    </div>
                    <div class="input-wrapper">
                        <input id="confirmPassword_reg" class="input-field" type="password" name="confirmPassword"
                            placeholder="Confirm Password" required />
                        <img src="/assets/svg/visibility_off.svg" id="lockpicConfirm" alt="lock icon" class="icon"
                            onclick="togglePw('confirmPassword_reg','lockpicConfirm')" />
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" name="police" id="agree_reg" />
                        <label for="remember">I accept the <a href="#">Privacy policy</a></label>
                    </div>
                    <div class="submit-container">
                        <button id="registerBtn" class="button" type="submit  ">
                            <h5>Sign up</h5>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="login-footer">
            <span class="legal-notice-link" onclick="callFramePageSinLogin('privacy')">
                Privacy Policy</span><span class="legal-notice-link" onclick="callFramePageSinLogin('legal')">Legal
                notice</span>
        </div>
    </div>`;
}
//LogIn

function loginPage() {
  return /*html*/`
  <div class="input-container-login">
    <div class="headline-wrapper">
        <p class="headline">Log in</p>
        <hr class="underline" />
    </div>
    <form onsubmit="signIn(); return false;" class="formRegister">
      <div class="input-wrapper">
          <input class="input-field" type="text" name="email" id="email" placeholder="E-mail" required />
          <img src="/assets/svg/mail.svg" alt="email icon" class="icon" />
      </div>
      <div class="input-wrapper">
          <input class="input-field" type="password" name="password" id="password" placeholder="Password" required />
          <img src="/assets/svg/lock.svg" alt="lock icon" class="icon" />
      </div>
      <div class="checkbox-container">
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember me</label>
      </div>
      <div class="submit-container" id="submit">
          <button class="button" type="submit">
              <h5>Log in</h5>
          </button>
          <button class="button-guest" type="submit">
              <h5>Guest Log in</h5>
          </button>
      </div>
    </form>
</div>
<div class="login-footer">
    <span class="legal-notice-link" onclick="callFramePageSinLogin('privacy')">
        Privacy Policy</span><span class="legal-notice-link" onclick="callFramePageSinLogin('legal')">Legal
        notice</span>
</div>
</div>`;
}

//success Logo
function generateSuccessLabel() {
  return /*html*/`
  <div id="success" class="showSuccess">
    <h5>You signed Up successfully</h5>
  </div>`;
}

//generate Tasks
function generateHTMLaddTask() {
    return /*html*/  `
    <div class="add-task-header-container">
    <h1 class="add-task-headline">Add Task</h1>
</div>
<div class="add-task-content d-flex-ai-center-jc-center">
    <div class="add-task-container-left">
        <form id="newTask">
            <h3 class="h3">
                Title
                <span class="required-star">*</span>
            </h3>
            <label for="title" class="add-task-label" id="">
                <input
                    type="text"
                    name="title"
                    class="add-task-title"
                    id=""
                    minlength="3"
                    maxlength="20"
                    placeholder="Enter a Title"
                    required=""
                >
            </label>
            <div class="extra-small d-none" id="">This field is required</div>
            <h3 class="m-top-32 h3">Description</h3>
            <label for="description" class="add-task-label m-bottom-32">
                <textarea
                    name="description"
                    id=""
                    placeholder="Enter a Description"
                    class="add-task-description"
                ></textarea>
            </label>
            <h3 class="h3">Assigned to:</h3>
            <label for="assigned" class="add-task-label bgC-white" onclick="">
                <input
                    type="text"
                    name="assigned"
                    id=""
                    class="add-task-title add-task-assigned-to"
                    placeholder="Choose contacts"
                    autocomplete="off"
                    onclick=""
                >
                <img
                    src="../assets/svg/arrow_drop_down-1.svg"
                    onclick=""
                    class="cursor-pointer margin-right"
                    id=""
                >
                <img
                    src="../assets/svg/arrow_drop_down-2.svg"
                    onclick=""
                    class="cursor-pointer d-none"
                    id=""
                >
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
        <h3 class="h3">
            Due date
            <span class="required-star">*</span>
        </h3>
        <label for="dueDate" class="add-task-label" id="">
            <input
                type="date"
                name="dueDate"
                class="add-task-due-date"
                id=""
                required=""
            >
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
        <h3 class="h3">
            Category
            <span class="required-star">*</span>
        </h3>
        <label for="category" class="add-task-label bgC-white" id="">
            <select required class="add-task-category-input">
                <option value="">Select task category</option>
                <option value="Technical Task">Technical Task</option>
                <option value="User Story">User Story</option>
            </select>
        </label>
        <div class="extra-small d-none" id="">This field is required</div>
        <div class="d-none" id="" onclick=""></div>
        <h3 class="m-top-32 h3">Subtasks</h3>
        <label for="subtaskAddTask" class="add-task-label bgC-white">
            <input
                type="text"
                name="subtaskAddTask"
                class="add-task-title"
                id="add_task_subtask"
                placeholder="Add new Subtask"
                autocomplete="off"
                maxlength="20"
            >
            <img
                src="../assets/svg/add.svg"
                class="add-subtask-img cursor-pointer"
                id=""
                onclick=""
            >
        </label>
        <div id="outputSubtasks" class="outputSubtaskClass"></div>
        <div class="add-task-bottom-container">
            <div class="add-task-required-info-bottom">* This field is required</div>
            <div class="add-task-buttons-container">
                <button type="reset" class="add-task-clear-button d-flex-ai-center-jc-center" onclick="resetForm()">Clear</button>
                <button onclick="createFirstTask()" class="add-task-add-button d-flex-ai-center-jc-center" id="">
                    Create
                    Task
                    <img src="../assets/svg/check_white.svg">
                </button>
            </div>
        </div>
    </div>
    <div class="add-task-popup-container d-none" id="">
        <div class="add-task-popup-reg" id="">
            Task added to Board
            <img src="../assets/svg/canban-1.svg" alt="board picture">
        </div>
    </div>
</div>
</div>
    
`;
}