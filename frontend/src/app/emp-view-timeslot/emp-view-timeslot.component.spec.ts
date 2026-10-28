import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewTimeslotComponent } from './emp-view-timeslot.component';

describe('EmpViewTimeslotComponent', () => {
  let component: EmpViewTimeslotComponent;
  let fixture: ComponentFixture<EmpViewTimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpViewTimeslotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpViewTimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
