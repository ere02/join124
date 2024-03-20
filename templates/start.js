
/** JSDoc 
 * Die Funktion generiert die Buttons für den Bereich der Startseite mit allen Funktionen 
 * @param ${Name}: this is the User, who is logged in.
 */
function renderStartPage(){
    let Greeting = sayHello();
return /*html*/ `
<div class="startcontainer">
    <div><h1>JOIN</h1><div class="border-left cyan">Key Metrics at a Glance</div>
<div class ="todasandtasks">
    <div>
        <div id="start-todo"></div>
        <div id="start-done"></div>
        <div id="start-urgent" colspan="2"><h1>${Greeting}</h1></div>
        <div id="start-tasks"></div>    
    </div>      
        <div id="start-greeting" rowspan="3"></div>
</div>

`

}

function getTodo(){
    //
}

function getDone(){
    //
}
function getUrgent(){
    //
}
function getTasks(){
    //3 Tasks in Board / Progress / Feedback
}

function sayHello(){
     const jetzt = new Date();
    const stunde = jetzt.getHours();
    
        if (stunde >= 5 && stunde < 12) {
            return "Guten Morgen, ";
        } else if (stunde >= 12 && stunde < 18) {
            return "Guten Tag,";
        } else if (stunde >= 18 && stunde < 22) {
            return "Guten Abend, ";
        } else {
            return "Gute Nacht, ";
        }
    
}
