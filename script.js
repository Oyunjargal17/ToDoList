const input = document.querySelector("#input");
const addElement = document.querySelector("#add");
const tasksContainer= document.querySelector("#taskContainer")
console.log(input);
console.log(addElement);

const tasks = [];
let taskId = 1;
const add = () => {
  const todoText = input.value;
  const task = {
    id: taskId,
    text: todoText,
    isComplete: false,
  };

  tasks.push(task);
  taskId++;
  console.log(tasks);
  clearInput();
  renderTasks();
};
const renderTasks= () =>
{
        tasks.forEach((task)=>
        {
          const taskElement = createTaskElement(task);
          tasksContainer.innerHTML= taskElement;
        })
}
const createTask= (task)=>
{
  return `<div class="task">
          <input type="checkbox" class="task__checkbox" name="checkbox">
          <p class="task__text">${task.text}</p>
          <button class="task__delete">delete</button>
        </div>`
}
const clearInput = () => {
  input.value = "";
};
// addElement.onclick = add;
addElement.addEventListener("click", add);
