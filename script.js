const input = document.querySelector("#input");
const addElement = document.querySelector("#add");
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
};
const clearInput = () => {
  input.value = "";
};
// addElement.onclick = add;
addElement.addEventListener("click", add);
