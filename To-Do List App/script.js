// Selecting DOM elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener to add a new task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        
        // Add delete button to the list item
        li.appendChild(deleteBtn);
        
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Mark task as completed when clicked
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Delete the task
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();  // Prevent the completed toggle from triggering
            taskList.removeChild(li);
        });
    } else {
        alert('Please enter a task');
    }
}
