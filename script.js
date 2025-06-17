document.addEventListener("DOMContentLoaded", function () {
  //Event listener for page load
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(taskText, save = true) {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
    }

    const listItem = document.createElement("li"); //Creating a list item
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    //Add  remove functionality
    removeButton.addEventListener("click", function () {
      taskList.removeChild(listItem); // remove li element from taskList
    });

    listItem.appendChild(removeButton); //appending  remove btn to the li
    taskList.appendChild(listItem); // appending li to taskList

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = ""; // Clear tasklist
  }

  // Add task on click
  addButton.addEventListener("click", addTask);

  //   Add task on pressing enter
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  //Implementing local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  function removeFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  loadTasks();
});
