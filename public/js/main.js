
const deleteBtn = document.querySelectorAll('.delete-btn');
const form = document.querySelector('#task-form');
const editBtn = document.querySelectorAll('.edit-btn');

// Add Task
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formInputData = new FormData(form);

    const data = {
        task: formInputData.get('taskName'),
        dueDate: formInputData.get('dueDate'),
        prioritylevel: formInputData.get('priority-level'),
        desc: formInputData.get('task-desc')
    }

    const response = await fetch('/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.status === 200) {
        console.log('Task Added');
        location.reload();
    } else {
        console.log('Task Not Added');
    }

});

// Delete Task
deleteBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        let taskId = e.target.id;
        console.log(taskId);
        const response = await fetch(`/deleteTask/${taskId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            console.log('Task Deleted');
            location.reload();
        } else {
            console.log('Task Not Deleted');
        }
    });
});

// Update Task
function formatDate(month, day, year) {
    const formattedMonth = month <= 9 ? '0' + month : month;
    const formattedDay = day <= 9 ? '0' + day : day;
    return `${year}-${formattedMonth}-${formattedDay}`;
}

editBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        let taskId = e.target.id;

        const prefill_data = await fetch(`/getTask/${taskId}`);
        const taskData = await prefill_data.json();
        const containertask = btn.parentNode.parentNode

        const dueDate = new Date(taskData.dueDate);
        const month = dueDate.getMonth() + 1;  // Add one since getMonth() returns 0-11
        const day = dueDate.getDate();
        const year = dueDate.getFullYear();

        // Format date as yyyy-mm-dd
        const formattedDate = formatDate(month, day, year);

        const form =
            `
        <form class="container" id="update-task-form-${taskData._id}">
            <div class="row gx-3 mb-2">
                <div class="col">
                    <input type="text" class="form-control py-2 px-2" name="taskName" id="update-taskName" value="${taskData.task}" >
                </div>
                <div class="col">
                    <input type="date" class="form-control py-2 px-2" name="dueDate" id="update-dueDate" value="${formattedDate}">
                </div>
                <select class="col select-priority py-2" name="priority-level" aria-label="priority selection">
                        <option selected >Priority</option>
                        <option ${taskData.prioritylevel === 'High' ? 'selected' : ''} value="High">High</option>
                        <option  ${taskData.prioritylevel === 'Medium' ? 'selected' : ''}  value="Medium">Medium</option>
                        <option  ${taskData.prioritylevel === 'Low' ? 'selected' : ''}  value="Low">Low</option>
                </select>
            </div>
            <div class="row gx-3">
            <div class="col-10 task-desc">
                <textarea class="form-control" name="task-desc" rows="1">${taskData.desc}</textarea>
              </div>
            <button class="update-btn col-2 btn btn-primary" type="submit">Submit</button>
            </div>
         </form>
         <div id="<%= ${taskData._id}  %>" class="icons exit-update-btn d-flex justify-content-center align-items-center ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
            <path d="M15.7494 15L9.75 9M9.75064 15L15.75 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
        </div>
        `

        containertask.innerHTML = form;

        const updateForm = document.querySelector(`#update-task-form-${taskData._id}`);
        const exitBtn = document.querySelector('.exit-update-btn');

        exitBtn.addEventListener('click', () => {
            location.reload();
        });

        updateForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formInputData = new FormData(updateForm);
            const data = {
                task: formInputData.get('taskName'),
                dueDate: formInputData.get('dueDate'),
                prioritylevel: formInputData.get('priority-level'),
                desc: formInputData.get('task-desc')
            }

            const response = await fetch(`/updateTask/${taskData._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status === 200) {
                console.log('Task Added');
                location.reload();
            } else {
                console.log('Task Not Added');
            }

            console.log(data);
        });
    });
});



