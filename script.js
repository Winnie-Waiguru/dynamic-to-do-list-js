document.addEventListener("DOMContentLoaded", function () {
  //Event listener for page load
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
    } else {
      const listItem = document.createElement("li"); //Create
      listItem.textContent = taskText;

      const removeButton = document.createElement("button"); //create remove Button
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";

      //Add  remove functionality
      removeButton.addEventListener("click", function () {
        taskList.removeChild(listItem); // remove li element from taskList
      });

      taskList.appendChild(listItem); // appending li to taskList
      listItem.appendChild(removeButton); //appending  remove btn to the li
      taskInput.value = ""; // Clear tasklist
    }
  }

  // Add task on click
  addButton.addEventListener("click", addTask);

  //   Add task on pressing enter
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
