
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

// Update Task

