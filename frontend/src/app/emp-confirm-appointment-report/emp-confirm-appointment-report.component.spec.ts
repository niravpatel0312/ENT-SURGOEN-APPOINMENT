import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpConfirmAppointmentReportComponent } from './emp-confirm-appointment-report.component';

describe('EmpConfirmAppointmentReportComponent', () => {
  let component: EmpConfirmAppointmentReportComponent;
  let fixture: ComponentFixture<EmpConfirmAppointmentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpConfirmAppointmentReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpConfirmAppointmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
