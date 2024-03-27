/**
 * Declaring all sections that wil be filled up with content per Click on NavBar-Menu-point
 */

const summary = document.getElementById("section-summary");
const addtask = document.getElementById("section-addtask");
const board = document.getElementById("section-board");
const contacts = document.getElementById("section-contacts");
const policy = document.getElementById("section-policy");

/** CONTENT loads in its Section 
 * CASE: Loading Summary
 */
function loadsummary() {
  summary.classList.remove("displaynone");
  summary.innerHTML = renderSummary();
  renderSayHello();
}
/** CONTENT loads in its Section 
 * CASE: Loading add_task
 */
function loadAddTask() {
 
    addtask.classList.remove("displaynone");
    addtask.innerHTML = renderAddTask("DE");
  }

    /**
   * Disable all Content-Areas after Klick
   

*/

/**
 * VERARBEITUNG DER MENULinks
 * */
  const nav_summary = document.getElementById("nav-summary");
  const nav_addtask = document.getElementById("nav-addtask");
  const nav_board = document.getElementById("nav-board");
  const nav_contacts = document.getElementById("nav-contacts");
  const nav_policy= document.getElementById("nav-policy");

function LinkBehaviorAfterClick(id) {
    
    summary.classList.add("displaynone");
    addtask.classList.add("displaynone");
    board.classList.add("displaynone");
    contacts.classList.add("displaynone");
    policy.classList.add("displaynone");
  /**
   * Declaring all Menu Points
   */


  switch(id){
    case id:
  let  navSelection = id.replace("nav-","nav_");  
   
      navSelection.classList.add("bg-darker");
      navSelection.addEventListener("click", function (event) {
        event.preventDefault();
      });
      break;
  }
}
/*
  function loadSummary{}
    let nextStep = id.replace("nav_","load");
    nextSTep();

  }


 /* switch (id) {
    case "nav-summary":
      loadSummary();
      nav_summary.style.backgroundColor =
        "var(--use_border-button-bg-text-focus)";
      nav_summary.addEventListener("click", function (event) {
        event.preventDefault();
      });
      break;
    case "nav-addtask":
      loadAddTask();
      nav_addtask.style.backgroundColor =
        "var(--use_border-button-bg-text-focus)";
      nav_addtask.addEventListener("click", function (event) {
        event.preventDefault();
      });
      break;
    case "nav-board":
      loadBoard();
      nav_board.style.backgroundColor =
        "var(--use_border-button-bg-text-focus)";
      nav_board.addEventListener("click", function (event) {
        event.preventDefault();
      });
      break;
    case "nav-board":
      loadBoard();
      nav_board.style.backgroundColor =
        "var(--use_border-button-bg-text-focus)";
      nav_board.addEventListener("click", function (event) {
        event.preventDefault();
      });
      break;
      case "nav-contacts":
        loadContacts();
        nav_contacts.style.backgroundColor =
          "var(--use_border-button-bg-text-focus)";
        nav_contacts.addEventListener("click", function (event) {
          event.preventDefault();
        });
        break;
    case "nav-privacy":
        loadPrivacy();
        nav_privacy.style.backgroundColor =
          "var(--use_border-button-bg-text-focus)";
         nav_privacy.addEventListener("click", function (event) {
           event.preventDefault();
         });
         break;
         case "nav-legal":
            loadlegal();
            nav_legal.style.backgroundColor =
              "var(--use_border-button-bg-text-focus)";
             nav_legal.addEventListener("click", function (event) {
               event.preventDefault();
             });
             break;
  }
}
/*
    if(id == "nav-summary"){
        nav_summary.style.backgroundColor = "var(--use_border-button-bg-text-focus)";
        nav_summary.addEventListener("click", function (event) {
        loadSummary();
        event.preventDefault(); 
        });
    } else if (id == "nav-addtask"){
        nav_addtask.style.backgroundColor = "var(--use_border-button-bg-text-focus)";
        nav_addtask.addEventListener("click", function (event) {
        loadSummary();
        event.preventDefault(); 
        });
    } else if (id == "nav-board"){
        nav_board.style.backgroundColor = "var(--use_border-button-bg-text-focus)";
        nav_board.addEventListener("click", function (event) {
        loadAddTasks();
        event.preventDefault(); 
        });
    } else if (id == "nav-contacts"){
        nav_contacts.style.backgroundColor = "var(--use_border-button-bg-text-focus)";
        nav_contacts.addEventListener("click", function (event) {
        loadSummary();
        event.preventDefault(); 
        });
    } else if (id == "nav-addtask"){
        

    }*/

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
