import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Shift } from 'src/app/domain/shift';
import { ShiftModalComponent } from './shift-modal/shift-modal.component';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
})
export class ShiftComponent {
  @Input() shift!: Shift;
  @Input() day!: number;

  constructor(public dialog: MatDialog) {}

  openShift(): void {
    this.dialog.open(ShiftModalComponent, {
      data: {
        id: this.shift.id,
        name: this.shift.name,
        startTime: this.shift.startTime,
        endTime: this.shift.endTime,
        date: this.shift.date,
      },
    });
  }
}
