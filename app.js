let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let timeLeft = 1500;
let timerInterval;

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === "") return;

  tasks.push({
    text: taskText,
    date: taskDate,
    done: false
  });

  saveTasks();
  taskInput.value = "";
  dateInput.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.sort((a, b) => new Date(a.date || "9999-12-31") - new Date(b.date || "9999-12-31"));

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTask(${index})" ${task.done ? "checked" : ""}>
      ${task.text} ${task.date ? "- Due: " + task.date : ""}
    `;
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      alert("Timer finished!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 1500;
  updateTimer();
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

renderTasks();
updateTimer();