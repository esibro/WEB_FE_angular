import {User} from "./user";
export {User} from "./user";
import {Timeslot} from "./timeslot";
export {Timeslot} from "./timeslot";


export class Course {
  constructor(
    public id: number,
    public subject: string,
    public level: string,
    public state: string,
    public user_id: number,
    public student_id: number,
    public users: User[],
    public timeslots: Timeslot[],
    public description?: string
  ) {
  }
}
