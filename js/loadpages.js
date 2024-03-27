/**
 * Declaring all sections that wil be filled up with content per Click on NavBar-Menu-point
 */

const summary = document.getElementById("section-summary");
const addtask = document.getElementById("section-addtask");
const board = document.getElementById("section-board");
const contacts = document.getElementById("section-contacts");
const policy = document.getElementById("section-policy");

/**
 * VERARBEITUNG DER MENULinks
 * */
document.addEventListener('DOMContentLoaded', function() {
  const navsummary = document.getElementById("navsummary");
  const navboard = document.getElementById("navboard");
  const navcontacts = document.getElementById("navcontacts");
  const navpolicy= document.getElementById("navpolicy");
});


/** CONTENT loads in its Section 
 * CASE: Loading Summary
 */
function loadsummary(id) {
  allNavButton(id);
  summary.classList.remove("displaynone");
  summary.innerHTML = renderSummary();
  renderSayHello();
}
/** CONTENT loads in its Section 
 * CASE: Loading add_task
 */
function loadAddTask(id) {
  allNavButton(id);
    addtask.classList.remove("displaynone");
    addtask.innerHTML = renderAddTask("DE");
  }

  function allNavButton(id){
    const navbutton = document.getElementById(id);
    navbutton.classList.add("bg-darker");
    navbutton.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }

    /**
   * Disable all Content-Areas after Klick
   

*/


function LinkBehaviorAfterClick(id) {
    
    summary.classList.add("displaynone");
    addtask.classList.add("displaynone");
    board.classList.add("displaynone");
    contacts.classList.add("displaynone");
    policy.classList.add("displaynone");

 switch(id){
    case id:
  //let navSelection = id.replace("nav-","nav_");  
  
      id.classList.add("bg-darker");
      id.addEventListener("click", function (event) {
        event.preventDefault();
      });
      break;
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
