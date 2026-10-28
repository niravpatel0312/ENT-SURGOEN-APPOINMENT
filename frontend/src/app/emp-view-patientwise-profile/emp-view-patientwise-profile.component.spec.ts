import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewPatientwiseProfileComponent } from './emp-view-patientwise-profile.component';

describe('EmpViewPatientwiseProfileComponent', () => {
  let component: EmpViewPatientwiseProfileComponent;
  let fixture: ComponentFixture<EmpViewPatientwiseProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpViewPatientwiseProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpViewPatientwiseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
