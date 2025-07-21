export class Sprint {
  sprintPK: number;
  sprintName: string;
  duration: number;
  startDate: Date;
  endDate: Date;

  constructor() {
    this.sprintPK = 0;
    this.sprintName = '';
    this.duration = 0;
    this.startDate = new Date();
    this.endDate = new Date();
  }
}