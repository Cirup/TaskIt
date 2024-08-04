// Update Task
function formatDate(month, day, year) {
    const formattedMonth = month <= 9 ? '0' + month : month;
    const formattedDay = day <= 9 ? '0' + day : day;
    return `${year}-${formattedMonth}-${formattedDay}`;
}


function taskListHTML(data) {
    data.dueDate = new Date(data.dueDate).toLocaleDateString()
    return ` <div class="task-container  uncompleted-task  d-flex justify-content-between align-items-center px-4 py-4 mb-3">
                <div class="d-flex flex-column justify-content-center">
                    <h2 class="task-title">
                        ${data.task}
                    </h2>
                    <p class="dueDate mb-0">Deadline: ${data.dueDate}
                    </p>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <span class="${data.prioritylevel}-priority px-2 me-3">
                        ${data.prioritylevel} Priority
                    </span>
                    <div id="${data._id}"
                        class="icons add-complete-btn d-flex justify-content-center align-items-center ">
                        <svg id="<%= ${data._id} %>" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
                            <path
                                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                                stroke="currentColor" stroke-width="1.5" />
                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <!-- Edit Icon -->
                    <div id="${data._id}"
                        class="icons edit-btn d-flex justify-content-center align-items-center mx-2">
                        <svg id="${data._id}" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                            <path
                                d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M13 4L20 11" stroke="currentColor" stroke-width="1.5"
                                stroke-linejoin="round" />
                            <path d="M14 22L22 22" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <!-- Delete Icon -->
                    <div id="${data._id}"
                        class="icons delete-btn d-flex justify-content-center align-items-center">
                        <svg id="${data._id}" class="" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                            <path
                                d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
            `
}

function completedTaskList(data) {

    return `
            <div class="task-container completed-task d-flex justify-content-between align-items-center px-4 py-4 mb-3">
                <div class="d-flex flex-column justify-content-center">
                    <h2 class="task-title">
                        ${data.task}
                    </h2>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <span class="status-complete px-2 me-3">
                        Completed
                    </span>
                    <div id="${data._id}"
                        class="icons remove-complete-btn d-flex justify-content-center align-items-center ">
                        <svg id="${data._id}" xmlns="http://www.w3.org/2000/svg" height="24"
                            width="24"
                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path fill="#ffffff"
                                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c-9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c-9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        `
}

