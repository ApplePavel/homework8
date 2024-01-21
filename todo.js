const root = document.getElementById('root');

const header = document.createElement('header');
header.classList.add('header');

const addTaskButton = document.createElement('button');
addTaskButton.textContent = 'Add Task';

const input = document.createElement('input');
input.placeholder = 'Enter todo';

const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All';

const taskContainer = document.createElement('div');
taskContainer.classList.add('task-container');

header.append(deleteAllButton, input, addTaskButton);

root.appendChild(header);
root.appendChild(taskContainer);

const task = document.createElement('div');
task.classList.add('task');

const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox-container');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkboxContainer.appendChild(checkbox);

const checkboxFake = document.createElement('div');
checkboxFake.classList.add('checkbox-fake');
checkboxContainer.appendChild(checkboxFake);

task.appendChild(checkboxContainer);

const TaskDiv = document.createElement('div');
TaskDiv.classList.add('task-text');
TaskDiv.textContent = 'Some task';

const deleteButton = document.createElement('button');
deleteButton.textContent = 'X';

const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

const date = document.createElement('div');
date.textContent = formattedDate;

const actionsContainer = document.createElement('div');
actionsContainer.classList.add('actions');
actionsContainer.appendChild(deleteButton);
actionsContainer.appendChild(date);

task.appendChild(TaskDiv);
task.appendChild(actionsContainer);

taskContainer.appendChild(task);

// task 2 

const task2 = document.createElement('div');
task2.classList.add('task');

const checkboxContainer2 = document.createElement('div');
checkboxContainer2.classList.add('checkbox-container');

const checkbox2 = document.createElement('input');
checkbox2.type = 'checkbox';
checkboxContainer2.appendChild(checkbox2);

const checkboxFake2 = document.createElement('div');
checkboxFake2.classList.add('checkbox-fake');
checkboxContainer2.appendChild(checkboxFake2);

task2.appendChild(checkboxContainer2);

const TaskDiv2 = document.createElement('div');
TaskDiv2.classList.add('task-text');
TaskDiv2.textContent = 'Another task';

const deleteButton2 = document.createElement('button');
deleteButton2.textContent = 'X';

const currentDate2 = new Date();
const formattedDate2 = `${currentDate2.getDate()}.${currentDate2.getMonth() + 1}.${currentDate2.getFullYear()}`;

const date2 = document.createElement('div');
date2.textContent = formattedDate2;

const actionsContainer2 = document.createElement('div');
actionsContainer2.classList.add('actions');
actionsContainer2.appendChild(deleteButton2);
actionsContainer2.appendChild(date2);

task2.appendChild(TaskDiv2);
task2.appendChild(actionsContainer2);
taskContainer.appendChild(task2);

