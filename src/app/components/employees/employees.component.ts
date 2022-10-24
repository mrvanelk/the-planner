import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain/employee';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  employee: Employee = new Employee();

  displayedColumn: string[] = ['name'];

  constructor(private localStorageService: LocalStorageService) {}

  addEmployee(): void {
    const employee = new Employee();
    employee.id = Date.now();
    employee.name = this.employee.name;

    this.localStorageService.setItem(employee, 'employees');
    this.employees = this.localStorageService.getItem('employees');
    this.employee.name = '';
  }

  ngOnInit(): void {
    this.employees = this.localStorageService.getItem('employees');
  }
}
