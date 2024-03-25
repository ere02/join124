/**
 * Declaring all sections that wil be filled up with content per Click on NavBar-Menu-point
 */

const summary = document.getElementById("summary");
const add_task = document.getElementById("add_task");
const board = document.getElementById("board");
const contacts = document.getElementById("contacts");
const policy = document.getElementById("policy");

/**
 * CASE: Loading Summary
 */

function loadSummary() {
    summary.classList.remove("displaynone");
add_task.classList.add("displaynone");
board.classList.add("displaynone");
contacts.classList.add("displaynone");
policy.classList.add("displaynone");
const nav_summary = document.getElementById("nav-summary");
nav_summary.style.backgroundColor = "var(--use_border-button-bg-text-focus)";

    summary.innerHTML = renderSummary();
    renderSayHello();

Event.preventDefault();
}

/**
 * DISABLED the Menu Button after beeing clicked.
 * @returns false
 */
function preventDefault(){
    return false;
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
