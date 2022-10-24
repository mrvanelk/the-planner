import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shift } from 'src/app/domain/shift';

@Component({
  selector: 'app-shift-modal',
  templateUrl: './shift-modal.component.html',
  styleUrls: ['./shift-modal.component.scss'],
})
export class ShiftModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Shift) {}
}
