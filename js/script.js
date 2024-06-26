// TOKEN FÜR SPÄTER REMOTE DATENSPEICHERUNG
let goBackToPage = [];
let priority;
let getTasksResponse;

async function init() {
  await loadUsers();
  renderLogin();
  introAnimation();
  loadFromLocalStorage();
  /* await renderUserIcon(); */
}

let login = document.getElementById('content');

function introAnimation() {
  document.getElementById('logo').classList.add('animation');
  document.getElementById('layer').classList.add('small');
  document.getElementById('content').classList.add('visible');
}

async function returnLoginHTML() {
  let login = document.getElementById('content');
  login.innerHTML = `
    <div w3-include-html="templates/login.html"></div>
    `;
}

function renderLogin() {
  login.innerHTML = loginPage();
  const newUserDiv = document.querySelector('.new-user');
  newUserDiv.style.display = '';
}

/** COPIERT UND IM JEWEILIGEN PAGE-SCRiPT VERBAUT */
async function startContent() {
  await includeHTML();
  await loadSummary('navsummary');
}

function callFramePageSinLogin(from) {
  const url = `../subpages/frame-page_sinLogin.html?from=${from}`;
  window.location = url;
}

async function startContentSinLogin() {
  await includeHTML();
  loadSinLogin();
}

function loadSinLogin() {
  goBackToPage.push(() => loadIntro());
  const params = new URLSearchParams(window.location.search);
  const from = params.get('from');

  document.getElementById('mainNav').classList.add('sinLogin');
  document.getElementById('headerIcons').classList.add('displaynone');

  switch (from) {
    case 'privacy':
      loadPrivacy('navprivacy');
      break;
    case 'legal':
      loadLegal('navlegal');
      break;
  }
}

function loadIntro() {
  window.location = `../index.html`;
}

async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute('w3-include-html'); // "includes/Header.html und NabBar.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

async function renderUserIcon() {
  let initial = document.getElementById('userIcon');
  initial.innerHTML = `${initial}${initiallastname}`;
}

function showSignUp() {
    // Get the element with class "new-user"
    const newUserDiv = document.querySelector('.new-user');
  
    // Hide the element using style.display
    newUserDiv.style.display = 'none';
  
    let content = document.getElementById('content');
    content.innerHTML = generateSignUpHTML();
  }
  
  function logoutMenuSlider() {
    let slider = document.getElementById("logoutMenu");
    if(slider.classList.contains("aniLogout")){
      slider.classList.remove("aniLogout");
    } else {
       slider.classList.add("aniLogout");
    }
  }

  async function loadTasks() { 
    try {
        getTasksResponse = await getItem('/allTasks');
        let keys = Object.keys(getTasksResponse);
        let lastKey = keys[keys.length - 1];
        let lastEntry = getTasksResponse[lastKey];
        if (lastEntry) {
            tasks = lastEntry;
        } else {
            tasks = [];
        }
    } catch (e) {
        console.log(e)
    }
}

async function deleteOldTasksEntry() {
  let keys = Object.keys(getTasksResponse);
  let lastKey = keys[keys.length - 1];
  for (let i = 0; i < keys.length; i++) {
    if (lastKey != keys[i]) {
      await deleteData('/allTasks/' + keys[i]);
    }
  }
}