import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNotconfirmAppointmentReportComponent } from './emp-notconfirm-appointment-report.component';

describe('EmpNotconfirmAppointmentReportComponent', () => {
  let component: EmpNotconfirmAppointmentReportComponent;
  let fixture: ComponentFixture<EmpNotconfirmAppointmentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpNotconfirmAppointmentReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpNotconfirmAppointmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
