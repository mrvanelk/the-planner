import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CalendarDayComponent } from './components/calendar/calendar-day/calendar-day.component';
import { ShiftComponent } from './components/calendar/shift/shift.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShiftModalComponent } from './components/calendar/shift/shift-modal/shift-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    EmployeesComponent,
    ShiftsComponent,
    CalendarDayComponent,
    ShiftComponent,
    ShiftModalComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
