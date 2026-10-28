import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddPatientProfileComponent } from './emp-add-patient-profile.component';

describe('EmpAddPatientProfileComponent', () => {
  let component: EmpAddPatientProfileComponent;
  let fixture: ComponentFixture<EmpAddPatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAddPatientProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpAddPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
