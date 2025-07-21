export class AuditInfo {
  createdOn: Date;
  createdByUserPK: number;
  updatedOn: Date;
  updatedByUserPK: number;
  deletedOn: Date;
  deletedByUserPK: number;
  constructor(){
    this.createdOn = new Date();
    this.createdByUserPK = 0;
    this.updatedOn = new Date();
    this.updatedByUserPK = 0;
    this.deletedOn = new Date();
    this.deletedByUserPK = 0;
  }
}