import { Project } from "./project.model";
import { Status } from "./status.model";

export class Feature {
  featurePK: number;
  featureName: string;
  featureDescription: string;
  statusPK: number;
  status: Status;
  projectPK: number;
  project: Project;

  constructor() {
    this.featurePK = 0;
    this.featureName = '';
    this.featureDescription = '';
    this.statusPK = 0;
    this.projectPK = 0;
    this.status = new Status();
    this.project = new Project();
  }
}