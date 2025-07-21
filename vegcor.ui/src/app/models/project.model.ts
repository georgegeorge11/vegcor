import { Status } from "./status.model";

export class Project {
  projectPK: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  statusPK: number;
  status: Status;

  constructor() {
    this.projectPK = 0;
    this.title = '';
    this.description = '';
    this.startDate = new Date();
    this.endDate = new Date();
    this.statusPK = 0;
    this.status = new Status();
  }
}