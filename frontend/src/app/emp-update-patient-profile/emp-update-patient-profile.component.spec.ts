import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdatePatientProfileComponent } from './emp-update-patient-profile.component';

describe('EmpUpdatePatientProfileComponent', () => {
  let component: EmpUpdatePatientProfileComponent;
  let fixture: ComponentFixture<EmpUpdatePatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpUpdatePatientProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpUpdatePatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
