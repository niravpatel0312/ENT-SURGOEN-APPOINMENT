import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewPatientProfileComponent } from './emp-view-patient-profile.component';

describe('EmpViewPatientProfileComponent', () => {
  let component: EmpViewPatientProfileComponent;
  let fixture: ComponentFixture<EmpViewPatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpViewPatientProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpViewPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
