// Compiled JavaScript version of src/typescript/task-planner.ts
class AcademicTask {
  constructor(title, priority, dueDate) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

class AcademicTaskPlanner {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    this.sortTasks();
  }

  sortTasks() {
    const order = { High: 1, Medium: 2, Low: 3 };
    this.tasks.sort((a, b) => order[a.priority] - order[b.priority]);
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (this.tasks.length === 0) {
      container.innerHTML = "<p>No academic tasks added yet.</p>";
      return;
    }
    container.innerHTML = this.tasks.map(task => `
      <div class="task-item">
        <div><strong>${task.title}</strong><br><small>Due: ${task.dueDate || "No date"}</small></div>
        <span class="pill ${task.priority}">${task.priority}</span>
      </div>
    `).join("");
  }
}

const planner = new AcademicTaskPlanner();

function addAcademicTask() {
  const title = document.getElementById('taskTitle').value.trim();
  const priority = document.getElementById('taskPriority').value;
  const dueDate = document.getElementById('taskDue').value;
  if (!title) {
    alert('Please enter a task title.');
    return;
  }
  planner.addTask(new AcademicTask(title, priority, dueDate));
  planner.render('taskPlannerOutput');
  document.getElementById('taskTitle').value = '';
}

document.addEventListener('DOMContentLoaded', () => planner.render('taskPlannerOutput'));
