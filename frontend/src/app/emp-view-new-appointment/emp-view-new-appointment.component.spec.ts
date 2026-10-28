import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewNewAppointmentComponent } from './emp-view-new-appointment.component';

describe('EmpViewNewAppointmentComponent', () => {
  let component: EmpViewNewAppointmentComponent;
  let fixture: ComponentFixture<EmpViewNewAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpViewNewAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpViewNewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
