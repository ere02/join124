/**
 * Call of summary.html
 */

function goToSummaryHTML(){
    window.location.href = '../subpages/summary.html';
}

/**
 * Declaring Summary-Container for Content 
 * Find Day-time for Greeting
 * Change color of active Menu point
 */
async function startSummary(id) {
    await includeHTML();
    summary.classList.remove("displaynone");
    summary.innerHTML =  renderSummary(); 

renderSayHello();
allNavButton(id);
}

/**
 * Sum all Numbers for Content on Summary-Dashboard
 */
function renderSummary() {
    let todoNumber = toDo.length;
    let doneNumber = done.length;
    let inProgressNumber = inProgress.length;
    let awaitFeedbackNumber = awaitFeedback.length;
    let allTasksNumber = todoNumber + inProgressNumber + awaitFeedbackNumber + doneNumber;
    


return /*html*/ `
    <div class="start-container">
        <div class="start-head"><h1 class="padding20 right-border-2px">Join 360</h1><h4 class="padding20">Key Metrics at a Glance</h4>
    </div>
    <div class ="summarycontainer">
       
            <div id="summary-todo" class="tile flex-center border-bg">
                <div id="todo" class="circle bg-dark edit"></div>
                <div class="flex-center flex-column"><h2>${todoNumber}</h2><br>
                <h5>To-do</h5></div>
            </div>
            <div id="summary-done" class="tile flex-center border-bg">
                <div id="done" class="circle bg-dark check"></div>
                <div class="flex-center flex-column"><h2>${doneNumber}</h2><br>
                <h5>Done</h5></div>
            </div>
            <div id="summary-urgent" class="tile flex-center border-bg">
                <div id="urgent" class="circle bg-urgent urgent">
                </div>
                 <div class="flex-center flex-column">
                        <h2>${urgent}</h2><br>
                    <span class="span">Urgent</span>
                </div>
            
                <div class="left-border-2px">
                    <span class="bold span">16. Oktober 2024</span><br>
                    <span class="span">Upcoming Deadline</span>
                </div>
            </div>
            <div id="summary-board" class="tile flex-center border-bg">
                <div class="flex-center flex-column"><h2>${allTasksNumber}</h2><br>
                    <h5>Tasks in <br>Board</h5></div>
                </div>
            <div id="summary-progress" class="tile flex-center border-bg"><div class="flex-center flex-column"><h2>${inProgressNumber}</h2><br>
                <h5>Tasks in <br>Progress</h5></div></div>   
            <div id="summary-feedback" class="tile flex-center border-bg"><div class="flex-center flex-column"><h2>${awaitFeedbackNumber}</h2><br>
                <h5>Awaiting <br>Feedback</h5></div></div>    
            <div id="summary-greet">7</div>
    </div>

    `;
}

/**
 * Treat all Due Dates on Tasks for Summary Dashboard
 */

function nextDueDateForSummary(){
    
    const untilDue = allTasks[worker][currentUser]
}