import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ShiftsComponent } from './components/shifts/shifts.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'shifts',
    component: ShiftsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
