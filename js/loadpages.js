/**
 * Being Aware that all NavButtons are loaded
 * */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("navsummary");
  document.getElementById("navboard");
  document.getElementById("navcontacts");
  document.getElementById("navpolicy");
});

/**
 * Declaring all sections that wil be filled up with content per Click on NavBar-Menu-point
 */

const summary = document.getElementById("section-summary");
const addtask = document.getElementById("section-addtask");
const board = document.getElementById("section-board");
const contacts = document.getElementById("section-contacts");
const policy = document.getElementById("section-policy");
/**
 * Declaring all  NavBar-Menu-points
 */
const navsummary = document.getElementById("navsummary");
const navaddtask = document.getElementById("navaddtask");
const navboard = document.getElementById("navboard");
const navcontacts = document.getElementById("navcontacts");
const navpolicy = document.getElementById("navpolicy");


function resetAllSections() {
  summary.classList.add("displaynone");
  addtask.classList.add("displaynone");
  board.classList.add("displaynone");
  contacts.classList.add("displaynone");
  policy.classList.add("displaynone");
}
function resetAllNavButtons() {
  navsummary.classList.remove("bg-darker");
  navaddtask.classList.remove("bg-darker");
  navboard.classList.remove("bg-darker");
  navcontacts.classList.remove("bg-darker");
  navpolicy.classList.remove("bg-darker");
}


/** CONTENT loads in its Section 
 * CASE: Loading Summary
 */
function loadSummary(id) {
  allNavButton(id);
  summary.classList.remove("displaynone");
  summary.innerHTML = renderSummary();
  renderSayHello();
}
/** CONTENT loads in its Section 
 * CASE: Loading addtask
 */
function loadAddTask(id) {
  allNavButton(id);
  addtask.classList.remove("displaynone");
  addtask.innerHTML = renderAddTask();
}

/** CONTENT loads in its Section 
 * CASE: Loading board
 */
function loadBoard(id) {
  allNavButton(id);
  board.classList.remove("displaynone");
}

/** CONTENT loads in its Section 
 * CASE: Loading CONTACTS
 */
function loadContacts(id) {
  allNavButton(id);
  contacts.classList.remove("displaynone");
}


/** Control the behavior of the Nav-Button 
 * USED for all Menu-Points
 */
function allNavButton(id) {
  resetAllSections();
  resetAllNavButtons();
  const navbutton = document.getElementById(id);
  navbutton.classList.add("bg-darker");
  navbutton.addEventListener("click", function (event) {
    event.preventDefault();
  });
}

/** JSDoc
 * Die Funktion generiert die Buttons für den Bereich der Summary-Content mit allen Informationen
 * @param ${Name}: this is the User, who is logged in.
 */
function renderSayHello() {
  let greetings = sayHello();
  let place = document.getElementById("summary-greet");
  place.innerHTML = `<h3>${greetings}</h3></br>
               <h2 class="highlightedText lineheight1">Sophia Müller-Hinterdupfingen</h2>
                    `;
}

/**
 * UHRZEIT-Abhängige Begrüßung
 */
function sayHello() {
  const jetzt = new Date();
  const stunde = jetzt.getHours();

  if (stunde >= 5 && stunde < 12) {
    return "Guten Morgen,";
  } else if (stunde >= 12 && stunde < 18) {
    return "Guten Tag,";
  } else if (stunde >= 18 && stunde < 22) {
    return "Guten Abend,";
  } else {
    return "Gute Nacht,";
  }
}
