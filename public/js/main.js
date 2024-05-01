
// Add Task
const form = document.querySelector('#task-form');
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

    if (response.ok) {
        console.log('Task Added');
    } else {    
        console.log('Task Not Added');
    }
    
    console.log(data);

});

// Delete Task
const deleteBtn = document.querySelectorAll('.delete-btn');

deleteBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        let taskId = e.target.id;
        console.log(taskId);
        const response = await fetch(`/deleteTask/${taskId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Task Deleted');
        } else {
            console.log('Task Not Deleted');
        }
    });
});

// Update Task

const editBtn = document.querySelectorAll('.edit-btn');

editBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        let taskId = e.target.id;
        console.log(taskId);
        const response = await fetch(`/updateTask/${taskId}`, {
            method: 'PATCH'
        });

        if (response.ok) {
            console.log('Task Updated');
        } else {
            console.log('Task Not Updated');
        }
    });
});

