// const input = document.querySelector("#input");
// const addElement = document.querySelector("#add");
// const tasksContainer= document.querySelector("#taskContainer")
// console.log(input);
// console.log(addElement);

// const tasks = [];
// let taskId = 1;
// const add = () => {
//   const todoText = input.value;
//   const task = {
//     id: taskId,
//     text: todoText,
//     isComplete: false,
//   };

//   tasks.push(task);
//   taskId++;
//   console.log(tasks);
//   clearInput();
//   renderTasks();
// };
// const renderTasks= () =>
// {

//         tasks.forEach((task)=>
//         {
//           const taskElement = createTaskElement(task);
//           tasksContainer.innerHTML= taskElement;
//         })
// }
// const createTaskElement=(task)=>
// {
//   return `<div class="task">
//           <input type="checkbox" class="task__checkbox" name="checkbox">
//           <p class="task__text">${task.text}</p>
//           <button class="task__delete">delete</button>
//         </div>`
// }
// const clearInput = () => {
//   input.value = "";
// };
// // addElement.onclick = add;
// addElement.addEventListener("click", add);
// =============================================================
// const add = () => {
//   // container.innerHTML = inputText.value;
//   const toDoText = inputText.value;
//   tasks.push(toDoText);

//   let tasksHTML = "";

//   tasks.forEach((task) => {
//     const taskEmelent = `<p>${task}</p>`;

//     tasksHTML += taskEmelent;
//   });

//   container.innerHTML = tasksHTML;

//   clearInput();
// };
// =============================================================
// const inputText = document.getElementById("input");
// const addElement = document.getElementById("add");
// const task_container = document.getElementById("task_container");

// const tasks = [];
// let taskId = 1;
// const add = () => {
//   const toDoText = inputText.value.trim();
//   if (toDoText === "") {
//     alert("Task-iin utgiig oruulna uu?");
//     return;
//   }
//   const task = {
//     id: taskId,
//     text: toDoText,
//     isComplete: false,
//   };
//   tasks.push(task);
//   taskId++;
//   remainderTasks();
//   clearInput();
// };
// const remainderTasks = () => {
//   task_container.innerHTML = "";
//   tasks.forEach((task) => {
//     const taskElementHTML = createTaskElement(task);
//     task_container.innerHTML += taskElementHTML;
//   });
// };
// const createTaskElement = (task) => {
//   return `<div class="task">
//         <input type="checkbox" class="task_checkbox" />
//         <p class="task_text">${task.text}</p>
//         <button class="task_delete">delete</button>
//       </div>`;
// };
// const clearInput = () => {
//   inputText.value = "";
// };

// addElement.addEventListener("click", add);

// ========================================================
const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const task_container = document.getElementById("task_container");

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
  // console.log(tasks);
  // task_container.innerHTML = tasks;
  remainderTasks();
  clearInput();
  taskId++;
};
const createTaskElement = (task) => {
  return `<div class="task">
        <input type="checkbox" class="task_checkbox" />
        <p class="task_text">${task.text}</p>
        <button class="task_delete" onclick="deleteTask(${task.id})">delete</button>
      </div>`;
};
const remainderTasks = () => {
  task_container.innerHTML = "";
  tasks.forEach((task) => {
    const taskElementHTML = createTaskElement(task);
    task_container.innerHTML += taskElementHTML;
  });
};
// const deleteTask = (taskId) => {
//   const updateTasks = tasks.filter((task) => {
//     if (task.id === taskId) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   tasks = updateTasks;
//   console.log(tasks);
//   remainderTasks();
// };
const deleteTask = (taskId) => {
  const updateTasks = tasks.filter((task) => {
    if (task.id === taskId) {
      return false;
    } else {
      return true;
    }
  });
  tasks = updateTasks;
  console.log(tasks);
  remainderTasks();
};
const clearInput = () => {
  input.value = "";
};
addBtn.addEventListener("click", add);
