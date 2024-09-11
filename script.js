const inputField = document.getElementById("add-task");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents submission 

    if (inputField.value.trim() != "") {
        // Create a div which contains task, edit button and delete button
        const newElement = document.createElement("div");
        newElement.className = "task";

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "delete-btn";

        // Create edit button
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.className = "edit-btn";

        // Add values from input field to task
        newElement.innerHTML = `<p>${inputField.value}</p>`;
        newElement.append(editBtn);
        newElement.append(deleteBtn);

        // Delete button functionality
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(newElement);
        })

        // editBtn.addEventListener("click", () => {
        //     const newValue = prompt("Enter a new value", newElement.querySelector('p').textContent);
        //     if (newValue !== null || newValue.trim() != "") {
        //         newElement.querySelector('p').textContent = newValue;
        //     }
        // })

        // Edit button functionality
        editBtn.addEventListener("click", () => {
            const currentTask = newElement.querySelector('p');
            const currentTaskText = currentTask.textContent;

            // Create input field
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentTaskText;
            input.className = "input-box";

            // Create save button
            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            saveBtn.className = 'save-btn';

            // Replace task text with input and save button
            currentTask.replaceWith(input);
            editBtn.replaceWith(saveBtn);

            // Focus on the input
            input.focus();

            // Save button functionality
            saveBtn.addEventListener('click', () => {
                const newText = input.value.trim();
                if (newText !== "") {
                    const newP = document.createElement('p');
                    newP.textContent = newText;
                    input.replaceWith(newP);
                    saveBtn.replaceWith(editBtn);
                }
            });
        });

        // Add the newly created task into the task list
        taskList.appendChild(newElement);

        // After adding a task, the input field must be empty
        inputField.value = "";
    }
});
