document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");
  
    // Function to update stats
    const updateStats = () => {
      const allTasks = taskList.querySelectorAll(".task-item");
      const completed = taskList.querySelectorAll(".task-item.completed");
      totalTasks.textContent = allTasks.length;
      completedTasks.textContent = completed.length;
    };
  
    // Function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      // Create task item
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");
  
      // Task text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
  
      // Complete button
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.classList.add("complete-button");
      completeButton.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        updateStats();
      });
  
      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
        updateStats();
      });
  
      // Append elements to the task item
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(completeButton);
      taskItem.appendChild(deleteButton);
  
      // Add task to the list
      taskList.appendChild(taskItem);
  
      // Clear input field
      taskInput.value = "";
  
      // Update stats
      updateStats();
    };
  
    // Add task on button click
    addTaskButton.addEventListener("click", addTask);
  
    // Add task on pressing Enter key
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
  });
  