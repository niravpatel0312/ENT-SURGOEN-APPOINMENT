import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTodayAppointmentReportComponent } from './emp-today-appointment-report.component';

describe('EmpTodayAppointmentReportComponent', () => {
  let component: EmpTodayAppointmentReportComponent;
  let fixture: ComponentFixture<EmpTodayAppointmentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTodayAppointmentReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpTodayAppointmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
