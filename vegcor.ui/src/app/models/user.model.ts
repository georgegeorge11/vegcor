export class User {
  userPK: number;
  firstName: string
  lastName: string;
  userName: string;
  password: string;

  constructor() {
    this.userPK = 0;
    this.firstName = '';
    this.lastName = '';
    this.userName = '';
    this.password = '';
  }
}