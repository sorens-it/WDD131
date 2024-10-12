let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = ""; // Clear previous tasks
  const html = tasks.map(taskTemplate).join(""); // Create the tasks' HTML
  listElement.innerHTML = html; // Add the new list of tasks
}

function newTask() {
  const task = document.querySelector("#todo").value; // Get the input value
  if (task.trim()) { // Only add non-empty tasks
    tasks.push({ detail: task, completed: false }); // Add new task to the array
    renderTasks(tasks); // Re-render the task list
    document.querySelector("#todo").value = ""; // Clear the input field
  }
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
  taskElement.remove(); // Remove the task from the DOM
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true; // Toggle task completion
  taskElement.classList.toggle("strike"); // Toggle the strike-through effect
}

function manageTasks(event) {
  const parent = event.target.closest("li"); // Find the closest parent <li>
  if (event.target.dataset.function === "delete") {
    removeTask(parent); // Handle task deletion
  }
  if (event.target.dataset.function === "complete") {
    completeTask(parent); // Handle task completion
  }
}

// Event listeners
document.querySelector("#submitTask").addEventListener("click", newTask); // Listen for task addition
document.querySelector("#todoList").addEventListener("click", manageTasks); // Listen for task actions

// Render any initial tasks (empty at the start)
renderTasks(tasks);
