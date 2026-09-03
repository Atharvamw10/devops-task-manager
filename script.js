function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.onclick = function () {
        listItem.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(listItem);

    input.value = "";
}
