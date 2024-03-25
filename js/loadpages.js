/**
 * Declaring all sections that wil be filled up with content per Click on NavBar-Menu-point
 */

const summary = document.getElementById("section-summary");
const add_task = document.getElementById("section-add_task");
const board = document.getElementById("section-board");
const contacts = document.getElementById("section-contacts");
const policy = document.getElementById("section-policy");

/**
 * Declaring all Menu Points
 */
let nav_summary = document.getElementById("nav-summary");
const nav_addtask = document.getElementById("nav-addtask");
const nav_board = document.getElementById("nav-board");
const nav_contacts = document.getElementById("nav-contacs");
const nav_privacy = document.getElementById("nav-privacy");
const nav_legal = document.getElementById("nav-legal");

console.table(nav_summary)

/**
 * CASE: Loading Summary
 */


function loadSummary() {
    summary.classList.remove("displaynone");
add_task.classList.add("displaynone");
board.classList.add("displaynone");
contacts.classList.add("displaynone");
policy.classList.add("displaynone");

    summary.innerHTML = renderSummary();
    renderSayHello();
}

/** 
 * VERARBEITUNG DER MENULinks 
 * */

function LinkBehaviorAfterClick(id){
    if(id == "nav-summary"){
        nav_summary.style.backgroundColor = "var(--use_border-button-bg-text-focus)";
        nav_summary.addEventListener("click", function (event) {
        loadSummary();
        event.preventDefault(); 
        });
    } else if (id == "nav-addtask"){
        

    }

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
