function renderBoard(){
    return /*html*/ `
    
    <div class="main-container">
        <div class="main-container-body">

            <div class="board-main-container">
                <div class="board-headline">
                    <div class="board-headline-button">
                        <h1>Board</h1>
                        <!-- <span class="board-headline-text h1">Board</span> -->
                        <button class="board-button-addTask-mobile"><img src="../assets/svg/add.svg" alt=""
                                onclick=""></button>
                    </div>
                    <div class="board-headline-container-search-add">
                        <div class="board-input-search-container">
                            <input id="" class="board-input-search" type="search" placeholder="Find Task"
                                autocomplete="off">
                            <div class="board-input-search-icons">
                                <img class="board-input-search-icons" src="../assets/svg/search.svg" alt="">
                            </div>
                        </div>
                        <button class="board-button-addTask" onclick=""><span class="board-text-addTask">Add
                                task</span><img src="../assets/svg/add.svg" alt=""></button>
                    </div>
                </div>
                <div class="board-task-main">

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">To do</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="toDo" ondrop="moveTo('toDo')"
                            ondragleave="removeHighlight('toDo')" ondragover="allowDrop(event); highlight('toDo')">
                        </div>
                    </div>

                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">In progress</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="inProgress" ondrop="moveTo('inProgress')"
                            ondragleave="removeHighlight('inProgress')" ondragover="allowDrop(event); highlight('inProgress')">
                        </div>
                    </div>
                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">Await feedback</span>
                            <img class="board-add-task-add-icon" src="../assets/svg/add.svg" alt="">
                        </div>
                        <div class="board-task-container drag-area" id="awaitFeedback" ondrop="moveTo('awaitFeedback')"
                            ondragleave="removeHighlight('awaitFeedback')" ondragover="allowDrop(event); highlight('awaitFeedback')">
                        </div>
                    </div>
                    <div class="board-task-category">
                        <div class="board-task-headline">
                            <span class="board-add-task-headline">Done</span>
                        </div>
                        <div class="board-task-container drag-area" id="done" ondrop="moveTo('done')"
                            ondragleave="removeHighlight('done')" ondragover="allowDrop(event); highlight('done')">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
    <script src="../js/board.js"></script>
    `;
}