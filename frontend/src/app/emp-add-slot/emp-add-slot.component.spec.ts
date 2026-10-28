import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddSlotComponent } from './emp-add-slot.component';

describe('EmpAddSlotComponent', () => {
  let component: EmpAddSlotComponent;
  let fixture: ComponentFixture<EmpAddSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAddSlotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpAddSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
