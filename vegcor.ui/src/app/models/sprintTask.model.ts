import { Sprint } from "./sprint.model";
import { Task } from "./task.model";

export class SprintTask {
  sprintTaskPK: number;
  sprintPK: number;
  sprint: Sprint;
  taskPK: number;
  task: Task;

  constructor() {
    this.sprintTaskPK = 0;
    this.sprintPK = 0;
    this.sprint = new Sprint();
    this.taskPK = 0;
    this.task = new Task();
  }
}