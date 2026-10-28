import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPatientDetailReportComponent } from './emp-patient-detail-report.component';

describe('EmpPatientDetailReportComponent', () => {
  let component: EmpPatientDetailReportComponent;
  let fixture: ComponentFixture<EmpPatientDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpPatientDetailReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpPatientDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
