function renderSummary() {


return /*html*/ `
    <div class="start-container">
        <div class="start-head"><h2 class="padding20 right-border-2px">Join 360</h2><h4 class="padding20">Key Metrics at a Glance</h4>
    </div>
    <div class ="summarycontainer">
       
            <div id="summary-todo" class="tile flex-center border-bg">
                <div id="todo" class="circle bg-dark edit"></div>
                <div class="flex-center flex-column"><h2>1</h2><br>
                <h4>To-do</h4></div>
            </div>
            <div id="summary-done" class="tile flex-center border-bg">
                <div id="done" class="circle bg-dark check"></div>
                <div class="flex-center flex-column"><h2>1</h2><br>
                <h4>Done</h4></div>
            </div>
            <div id="summary-urgent" class="tile flex-center border-bg">
                <div id="urgent" class="circle bg-urgent urgent">
                </div>
                 <div class="flex-center flex-column">
                        <h2>1</h2><br>
                    <span class="span">Urgent</span>
                </div>
            
                <div class="left-border-2px">
                    <span class="bold span">16. Oktober 2024</span><br>
                    <span class="span">Upcoming Deadline</span>
                </div>
            </div>
            <div id="summary-board" class="tile flex-center border-bg">
                <div class="flex-center flex-column"><h2>1</h2><br>
                    <h4>Tasks in <br>Board</h4></div>
                </div>
            <div id="summary-progress" class="tile flex-center border-bg"><div class="flex-center flex-column"><h2>2</h2><br>
                <h4>Tasks in <br>Progress</h4></div></div>   
            <div id="summary-feedback" class="tile flex-center border-bg"><div class="flex-center flex-column"><h2>2</h2><br>
                <h4>Awaiting <br>Feedback</h4></div></div>    
            <div id="summary-greet">7</div>
    </div>

    `;
}