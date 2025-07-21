import { Team } from "./team.model";
import { User } from "./user.model";

export class TeamUser {
  teamUserPK: number;
  teamPK: number;
  team: Team;
  userPK: number;
  user: User;

  constructor() {
    this.teamUserPK = 0;
    this.teamPK = 0;
    this.userPK = 0;
    this.team = new Team();
    this.user = new User();
  }
}