import {Address} from './address';
import {SkillMatrixs} from './skillMatrixs';

export class Employee {
  employeeId: number;
  name: string;
  emailId: string;
  phoneNumber: string;
  gender: string;
  approverId: string;
  address: Address;
  skillMatrixs: SkillMatrixs[];
}
