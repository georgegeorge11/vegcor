import { Project } from "./project.model";
import { Team } from "./team.model";

export class ProjectTeam {
  projectTeamPK: number;
  projectPK: number;
  project: Project;
  teamPK: number;
  team: Team;

  constructor() {
    this.projectTeamPK = 0;
    this.projectPK = 0;
    this.project = new Project();
    this.teamPK = 0;
    this.team = new Team();

  }
}