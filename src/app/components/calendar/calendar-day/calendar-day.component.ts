import { Component, HostBinding, Input } from '@angular/core';
import { Calendar } from 'src/app/domain/calendar';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss'],
})
export class CalendarDayComponent {
  @HostBinding('class.calendar-day') componentClass = true;

  @Input() calendar!: Calendar;
  @Input() day!: number;
}
