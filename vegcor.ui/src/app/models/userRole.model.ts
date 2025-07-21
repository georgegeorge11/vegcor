import { Role } from "./role.model";
import { User } from "./user.model";

export class UserRole {
  userRolePK: number
  userPK: number;
  user: User;
  rolePK: number;
  role: Role;

  constructor() {
    this.userRolePK = 0;
    this.userPK = 0;
    this.rolePK = 0;
    this.user = new User();
    this.role = new Role();
    
  }
}