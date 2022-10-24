import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftModalComponent } from './shift-modal.component';

describe('ShiftModalComponent', () => {
  let component: ShiftModalComponent;
  let fixture: ComponentFixture<ShiftModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
