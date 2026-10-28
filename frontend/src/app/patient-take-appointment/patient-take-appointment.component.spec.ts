import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTakeAppointmentComponent } from './patient-take-appointment.component';

describe('PatientTakeAppointmentComponent', () => {
  let component: PatientTakeAppointmentComponent;
  let fixture: ComponentFixture<PatientTakeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientTakeAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientTakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
