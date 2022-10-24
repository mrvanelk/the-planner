import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/domain/calendar';
import { Employee } from 'src/app/domain/employee';
import { Shift } from 'src/app/domain/shift';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendar: Calendar[] | any = [];

  employees!: Employee[];
  shifts!: Shift[];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.employees = this.localStorageService.getItem('employees');
    this.shifts = this.localStorageService.getItem('shifts');

    this.calendar = this.employees.map((employee) => {
      const filteredShifts = this.shifts.filter(
        (shift) => shift.name === employee.name
      );

      return {
        employee: employee,
        shifts: filteredShifts,
        day: [...new Set(filteredShifts.map((shift) => shift.day))],
      };
    });
  }
}
