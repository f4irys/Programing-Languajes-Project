// Object-Oriented Program: Mini Smart Academic Task Planner in TypeScript
class AcademicTask {
  title: string;
  priority: string;
  dueDate: string;

  constructor(title: string, priority: string, dueDate: string) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

class AcademicTaskPlanner {
  private tasks: AcademicTask[] = [];

  addTask(task: AcademicTask): void {
    this.tasks.push(task);
    this.sortTasks();
  }

  private sortTasks(): void {
    const order: Record<string, number> = { High: 1, Medium: 2, Low: 3 };
    this.tasks.sort((a, b) => order[a.priority] - order[b.priority]);
  }

  render(containerId: string): void {
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
