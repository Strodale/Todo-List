// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task item
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add delete functionality
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append elements
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = "";
}

// Add event listener to the button
addTaskButton.addEventListener("click", addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
