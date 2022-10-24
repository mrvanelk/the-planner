import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain/employee';
import { Shift } from 'src/app/domain/shift';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShiftsComponent implements OnInit {
  shifts: Shift[] = [];
  shift: Shift = new Shift();

  displayedColumns: string[] = ['name', 'startTime', 'endTime', 'date'];

  employees: Employee[] = [];

  addShift(): void {
    const shift = new Shift();
    shift.id = Date.now();
    shift.name = this.shift.name;
    shift.startTime = this.shift.startTime;
    shift.endTime = this.shift.endTime;
    shift.date = this.shift.date;
    shift.day = new Date(this.shift.date).getDay();

    this.localStorageService.setItem(shift, 'shifts');

    this.shift.name = '';

    this.shift = {
      id: 0,
      name: '',
      startTime: '',
      endTime: '',
      date: new Date(),
      day: 0,
    };

    this.shifts = this.localStorageService.getItem('shifts');
  }

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.employees = this.localStorageService.getItem('employees');
    this.shifts = this.localStorageService.getItem('shifts');
  }
}
