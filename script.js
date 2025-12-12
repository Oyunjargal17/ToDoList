const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const task_container = document.getElementById("task_container");
const counters = document.getElementById("counter");
const filterButtons = document.getElementsByClassName("filter-btn");

let tasks = [];
let taskId = 1;
let todoFilter = "all";

const add = () => {
  const inputText = input.value.trim();
  if (inputText === "") {
    alert("Та текстээ бичнэ үү!");
    return;
  }

  const task = {
    id: taskId,
    text: inputText,
    isComplete: false,
  };
  tasks.push(task);

  remainderTasks(tasks);
  toggleComplete();
  clearInput();
  counterElement();
  updateCounter();
  taskId++;
};
const createTaskElement = (task) => {
  return `  <div class="task">
      <div class="task-left">
        <input type="checkbox" class="task_checkbox" onclick="toggleComplete(${
          task.id
        })" ${task.isComplete ? "checked" : ""}/>
        <p class="task_text ${task.isComplete ? "task_text_completed" : ""}">${
    task.text
  }</p>
      </div>

      <button class="task_delete" onclick="deleteTask(${task.id})">
        Delete
      </button>
    </div>`;
};
const remainderTasks = () => {
  const filteredTasks = filteredTodotasks();
  const noTasksDiv = document.querySelector(".noTasks");

  if (filteredTasks.length === 0) {
    noTasksDiv.style.display = "flex";
    task_container.innerHTML = "";
  } else {
    noTasksDiv.style.display = "none";
  }

  let taskElementsHTML = "";
  filteredTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskElementsHTML += taskElement;
  });
  task_container.innerHTML = taskElementsHTML;
};

const deleteTask = (taskId) => {
  if (confirm("Та итгэлтэй байна уу?")) {
    const updateTasks = tasks.filter((task) => {
      if (task.id === taskId) {
        return false;
      } else {
        return true;
      }
    });
    tasks = updateTasks;
    remainderTasks(tasks);
    updateCounter();
    return;
  }
};

const toggleComplete = (taskId) => {
  tasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isComplete: !task.isComplete };
    } else {
      return task;
    }
  });

  remainderTasks(tasks);
  updateCounter();
};
const counterElement = () => {
  console.log(tasks.length);
};

const clearInput = () => {
  input.value = "";
};
const filterTodos = (filter) => {
  for (let i = 0; i < filterButtons.length; i++) {
    const filterBtn = filterButtons[i];
    if (filterBtn.className.includes(filter)) {
      filterBtn.classList.add("toggleClass");
    } else {
      filterBtn.classList.remove("toggleClass");
    }
  }
  todoFilter = filter;
  remainderTasks();
};
const filteredTodotasks = () => {
  if (todoFilter === "all") {
    return tasks;
  } else if (todoFilter === "active") {
    return tasks.filter((task) => !task.isComplete);
  } else if (todoFilter === "completed") {
    return tasks.filter((task) => task.isComplete);
  }
  return tasks;
};

const updateCounter = () => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;
  const counterDiv = document.querySelector(".task-count");
  counterDiv.textContent = `${completedTasks} of ${totalTasks} tasks completed`;
};
const clearCompleted = () => {
  tasks = tasks.filter((task) => !task.isComplete);
  remainderTasks();
  updateCounter();
};
addBtn.addEventListener("click", add);
