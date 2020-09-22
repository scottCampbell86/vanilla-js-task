//Define UI vars
const form = document.querySelector('#task-form');
const taksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners

const loadListeners = () => {
  form.addEventListener('submit', addTask);
}

const addTask = e => {
  e.preventDefault();
  if (taskInput.value === '') alert('Add a task');
  
  //create li element
  const li = document.createElement('li');
  //add class to that li
  li.className = 'collection-item';
  //create text node, assign it the conent of the input value, and append it to the li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to li
  li.appendChild(link);

  //append li to ul
  taksList.appendChild(li);

  //clear input
  taskValue.input = '';

}