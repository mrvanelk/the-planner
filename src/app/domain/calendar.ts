import { Employee } from './employee';
import { Shift } from './shift';

export class Calendar {
  employee!: Employee;
  shifts!: Shift[];
  day!: number;
}
