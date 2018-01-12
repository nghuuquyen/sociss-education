/**
* @name tasks
* @module controller
* @description
* Hold all current todo tasks of application.
* @type array
*/
var tasks = [];

activePage();

/**
* @name activePage
* @module controller
* @description
* Active function for initial datas, event and render view page.
*/
function activePage() {
  bindingHotKeyEvent();

  // Load all tasks from database.
  tasks = getTasks();
  // Add all tasks in session to table.
  for(let i in tasks) {
    addTaskToTable(tasks[i]);
  }
}



/**
* @name saveTask
* @module business
* @description
* Save new task to session storage.
* @param  {object} task new todo task.
* @return void
*/
function saveTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
* @name saveTasks
* @module business
* @description
* Save current task lists to local storage.
*
* @return void
*/
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
* @name getTasks
* @module business
* @description
* Get tasks list from session storage.
*
* @return {array} List of tasks.
*/
function getTasks() {
  try {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  } catch(err) {
    return [];
  }
}

/**
* @name submitNewTaskForm
* @module controller
* @description
* Add new task from form data, it also validate task data if
* not valid will throw error via alert box.
*
* @return void
*/
function submitNewTaskForm() {
  var task = getNewTaskFormData();

  try {
    // Validate data.
    validateTask(task);
    // Put task to database.
    saveTask(task);
    // Render to view table.
    addTaskToTable(task);
    // Reset view form.
    resetNewTaskForm();
  } catch(err) {
    window.alert(err.message);
  }
}

/**
* @name tableRowClickHandler
* @module controller
* @description
* Event handle function fire on user clicked each row table. When user
* clicked, we will change task status.
*
* @return void
*/
function tableRowClickHandler() {
  var row = this;

  // Get selected task in database.
  var task = tasks.find(function(task) {
    return task.id === row.id;
  });

  if(!task) return;

  if(task.status === 'doing') {
    row.classList.remove('doing');
    row.classList.add('done');
    row.cells[3].innerHTML = 'done';
    task.status = 'done';
    saveTasks();
    return;
  }

  if(task.status === 'done') {
    row.classList.remove('done');
    row.classList.add('doing');
    row.cells[3].innerHTML = 'doing';
    task.status = 'doing';
    saveTasks();
    return;
  }
}

/**
* @name addTaskToTable
* @module controller
* @description
* Render new task to view table.
*
* @param {object} task New todo task.
*/
function addTaskToTable(task) {
  var table = document.getElementById('tb-list-todo');
  var row = table.insertRow();

  // Must set row ID for identity task.
  row.id = task.id;
  row.classList.add('data-list-todo');
  row.classList.add(task.status);
  row.onclick = tableRowClickHandler;

  var nameCell = row.insertCell(0);
  var sTimeCell = row.insertCell(1);
  var eTimeCell = row.insertCell(2);
  var statusCell = row.insertCell(3);
  var btnCell = row.insertCell(4);

  nameCell.innerHTML = task.name;
  sTimeCell.innerHTML = task.timeStart;
  eTimeCell.innerHTML = task.timeEnd;
  statusCell.innerHTML = task.status;

  btnCell.innerHTML = '\u00D7';
  btnCell.className = 'close';

  // Add remove task event.
  btnCell.onclick = function() {
    var taskRow = this.parentElement;

    // Find selected task index for remove form database.
    taskIndex = tasks.findIndex(function(task) {
      return task.id === taskRow.id;
    });

    if(taskIndex !== -1) {
      // remove task from database.
      tasks.splice(taskIndex, 1);
      // update database.
      saveTasks();
      // remove from view table.
      taskRow.remove();
    }
  }
}

/**
* @name getNewTaskFormData
* @module controller
* @description
* Get task data form new task form.
*
* @return {object} New task data.
*/
function getNewTaskFormData() {
  return {
    id : randomString(15),
    name : document.getElementById('name').value,
    timeStart : document.getElementById('time-start').value || null,
    timeEnd : document.getElementById('time-end').value || null,
    status : 'doing'
  };
}

/**
* @name validateTask
* @module business
* @description
* Validate task data, return true if data is valid, if not
* break progam by throw error.
*
* @throws {error} Task name is required error.
* @param  {object} task [description]
* @return {boolean} True if data task valid.
*/
function validateTask(task) {
  if(!task.name) {
    throw new Error('Task name is required.');
  }

  return true;
}

/**
* @name resetNewTaskForm
* @description
* Reset add new task form.
*/
function resetNewTaskForm() {
  document.getElementById('name').value = '';
  document.getElementById('time-start').value = '';
  document.getElementById('time-end').value = '';
}

/**
* @name bindingHotKeyEvent
* @module controller
* @description
* Binding hot key for active page function by keyboard.
*
* @return void
*/
function bindingHotKeyEvent() {
  document.addEventListener('keydown', function(e) {
    var evt = e ? e : window.event;

    // Ctrl + B
    if(evt.ctrlKey && String.fromCharCode(evt.keyCode) === 'B') {
      showDoingListTaskPopup();
    }
  });
}

/**
* @name showDoingListTaskPopup
* @module controller
* @description
* Show all doing tasks of user on dialog box, sorted by time.
*
* @return void
*/
function showDoingListTaskPopup() {
  var message = 'Current Doing Tasks \n\n';

  // Filter only doing tasks.
  var doingTasks = tasks.filter(function(task) {
    return task.status === 'doing';
  });

  // Sort by time.
  doingTasks.sort(function(taskA, taskB) {
    return taskA.timeStart > taskB.timeStart;
  });

  for(let i in doingTasks) {
    message += i + '. ' + doingTasks[i].name;
    if(doingTasks[i].timeStart) {
      message += ' start at ' + doingTasks[i].timeStart;
    }

    message += '\n';
  }

  window.alert(message);
}

/**
* @name randomString
* @module business
* @description
* Get random string with given length.
*
* @param  {number} length Length of random string.
* @return {string} Random string.
*/
function randomString(length) {
  var text = '';
  var charsets = 'QWERTYUIOPASDFGHJKLZXCVBNM123456789';

  for (var i = 0; i < length; i++) {
    text += charsets.charAt(Math.floor(Math.random() * charsets.length));
  }

  return text;
}
