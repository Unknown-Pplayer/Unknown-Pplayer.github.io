document.querySelector('#addbtn').onclick = function() {
    var taskName = document.querySelector('#taskname').value;
    var taskDate = document.querySelector('#taskdate').value;

    if (taskName.length == 0 || taskDate.length == 0) {
        alert("Please Enter a Task and a Date")
    } else {
        document.querySelector('#writtentask').innerHTML += `
            <div class="task">
                <input type="checkbox" class="complete-task-checkbox">
                <span class="task-name">
                    ${taskName}
                </span>
                <span class="task-date">
                    ${taskDate}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        
        document.querySelector('#taskname').value = '';
        document.querySelector('#taskdate').value = '';
    }

    var currenttsk = document.querySelectorAll(".delete");
    for (var i = 0; i < currenttsk.length; i++) {
        currenttsk[i].onclick = function() {
            this.parentNode.remove();
        }
    }

    var checkboxes = document.querySelectorAll(".complete-task-checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onchange = function() {
            var task = this.parentNode;
            if (this.checked) {
                task.classList.add("completed-task");
                alert("Congratulations! You completed a task!")
            } else {
                task.classList.remove("completed-task");
            }
        }
    }
    
}
