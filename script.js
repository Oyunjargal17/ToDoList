const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const task_container = document.getElementById("task_container");
const counters = document.getElementById("counter");

let tasks = [];
let taskId = 1;

const add = () => {
  const inputText = input.value.trim();
  if (inputText === "") {
    alert("Task-iin utgiig oruulna uu?");
    return;
  }

  const task = {
    id: taskId,
    text: inputText,
    isComplete: false,
  };
  tasks.push(task);

  remainderTasks();
  toggleComplete();
  clearInput();
  counterElement();
  taskId++;
};
const createTaskElement = (task) => {
  return `  <div class="task">
      <div class="task-left">
        <input type="checkbox" class="task_checkbox" onclick="toggleComplete(${
          task.id
        })" ${task.isComplete && "checked"}/>
        <p class="task_text">${task.text}</p>
      </div>

      <button class="task_delete" onclick="deleteTask(${task.id})">
        Delete
      </button>
    </div>`;
};
const remainderTasks = () => {
  let taskElementsHTML = "";
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskElementsHTML += taskElement;
  });
  task_container.innerHTML = taskElementsHTML;
};

const deleteTask = (taskId) => {
  const updateTasks = tasks.filter((task) => {
    if (task.id === taskId) {
      return false;
    } else {
      return true;
    }
  });
  tasks = updateTasks;
  remainderTasks();
};

const toggleComplete = (taskId) => {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isComplete: !task.isComplete };
    } else {
      return task;
    }
  });
};

const counterElement = () => {
  // counters.innerHTML = tasks.length;
  console.log(tasks.length);
};

const clearInput = () => {
  input.value = "";
};

addBtn.addEventListener("click", add);
