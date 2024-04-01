/**
 * Being Aware that all NavButtons are loaded
 * */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navsummary");
  document.getElementById("navboard");
  document.getElementById("navcontacts");
  document.getElementById("navprivacy");
  document.getElementById("navlegal");
});

/**
 * Declaring all sections that will be filled up with content per Click on NavBar-Menu-point
 */

const summary = document.getElementById("section-summary");
const addtask = document.getElementById("section-addtask");
const board = document.getElementById("section-board");
const contacts = document.getElementById("section-contacts");
const policy = document.getElementById("section-policy");

function resetAllSections() {
  summary.classList.add("displaynone");
  addtask.classList.add("displaynone");
  board.classList.add("displaynone");
  contacts.classList.add("displaynone");
  policy.classList.add("displaynone");
}

function resetAllNavButtons() {
  document.getElementById("navsummary").classList.remove("bg-darker");
  document.getElementById("navaddtask").classList.remove("bg-darker");
  document.getElementById("navboard").classList.remove("bg-darker");
  document.getElementById("navcontacts").classList.remove("bg-darker");
  document.getElementById("navprivacy").classList.remove("bg-darker");
  document.getElementById("navlegal").classList.remove("bg-darker");
}

/**
 * GoBockToContent - Arrow : close the Policy-Layer.
 */

function backToContent() {
  policy.classList.add("removePolicy");
  setTimeout(2000);
  policy.classList.remove("removePolicy");
  policy.classList.add("displaynone");
}

/** CONTENT loads in its Section
 * CASE: Loading Summary
 */
async function loadSummary(id) {
  /* goBackToContent.push(() => loadSummary(id));
  console.log(goBackToContent);*/

  allNavButton(id);
  summary.classList.remove("displaynone");
  summary.innerHTML = renderSummary();
  renderSayHello();
}
/** CONTENT loads in its Section
 * CASE: Loading addtask
 */
function loadAddTask(id) {
  /* goBackToContent.push(() => loadAddTask(id));*/

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

/** CONTENT loads in its Section
 * CASE: Loading Privacy Policy
 */
function loadPrivacy(id) {
  allNavButton(id);
  policy.classList.remove("displaynone");
  policy.innerHTML = renderPrivacy("DE");

}
/** CONTENT loads in its Section
 * CASE: Loading Legal Notice
 */
function loadLegal(id) {
  allNavButton(id);
  policy.classList.remove("displaynone");
  policy.innerHTML = renderLegal();

}

/** Control the behavior of the Nav-Button
 * USED for all Menu-Points
 */
function allNavButton(id) {
  resetAllSections();
  resetAllNavButtons();
  const navbutton = document.getElementById(id);
  navbutton.classList.add("bg-darker");
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
