function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const timeAdded = document.createElement("small");
    timeAdded.textContent = "Added: " + new Date().toLocaleTimeString();

    listItem.appendChild(taskName);
    listItem.appendChild(timeAdded);

    listItem.onclick = function () {
        listItem.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(listItem);

    input.value = "";
}