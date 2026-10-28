import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdateSlotComponent } from './emp-update-slot.component';

describe('EmpUpdateSlotComponent', () => {
  let component: EmpUpdateSlotComponent;
  let fixture: ComponentFixture<EmpUpdateSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpUpdateSlotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpUpdateSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