function formHTML(data) {
    const newDate = new Date(data.dueDate)

    const month = newDate.getMonth() + 1;  // Add one since getMonth() returns 0-11
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    // Format date as yyyy-mm-dd
    const formattedDate = formatDate(month, day, year);

    return `
        <form class="container" id="update-task-form-${data._id}">
            <div class="row gx-3 mb-2">
                <div class="col">
                    <input type="text" class="form-control py-2 px-2" name="taskName" id="update-taskName" value="${data.task}" >
                </div>
                <div class="col">
                    <input type="date" class="form-control py-2 px-2" name="dueDate" id="update-dueDate" value="${formattedDate}">
                </div>
                <select class="col select-priority py-2" name="priority-level" aria-label="priority selection">
                        <option selected >Priority</option>
                        <option ${data.prioritylevel === 'High' ? 'selected' : ''} value="High">High</option>
                        <option  ${data.prioritylevel === 'Medium' ? 'selected' : ''}  value="Medium">Medium</option>
                        <option  ${data.prioritylevel === 'Low' ? 'selected' : ''}  value="Low">Low</option>
                </select>
            </div>
            <div class="row gx-3">
            <div class="col-10 task-desc">
                <textarea class="form-control task-description" name="task-desc" rows="1">${data.desc}</textarea>
              </div>
            <button class="update-btn col-2 btn btn-primary" type="submit">Submit</button>
            </div>
         </form>
         <div id="<%= ${data._id}  %>" class="icons exit-update-btn d-flex justify-content-center align-items-center ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
            <path d="M15.7494 15L9.75 9M9.75064 15L15.75 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', async () => {
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
                <textarea class="form-control task-description" name="task-desc" rows="1">${taskData.desc}</textarea>
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


    // Changing Tab

    const taskTodoTab = document.getElementById('task-todo');
    const taskCompletedTab = document.getElementById('task-completed');
    const toggleTodoTask = document.getElementById('todo-task-list');
    const toggleCompletedTask = document.getElementById('task-completed-list');

    taskTodoTab.addEventListener('click', () => {
        // Hide completed
        toggleCompletedTask.classList.remove('show');
        toggleCompletedTask.classList.add('hide');

        // Show todo
        toggleTodoTask.classList.remove('hide');
        toggleTodoTask.classList.add('show');

        taskCompletedTab.classList.remove('active');
        taskTodoTab.classList.add('active');

        console.log("Toggle Todo");
    });

    taskCompletedTab.addEventListener('click', () => {
        toggleTodoTask.classList.remove('show');
        toggleTodoTask.classList.add('hide');

        toggleCompletedTask.classList.remove('hide');
        toggleCompletedTask.classList.add('show');

        taskCompletedTab.classList.add('active');
        taskTodoTab.classList.remove('active');

        console.log("Toggle Completed");
    });

    // Add Task to Completed
    const removeComplete = document.querySelectorAll('.remove-complete-btn');
    const addComplete = document.querySelectorAll('.add-complete-btn');

    function bindEventListeners() {

        const deleteBtn = document.querySelectorAll('.delete-btn');
        const editBtn = document.querySelectorAll('.edit-btn');

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

                // const dueDate = new Date(taskData.dueDate);
                // const month = dueDate.getMonth() + 1;  // Add one since getMonth() returns 0-11
                // const day = dueDate.getDate();
                // const year = dueDate.getFullYear();

                // // Format date as yyyy-mm-dd
                // const formattedDate = formatDate(month, day, year);

                const form = formHTML(taskData);;
                //             `
                //             <form class="container" id="update-task-form-${taskData._id}">
                //                 <div class="row gx-3 mb-2">
                //                     <div class="col">
                //                         <input type="text" class="form-control py-2 px-2" name="taskName" id="update-taskName" value="${taskData.task}" >
                //                     </div>
                //                     <div class="col">
                //                         <input type="date" class="form-control py-2 px-2" name="dueDate" id="update-dueDate" value="${formattedDate}">
                //                     </div>
                //                     <select class="col select-priority py-2" name="priority-level" aria-label="priority selection">
                //                             <option selected >Priority</option>
                //                             <option ${taskData.prioritylevel === 'High' ? 'selected' : ''} value="High">High</option>
                //                             <option  ${taskData.prioritylevel === 'Medium' ? 'selected' : ''}  value="Medium">Medium</option>
                //                             <option  ${taskData.prioritylevel === 'Low' ? 'selected' : ''}  value="Low">Low</option>
                //                     </select>
                //                 </div>
                //                 <div class="row gx-3">
                //                 <div class="col-10 task-desc">
                //                     <textarea class="form-control" name="task-desc" rows="1">${taskData.desc}</textarea>
                //                 </div>
                //                 <button class="update-btn col-2 btn btn-primary" type="submit">Submit</button>
                //                 </div>
                //             </form>
                //             <div id="<%= ${taskData._id}  %>" class="icons exit-update-btn d-flex justify-content-center align-items-center ms-2">
                //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
                //                 <path d="M15.7494 15L9.75 9M9.75064 15L15.75 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                //                 <path d="M22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12Z" stroke="currentColor" stroke-width="1.5" />
                //                 </svg>
                //             </div>
                // `

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

        document.querySelectorAll('.add-complete-btn').forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                const taskId = btn.id;
                console.log(taskId);

                const data = {
                    status: "Complete"
                }

                const response = await fetch(`/addComplete/${taskId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.status === 200) {
                    console.log('Task Complete');
                    const responseJson = await response.json();

                    // Remove in Uncompleted Container
                    const task = btn.parentElement.parentElement;
                    console.log(task)
                    toggleTodoTask.removeChild(task);

                    const taskCompleted = completedTaskList(responseJson);

                    // Put in Completed Container
                    // toggleCompletedTask.appendChild(taskCompleted)
                    toggleCompletedTask.insertAdjacentHTML('beforeend', taskCompleted);

                    // Re-bind the event listener to the newly added element
                    bindEventListeners();

                } else {
                    console.log('Task Not Completed');
                }
            });
        });

        document.querySelectorAll('.remove-complete-btn').forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                const taskId = btn.id;
                console.log(taskId);

                const data = {
                    status: "Incomplete"
                }

                const response = await fetch(`/removeComplete/${taskId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.status === 200) {
                    console.log('Task Incompleted');

                    const responseJson = await response.json();
                    const task = btn.parentElement.parentElement;

                    console.log(task)
                    toggleCompletedTask.removeChild(task);

                    const taskRemoveCompleted = taskListHTML(responseJson);

                    // toggleTodoTask.appendChild(taskRemoveCompleted)
                    toggleTodoTask.insertAdjacentHTML('beforeend', taskRemoveCompleted);

                    bindEventListeners();
                } else {
                    console.log('Task Not Incompleted');
                }
            });
        });
    }

    // REMOVE FROM COMPLETE
    removeComplete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            let taskId = e.target.id;

            const data = {
                status: "Incomplete"
            }

            const response = await fetch(`/removeComplete/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status === 200) {
                console.log('Task Incompleted');

                const responseJson = await response.json();
                const task = btn.parentElement.parentElement;
                console.log(task)
                toggleCompletedTask.removeChild(task);

                const taskRemoveCompleted = taskListHTML(responseJson);

                toggleTodoTask.insertAdjacentHTML('beforeend', taskRemoveCompleted);
                bindEventListeners();

            } else {
                console.log('Task Not Incompleted');
            }


        })
    });



    addComplete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            let taskId = e.target.id;
            console.log(taskId);

            const data = {
                status: "Complete"
            }

            const response = await fetch(`/addComplete/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status === 200) {
                console.log('Task Complete');
                const responseJson = await response.json();

                // Remove in Uncompleted Container
                const task = btn.parentElement.parentElement;

                toggleTodoTask.removeChild(task);

                const taskCompleted = completedTaskList(responseJson);

                //Put in Completed Container
                toggleCompletedTask.insertAdjacentHTML('beforeend', taskCompleted);

                bindEventListeners();

            } else {
                console.log('Task Not Completed');
            }
        })
    });



    const searchInput = document.getElementById('searchTask');
    let debounceTimer;


    // Delat function for debouncing an input change
    const debounce = (func, delay) => {
        return (...args) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const fetchResults = async (input) => {
        try {
            const response = await fetch('/searchTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ searchValue: input })
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data);

                const taskList = document.getElementById('todo-task-list');

                data.dueDate = new Date(data.dueDate).toLocaleDateString();

                const html = `
                    ${data.map((filteredTask) => taskListHTML(filteredTask)).join('')}
                `;

                // console.log(html)
                taskList.innerHTML = html
                bindEventListeners();

                // console.log(`Searching ${input}`)
            } else {
                console.error('Error fetching search results:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };


    searchInput.addEventListener('keyup', debounce((e) => {
        const input = e.target.value.toLowerCase();

        fetchResults(input);
    }, 500)); // Adjust the debounce delay as needed (300ms is common)

    const sortSelector = document.getElementById('sorting-select')


    sortSelector.addEventListener('change', async (e) => {
        const selectedValue = e.target.value;
        const allPost = document.querySelectorAll('.uncompleted-task');
        const taskList = document.getElementById('todo-task-list');
        const taskDetails = []
        let sortedTasks = [];


        allPost.forEach(container => {
            // Extract task title
            const titleElement = container.querySelector('.task-title');
            const taskTitle = titleElement ? titleElement.textContent.trim() : 'No title';

            // Extract due date
            const dueDateElement = container.querySelector('.dueDate');
            const dueDate = dueDateElement ? dueDateElement.textContent.replace('Deadline: ', '').trim() : 'No due date';

            // Extract priority level
            const priorityElement = container.querySelector('span');
            const priorityLevel = priorityElement ? priorityElement.textContent.trim() : 'No priority';

            // console.log(`Task Title: ${taskTitle}`);
            // console.log(`Due Date: ${dueDate}`);
            // console.log(`Priority Level: ${priorityLevel}`);

            taskDetails.push({
                container: container, // Reference to the DOM element
                title: taskTitle,
                dueDate: new Date(dueDate), // Convert due date to a Date object for comparison
                priorityLevel: priorityLevel
            });

        });

        function sortByTitle(tasks) {
            return tasks.sort((a, b) => a.title.localeCompare(b.title));
        }

        function sortByDueDate(tasks) {
            return tasks.sort((a, b) => a.dueDate - b.dueDate);
        }

        function sortByPriority(tasks) {
            const priorityOrder = { 'High Priority': 1, 'Medium Priority': 2, 'Low Priority': 3 };
            return tasks.sort((a, b) => priorityOrder[a.priorityLevel] - priorityOrder[b.priorityLevel]);
        }

        switch (selectedValue) {
            case 'Title':
                sortedTasks = sortByTitle(taskDetails);
                break;
            case 'Date':
                sortedTasks = sortByDueDate(taskDetails);
                break;
            case 'Priority':
                sortedTasks = sortByPriority(taskDetails);
                break;
            default: sortedTasks = allPost;
        }

        const sortedHTML = sortedTasks.map((task) => task.container.outerHTML).join('')

        taskList.innerHTML = sortedHTML;
        bindEventListeners();
    });
});


// // Extract task title
// const titleElement = container.querySelector('.task-title');
// const taskTitle = titleElement ? titleElement.textContent.trim() : 'No title';

// // Extract due date
// const dueDateElement = container.querySelector('.dueDate');
// const dueDate = dueDateElement ? dueDateElement.textContent.replace('Deadline: ', '').trim() : 'No due date';

// // Extract priority level
// const priorityElement = container.querySelector('span');
// const priorityLevel = priorityElement ? priorityElement.textContent.trim() : 'No priority';

// console.log(`Task Title: ${taskTitle}`);
// console.log(`Due Date: ${dueDate}`);
// console.log(`Priority Level: ${priorityLevel}`);