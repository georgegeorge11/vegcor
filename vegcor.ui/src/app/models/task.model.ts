import { Feature } from "./feature.model";
import { Status } from "./status.model";
import { User } from "./user.model";

export class Task {
  taskPK: number;
  taskName: string
  taskDescription: string;
  statusPK: number;
  status: Status;
  featurePK: number;
  feature: Feature;
  assignedTo: number;
  user: User;
  complexity: number;

  constructor() {
    this.taskPK = 0;
    this.taskName = '';
    this.taskDescription = '';
    this.statusPK = 0;
    this.status = new Status();
    this.featurePK = 0;
    this.feature = new Feature();
    this.assignedTo = 0;
    this.user = new User();
    this.complexity = 0;
  }
}