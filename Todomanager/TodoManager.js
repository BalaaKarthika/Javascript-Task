document.getElementById('priority').addEventListener('change', function() {
    const estimatedTimeInput = document.getElementById('estimated-time');
    if (this.value === 'high') {
        estimatedTimeInput.style.display = 'inline';
    } else {
        estimatedTimeInput.style.display = 'none';
    }
});

function addTask() {
    let taskName = document.getElementById('task-name').value;
    let dueDate = document.getElementById('due-date').value;
    let priority = document.getElementById('priority').value;
    let estimatedTime = document.getElementById('estimated-time').value;
    let taskList = document.getElementById('task-list');

    if (taskName === '' || dueDate === '' || priority === '') {
        alert('Please fill in all fields!');
        return;
    }

    const newRow = document.createElement('tr');

    var status = 'Pending';
    var statusCell = document.createElement('td');
    statusCell.textContent = status;

    var actionsCell = document.createElement('td');
    var completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('button-complete');
    completeButton.onclick = function() {
        markComplete(newRow, statusCell);
    };

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('button-delete');
    deleteButton.onclick = function() {
        deleteTask(newRow);
    };

    actionsCell.appendChild(completeButton);
    actionsCell.appendChild(deleteButton);

    const priorityCell = document.createElement('td');
    priorityCell.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    priorityCell.classList.add(`${priority}-priority`);

    const estimatedTimeCell = document.createElement('td');
    estimatedTimeCell.textContent = priority === 'high' ? estimatedTime + ' hrs' : '';

    newRow.innerHTML = `
        <td>${taskName}</td>
        <td>${dueDate}</td>
    `;
    newRow.appendChild(priorityCell);
    newRow.appendChild(estimatedTimeCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(actionsCell);

    taskList.appendChild(newRow);

    document.getElementById('task-name').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('estimated-time').value = '';
    document.getElementById('estimated-time').style.display = 'none';
}

function markComplete(row, statusCell) {
    statusCell.textContent = 'Completed';
    row.classList.add('completed');
}

function deleteTask(row) {
    row.remove();
}

        

